"use client";

import { useEffect, useRef } from "react";
import { artworks } from "../../../data/artworks";

export default function ArtGrid({ onArtClick, isViewerOpen }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const isViewerOpenRef = useRef(false);

  useEffect(() => {
    isViewerOpenRef.current = isViewerOpen;
  }, [isViewerOpen]);

  useEffect(() => {
    const planes = window.__artPlanes;

    if (!planes) return;

    planes.forEach((plane) => {
      if (!plane.video) return;

      if (isViewerOpen) {
        plane.video.pause();
      } else {
        plane.video.play().catch(() => {});
      }
    });
  }, [isViewerOpen]);

  useEffect(() => {
    let ww = window.innerWidth;
    let wh = window.innerHeight;

    const isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
    const isWindows = navigator.appVersion.indexOf("Win") !== -1;
    const mouseMultiplier = 0.6;
    const firefoxMultiplier = 20;
    const multipliers = {
      mouse: isWindows ? mouseMultiplier * 2 : mouseMultiplier,
      firefox: isWindows ? firefoxMultiplier * 2 : firefoxMultiplier,
    };

    // ── SHADERS ──────────────────────────────────────────────
    const vertexShader = `
      precision mediump float;
      uniform float u_diff;
      varying vec2 vUv;
      void main(){
        vec3 pos = position;
        pos.y *= 1. - u_diff;
        pos.x *= 1. - u_diff;
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
      }
    `;

    const fragmentShader = `
      precision mediump float;
      uniform vec2 u_res;
      uniform vec2 u_size;
      uniform sampler2D u_texture;
      vec2 cover(vec2 screenSize, vec2 imageSize, vec2 uv) {
        float screenRatio = screenSize.x / screenSize.y;
        float imageRatio = imageSize.x / imageSize.y;
        vec2 newSize = screenRatio < imageRatio
          ? vec2(imageSize.x * (screenSize.y / imageSize.y), screenSize.y)
          : vec2(screenSize.x, imageSize.y * (screenSize.x / imageSize.x));
        vec2 newOffset = (screenRatio < imageRatio
          ? vec2((newSize.x - screenSize.x) / 2.0, 0.0)
          : vec2(0.0, (newSize.y - screenSize.y) / 2.0)) / newSize;
        return uv * screenSize / newSize + newOffset;
      }
      varying vec2 vUv;
      void main() {
        vec2 uv = vUv;
        vec2 uvCover = cover(u_res, u_size, uv);
        vec4 texture = texture2D(u_texture, uvCover);
        gl_FragColor = texture;
      }
    `;

    // ── DYNAMIC IMPORT THREE ─────────────────────────────────
    import("three").then((THREE) => {
      const loader = new THREE.TextureLoader();
      const geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
      const baseMaterial = new THREE.ShaderMaterial({
        fragmentShader,
        vertexShader,
      });

      // ── SCENE SETUP ────────────────────────────────────────
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(
        ww / -2,
        ww / 2,
        wh / 2,
        wh / -2,
        1,
        1000,
      );
      camera.lookAt(scene.position);
      camera.position.z = 1;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: canvasRef.current,
      });
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();
      renderer.setSize(ww, wh);
      renderer.setPixelRatio(
        Math.min(Math.max(window.devicePixelRatio, 1), 1.5),
      );

      // ── STATE ───────────────────────────────────────────────
      let tx = 0,
        ty = 0,
        cx = 0,
        cy = 0;
      let isDragging = false;
      let hasDragged = false;

      const on = { x: 0, y: 0 };
      const wheel = { x: 0, y: 0 };
      const max = { x: 0, y: 0 };

      // ── PLANE CLASS ─────────────────────────────────────────
      class Plane extends THREE.Object3D {
        constructor(art, index) {
          super();
          this.art = art;
          this.index = index;
          this.x = 0;
          this.y = 0;
          this.my = 1 - (index % 5) * 0.1;

          this.material = baseMaterial.clone();
          this.material.uniforms = {
            u_texture: { value: 0 },
            u_res: { value: new THREE.Vector2(1, 1) },
            u_size: { value: new THREE.Vector2(1, 1) },
            u_diff: { value: 0 },
          };

          if (art.isVideo) {
            const video = document.createElement("video");

            video.src = art.src;
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            video.preload = "metadata";
            // video.autoplay = true;

            video.play().catch(() => {});

            this.video = video; // store for cleanup

            const texture = new THREE.VideoTexture(video);

            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.generateMipmaps = false;

            this.material.uniforms.u_texture.value = texture;

            video.addEventListener("loadedmetadata", () => {
              this.material.uniforms.u_size.value.set(
                video.videoWidth,
                video.videoHeight,
              );
            });
          } else {
            loader.load(art.src, (texture) => {
              texture.minFilter = THREE.LinearFilter;
              texture.generateMipmaps = false;

              const { naturalWidth, naturalHeight } = texture.image;

              this.material.uniforms.u_texture.value = texture;

              this.material.uniforms.u_size.value.set(
                naturalWidth,
                naturalHeight,
              );
            });
          }

          this.mesh = new THREE.Mesh(geometry, this.material);
          this.add(this.mesh);
          this.resize();
        }

        update(x, y, max, diff) {
          const { right, bottom } = this.rect;
          this.y =
            gsapWrap(-(max.y - bottom), bottom, y * this.my) - this.yOffset;
          this.x = gsapWrap(-(max.x - right), right, x) - this.xOffset;

          this.material.uniforms.u_diff.value = diff;
          this.position.x = this.x;
          this.position.y = this.y;
        }

        resize() {
          // get the DOM element position
          const el = document.querySelector(`[data-art-id="${this.art.id}"]`);
          if (!el) return;
          this.rect = el.getBoundingClientRect();
          const { left, top } = this.rect;

          const width = this.rect.width;
          const height = this.rect.height;

          const domWidth = this.rect.width;
          const domHeight = this.rect.height;

          this.xOffset = left + domWidth / 2 - ww / 2;
          this.yOffset = top + domHeight / 2 - wh / 2;

          this.position.x = this.xOffset;
          this.position.y = -this.yOffset;

          this.material.uniforms.u_res.value.set(width, height);
          this.mesh.scale.set(width, height, 1);
        }
      }

      // gsap.utils.wrap equivalent
      function gsapWrap(min, max, value) {
        const range = max - min;
        return ((((value - min) % range) + range) % range) + min;
      }

      // ── CREATE PLANES ───────────────────────────────────────
      const planes = artworks.map((art, i) => {
        const plane = new Plane(art, i);
        scene.add(plane);
        return plane;
      });

      window.__artPlanes = planes;

      // get grid bounds
      const gridEl = containerRef.current;
      const { bottom, right } = gridEl.getBoundingClientRect();
      max.x = right;
      max.y = bottom;

      // ── ANIMATION LOOP ──────────────────────────────────────
      let animId;
      function tick() {
        animId = requestAnimationFrame(tick);

        if (isViewerOpenRef.current) {
          return;
        }

        const xDiff = tx - cx;
        const yDiff = ty - cy;

        cx += xDiff * 0.12;
        cx = Math.round(cx * 100) / 100;
        cy += yDiff * 0.12;
        cy = Math.round(cy * 100) / 100;

        const diff = Math.max(
          Math.abs(yDiff * 0.0001),
          Math.abs(xDiff * 0.0001),
        );

        planes.forEach((plane) => plane.update(cx, cy, max, diff));
        renderer.render(scene, camera);
      }
      tick();

      // ── EVENTS ──────────────────────────────────────────────
      // function onMouseMove({ clientX, clientY }) {
      //   if (isViewerOpenRef.current) return;
      //   if (!isDragging) return;

      //   hasDragged = true;

      //   tx = on.x + clientX * 3;
      //   ty = on.y - clientY * 3;
      // }

      function onMouseMove({ clientX, clientY }) {
  if (isViewerOpenRef.current) return;

  // ---------- HOVER DETECTION ----------
  mouse.x = (clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(
    planes.map((p) => p.mesh),
  );

  if (canvasRef.current) {
    if (intersects.length > 0) {
      canvasRef.current.style.cursor = "pointer";
    } else if (isDragging) {
      canvasRef.current.style.cursor = "grabbing";
    } else {
      canvasRef.current.style.cursor = "grab";
    }
  }

  // ---------- DRAGGING ----------
  if (!isDragging) return;

  hasDragged = true;

  tx = on.x + clientX * 3;
  ty = on.y - clientY * 3;
}
      function onMouseDown({ clientX, clientY }) {
        if (isViewerOpenRef.current) return;
        if (isDragging) return;
        isDragging = true;
        hasDragged = false;
        on.x = tx - clientX * 3;
        on.y = ty + clientY * 3;
        if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
      }

      function onMouseUp() {
        isDragging = false;
        if (canvasRef.current) {
          canvasRef.current.style.cursor = "grab";
        }
      }

      function onWheel(e) {
        if (isViewerOpenRef.current) return;
        const { mouse, firefox } = multipliers;
        wheel.x = e.wheelDeltaX || e.deltaX * -1;
        wheel.y = e.wheelDeltaY || e.deltaY * -1;
        if (isFirefox && e.deltaMode === 1) {
          wheel.x *= firefox;
          wheel.y *= firefox;
        }
        wheel.y *= mouse;
        wheel.x *= mouse;
        tx += wheel.x;
        ty -= wheel.y;
      }

      function onClick(e) {
        if (hasDragged) {
          hasDragged = false;
          return;
        }

        if (isViewerOpenRef.current) return;
        if (isDragging) return;

        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(
          planes.map((p) => p.mesh),
        );

        if (intersects.length > 0) {
          const mesh = intersects[0].object;

          const plane = planes.find((p) => p.mesh === mesh);

          if (plane) {
            onArtClick(plane.art);
          }
        }
      }

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mousedown", onMouseDown);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("wheel", onWheel);
      window.addEventListener("click", onClick);

      // ── CLEANUP ─────────────────────────────────────────────
      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mousedown", onMouseDown);
        window.removeEventListener("mouseup", onMouseUp);
        window.removeEventListener("wheel", onWheel);
        window.removeEventListener("click", onClick);

        planes.forEach((plane) => {
          if (plane.video) {
            plane.video.pause();
            plane.video.src = "";
          }
        });
        renderer.dispose();
      };
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "150%",
        height: "150%",
      }}
    >
      {/* hidden DOM elements for position reference */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          pointerEvents: "none",
        }}
      >
        {artworks.map((art) => (
          <div key={art.id} style={{ position: "relative" }}>
            <figure
              data-art-id={art.id}
              style={{
                position: "absolute",
                inset: "0.5rem",
                padding: 0,
                margin: 0,
              }}
            />
          </div>
        ))}
      </div>

      {/* Three.js canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          cursor: "grab",
          zIndex: isViewerOpen ? -1 : 1,
        }}
      />
    </div>
  );
}

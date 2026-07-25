"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  // useEffect(() => {
  //   let $;

  //   let isMounted = true;

  //   const overlay = overlayRef.current;
  //   const video = videoRef.current;

  //   async function initRipples() {
  //     // load jquery only in browser
  //     $ = (await import("jquery")).default;

  //     if (!isMounted || !overlay) return;

  //     // load the ripple plugin only in browser
  //     await import("jquery.ripples");

  //     if (!isMounted || !overlay) return;

  //     if (video) {
  //       video.playbackRate = 0.7;
  //     }

  //     $(overlay).ripples({
  //       resolution: 200,
  //       perturbance: 0.005,
  //       interactive: true,
  //     });
  //   }

  //   initRipples();

  //   return () => {
  //     isMounted = false;

  //     try {
  //       if ($ && overlay) {
  //         $(overlay).ripples("destroy");
  //       }
  //     } catch {}
  //   };
  // }, []);

  return (
    <div className="background-wrap">
      <video
        ref={videoRef}
        src="/underwater.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
      />

      <div ref={overlayRef} className="bg-overlay" />
    </div>
  );
}

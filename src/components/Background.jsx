"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    let $;

    async function initRipples() {
      // load jquery only in browser
      $ = (await import("jquery")).default;

      // load the ripple plugin only in browser
      await import("jquery.ripples");

      if (videoRef.current) {
        videoRef.current.playbackRate = 0.7;
      }

      if (!overlayRef.current) return;

      $(overlayRef.current).ripples({
        resolution: 256,
        perturbance: 0.01,
        interactive: true,
      });
    }

    initRipples();

    return () => {
      try {
        if ($ && overlayRef.current) {
          $(overlayRef.current).ripples("destroy");
        }
      } catch {}
    };
  }, []);

  return (
    <div className="background-wrap">
      <video
        ref={videoRef}
        src="/underwater_bg.mp4"
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
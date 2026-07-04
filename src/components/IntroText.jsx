"use client";
import { useEffect } from "react";

const sparkleData = Array.from({ length: 12 }, () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDelay: `${Math.random() * 4}s`,
  animationDuration: `${3 + Math.random() * 3}s`,
}));

export default function IntroText({ stage, setStage }) {
  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 1200);
    const t2 = setTimeout(() => setStage(2), 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  
  return (
    <>
      <svg
        aria-hidden="true"
        style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      >
        <defs>
          <filter id="wet-ink" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.028 0.042" numOctaves="5" seed="18" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.5" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="0.7" />
          </filter>
          <filter id="wet-ink-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
      </svg>

      {/* CENTER TEXT */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-3.5deg) scale(1)",
          opacity: stage === 0 ? 1 : 0,
          transition: "opacity 0.6s ease",
          pointerEvents: "none",
          zIndex: 50,
        }}
      >
        <Text />
      </div>

      {/* TOP TEXT + MERMAID */}
      {stage === 2 && (
        <>
          <img
            src="/mermaid.gif"
            alt="mermaid"
            style={{
              position: "fixed",
              top: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 49,
              width: "300px",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "fixed",
              top: "-30px",
              left: "50%",
              transform: "translateX(-50%) scale(0.42)",
              pointerEvents: "none",
              zIndex: 50,
            }}
          >
            <Text />
          </div>
        </>
      )}
    </>
  );
}

function Text() {
  return (
    <div style={{ position: "relative" }}>
      <Sparkles />
      <h1
        style={{
          fontFamily: '"Miss Fajardose", cursive',
          fontSize: "clamp(4rem, 11vw, 8rem)",
          color: "#e8f4f8",
          filter: "url(#wet-ink)",
          textShadow: `
            0 0 30px rgba(140, 220, 255, 0.5),
            0 0 60px rgba(100, 180, 240, 0.3),
            0 2px 8px rgba(0, 80, 140, 0.6)
          `,
          margin: 0,
          position: "relative",
          zIndex: 2,
        }}
      >
        Webspace 511
      </h1>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          color: "rgba(160, 230, 255, 0.18)",
          filter: "url(#wet-ink-glow)",
          pointerEvents: "none",
          margin: 0,
          zIndex: 1,
        }}
      >
        Neveah&apos;s Haven
      </div>
    </div>
  );
}

function Sparkles() {
  return (
    <>
      {sparkleData.map((sparkle, i) => (
        <span
          key={i}
          className="sparkle"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            animationDelay: sparkle.animationDelay,
            animationDuration: sparkle.animationDuration,
          }}
        />
      ))}
    </>
  );
}
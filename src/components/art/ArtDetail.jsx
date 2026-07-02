"use client";
import { motion } from "framer-motion";

export default function ArtDetail({ artwork, artworkRect, onClose }) {
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{
        x: -80,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        x: -80,
        opacity: 0,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      style={{
        position: "fixed",

        left: artworkRect.right - 250,
        top: artworkRect.top,

        width: "400px",
        height: artworkRect.height,

        background: "#111",
        color: "white",

        borderLeft: "1px solid rgba(255,255,255,0.15)",

        zIndex: 52,
        padding: "40px",
        boxSizing: "border-box",
        overflowY: "auto",

        display: "flex",
flexDirection: "column",
        
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          background: "none",
          border: "none",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        ✕
      </button>

      <h1>{artwork.title}</h1>

      <p
        style={{
          marginTop: "20px",
          color: "rgba(255,255,255,0.75)",
          lineHeight: 1.7,
          fontSize: "15px",
        }}
      >
        {artwork.description}
      </p>

      <div
  style={{
    marginTop: "auto",
    paddingTop: "24px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    fontSize: "13px",
    color: "rgba(255,255,255,0.5)",
  }}
>
  Follow my work on{" "}
  <a
    href="https://instagram.com/star5hollow.scribe"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "rgba(255,255,255,0.85)",
      textDecoration: "none",
      borderBottom: "1px solid rgba(255,255,255,0.2)",
    }}
  >
    @star5hollow.scribe
  </a>
</div>
    </motion.div>
  );
}

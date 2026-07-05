"use client";
import { motion } from "framer-motion";

export default function ArtDetail({ artwork, artworkRect, onClose }) {
  const isMobile = window.innerWidth <= 600;

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

        left: isMobile ? "56%" : artworkRect.right - 250,
        top: isMobile ? "35%" : artworkRect.top,
        transform: isMobile ? "translate(-50%, -50%)" : "none",

        width: isMobile ? "40vw" : "400px",
        height: isMobile ? "30vh" : artworkRect.height,

        background: "#111",
        color: "white",

        borderLeft: isMobile
          ? "none"
          : "1px solid rgba(255,255,255,0.15)",
        border: isMobile
          ? "1px solid rgba(255,255,255,0.15)"
          : "none",

        zIndex: 52,
        padding: isMobile ? "12px" : "40px",
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
          top: isMobile ? 8 : 20,
          right: isMobile ? 8 : 20,
          background: "none",
          border: "none",
          color: "white",
          fontSize: isMobile ? "14px" : "24px",
          cursor: "pointer",
        }}
      >
        ✕
      </button>

      <h1
        style={{
          fontSize: isMobile ? "14px" : "2em",
          paddingRight: isMobile ? "18px" : "30px",
          margin: 0,
        }}
      >
        {artwork.title}
      </h1>

      <p
        style={{
          marginTop: isMobile ? "8px" : "20px",
          color: "rgba(255,255,255,0.75)",
          lineHeight: isMobile ? 1.4 : 1.7,
          fontSize: isMobile ? "9px" : "15px",
        }}
      >
        {artwork.description}
      </p>

      <div
        style={{
          marginTop: "auto",
          paddingTop: isMobile ? "8px" : "24px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          fontSize: isMobile ? "8px" : "13px",
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
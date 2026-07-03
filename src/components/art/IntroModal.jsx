"use client";
import { useState } from "react";

export default function IntroModal({ onClose, isClosing }) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        position: "fixed",
        inset: 0,
        opacity: isClosing ? 0 : 1,
        transition: "opacity 0.3s ease",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 9999,

        display: "flex",
        justifyContent: "center", // center horizontally
        alignItems: "center", // center vertically
      }}
    >
      <div
        style={{
          width: "450px",
          padding: "40px",
          background: "rgba(20, 20, 20, 0.75)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "10px",
          color: "white",
          // textAlign: "center",
          //           display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <h1
          style={{
            marginBottom: "18px",
            fontSize: "25px",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: "0.06em",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          STAR5HOLLOW.SCRIBE
        </h1>

        <p
          style={{
            lineHeight: 1.3,
            color: "rgba(255,255,255,0.75)",
            maxWidth: "380px",
            marginBottom: "24px",
            textAlign: "justify",
            // fontSize: "15px",
          }}
        >
          A collection of collages, edits, and visual notes inspired by words
          that linger a little longer than they should.
        </p>

        <p
          style={{
            lineHeight: 1.3,
            color: "rgba(255,255,255,0.75)",
            maxWidth: "380px",
            marginBottom: "24px",
            textAlign: "justify",
          }}
        >
          Most pieces begin with a line of text, a place, a memory, or an
          encounter. What follows is my attempt to translate that feeling into
          an image.
        </p>

        <p
          style={{
            lineHeight: 1.3,
            color: "rgba(255,255,255,0.9)",
            marginBottom: "10px",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          This canvas has no beginning or end.
          <br />
          Feel free to wander.
        </p>

        <ul
          style={{
            marginBottom: "16px",
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.3,
            textAlign: "left",
            paddingLeft: "24px",
          }}
        >
          <li>Drag in any direction to explore the canvas</li>
          <li>Click an artwork to open it</li>
          <li>Click the artwork again to get to know more about it</li>
        </ul>

        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.55)",
            // marginBottom: "28px",
            textAlign: "center",
          }}
        >
          Follow on Instagram:{" "}
          <a
            href="https://instagram.com/star5hollow.scribe"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(255,255,255,0.9)",
              textDecoration: "underline",
              // borderBottom: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            @star5hollow.scribe
          </a>
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <button
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={onClose}
            style={{
              background: isHovering
                ? "rgba(255,255,255,0.15)"
                : "rgba(255,255,255,0.08)",

              border: "1px solid rgba(255,255,255,0.15)",
              transition: "all 0.25s ease",
              color: "white",
              padding: "12px 24px",
              cursor: "pointer",
            }}
          >
            START EXPLORING
          </button>
        </div>
      </div>
    </div>
  );
}

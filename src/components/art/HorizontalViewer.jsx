"use client";
import ArtDetail from "./ArtDetail";
import { useState, useEffect, useRef } from "react";

export default function HorizontalViewer({
  artwork,
  artworks,
  onClose,
  isDetailOpen,
  setIsDetailOpen,
}) {
  console.log("Detail Open:", isDetailOpen);

  const [currentIndex, setCurrentIndex] = useState(() =>
    artworks.findIndex((a) => a.id === artwork.id),
  );
  const [isMuted, setIsMuted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [artworkRect, setArtworkRect] = useState(null);
  const artworkRef = useRef(null);
  const total = artworks.length;
  const prevArt = artworks[(currentIndex - 1 + total) % total];
  const currArt = artworks[currentIndex];
  const nextArt = artworks[(currentIndex + 1) % total];

  // measure artwork position/size for the posn of the detail panel
  useEffect(() => {
    if (!artworkRef.current) return;

    const rect = artworkRef.current.getBoundingClientRect();

    console.log(rect);

    setArtworkRect(rect);
  }, [currentIndex, isDetailOpen]);

  // close dropdown if detail opens
  useEffect(() => {
    if (isDetailOpen) {
      setIsDropdownOpen(false);
    }
  }, [isDetailOpen]);

  // keyboard navigation
  useEffect(() => {
    function handleKey(e) {
      if (isDetailOpen) return;
      if (e.key === "ArrowRight") setCurrentIndex((i) => (i + 1) % total);
      if (e.key === "ArrowLeft")
        setCurrentIndex((i) => (i - 1 + total) % total);
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [total, onClose, isDetailOpen]);

  function renderPreview(art) {
    if (art.isVideo) {
      return (
        <img
          src={art.thumbnail}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          draggable={false}
        />
      );
    }

    return (
      <img
        src={art.src}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
        draggable={false}
      />
    );
  }

  function renderMedia(art, height) {
    if (art.isVideo) {
      return (
        <div
          style={{
            position: "relative",
            display: "inline-block",
            width: "100%",
            height: "100%",
          }}
        >
          <video
            src={art.src}
            autoPlay
            loop
            playsInline
            muted={isMuted}
            style={{
              width: "100%",
              height: height,
              objectFit: "contain",
              display: "block",
            }}
          />

          {/* <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMuted((m) => !m);
            }}
            style={{
              position: "absolute",
              bottom: 10,
              right: 10,
              background: "rgba(0,0,0,0.5)",
              border: "none",
              borderRadius: "50%",
              width: 36,
              height: 36,
              cursor: "pointer",
              fontSize: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isMuted ? "🔇" : "🔊"}
          </button> */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMuted((m) => !m);
            }}
            style={{
              position: "absolute",
              bottom: 16,
              right: 16,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              opacity: 0.85,
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isMuted ? (
              // MUTE ICON
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="28"
                height="28"
              >
                <line
                  x1="58"
                  x2="38"
                  y1="22"
                  y2="42"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                />
                <line
                  x1="38"
                  x2="58"
                  y1="22"
                  y2="42"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                />
                <polygon
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  points="13 22 6 22 6 42 14 42 25 53 26 53 26 11 25 11 13 22"
                />
              </svg>
            ) : (
              // SPEAKER WITH WAVES ICON
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="28"
                height="28"
              >
                <polygon
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  points="13 22 6 22 6 42 14 42 25 53 26 53 26 11 25 11 13 22"
                />

                <path
                  d="M36 24 C42 28,42 36,36 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                <path
                  d="M44 16 C58 24,58 40,44 48"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      );
    }
    return (
      <img
        src={art.src}
        style={{
          width: "100%",
          height: height,
          objectFit: "contain",
          display: "block",
        }}
        draggable={false}
      />
    );
  }

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.92)",
        zIndex: 50,
      }}
    >
      {/* PREV */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          setCurrentIndex((i) => (i - 1 + total) % total);
        }}
        style={{
          position: "fixed",
          left: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          opacity: 0.4,
          filter: "blur(2px)",
          transition: "all 0.4s ease",
          maxWidth: "20vw",
          zIndex: 51,
        }}
      >
        <div
          style={{
            width: isMobile ? "90px" : "250px",
            height: isMobile ? "100px" : "260px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {renderPreview(prevArt)}
        </div>
      </div>

      {/* CURRENT */}
      <div
        ref={artworkRef}
        onClick={(e) => {
          e.stopPropagation();
          setIsDetailOpen(true);
        }}
        style={{
          position: "fixed",
          left: isDetailOpen ? "35%" : "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          transition: "all 0.4s ease",
          width: isMobile ? "60vw" : "auto",
          maxWidth:
            isMobile && isDetailOpen ? "45vw" : isMobile ? "82vw" : "50vw",
          zIndex: 53,
          cursor: isDetailOpen ? "default" : "pointer",
        }}
      >
        {renderMedia(
          currArt,
          isMobile && isDetailOpen ? "35vh" : isMobile ? "58vh" : "70vh",
        )}
      </div>

      {isDetailOpen && (
        <ArtDetail
          artwork={currArt}
          artworkRect={artworkRect}
          onClose={() => setIsDetailOpen(false)}
        />
      )}

      {/* NEXT */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          setCurrentIndex((i) => (i + 1) % total);
        }}
        style={{
          position: "fixed",
          right: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          opacity: 0.4,
          filter: "blur(2px)",
          transition: "all 0.4s ease",
          maxWidth: "20vw",
          zIndex: 51,
        }}
      >
        <div
          style={{
            width: isMobile ? "90px" : "250px",
            height: isMobile ? "100px" : "260px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {renderPreview(nextArt)}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          bottom: isMobile ? 18 : 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 55,
          display: "flex",
          alignItems: "center",
          gap: isMobile ? "4px" : "12px",
        }}
      >
        {/* PREVIOUS BUTTON */}
        <button
          onClick={() => {
            if (isDetailOpen) return;
            setCurrentIndex((i) => (i - 1 + total) % total);
          }}
          style={{
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.5)",
            fontSize: 48,
            cursor: isDetailOpen ? "default" : "pointer",
            userSelect: "none",
            padding: "0 8px",
            lineHeight: 1,

            opacity: isDetailOpen ? 0.2 : 1,
            pointerEvents: isDetailOpen ? "none" : "auto",
          }}
        >
          ‹
        </button>

        {/* DROPDOWN SELECTOR — shows current title, opens list on click */}
        <div style={{ position: "relative" }}>
          {/* THE TRIGGER BUTTON — shows current art title + arrow */}
          <button
            disabled={isDetailOpen}
            onClick={() => {
              if (isDetailOpen) return;
              setIsDropdownOpen((o) => !o);
            }}
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "0px",
              color: "rgba(255,255,255,0.8)",
              fontSize: "13px",
              padding: isMobile ? "8px 12px" : "10px 24px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: isMobile ? "270px" : "340px",
              justifyContent: "space-between",
              letterSpacing: "0.05em",
              opacity: isDetailOpen ? 0.4 : 1,
              cursor: isDetailOpen ? "default" : "pointer",
            }}
          >
            <span>{currArt.title}</span>
            {/* arrow rotates when open */}
            <span
              style={{
                display: "inline-block",
                transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
                fontSize: "10px",
                opacity: 0.6,
              }}
            >
              ▼
            </span>
          </button>

          {/* THE DROPDOWN LIST — only renders when open */}
          {isDropdownOpen && (
            <div
              style={{
                position: "absolute",
                bottom: "calc(100% + 10px)", // opens upward above the button
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(20, 20, 20, 0.27)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "0px",
                overflow: "hidden",
                width: isMobile ? "270px" : "340px",
                maxHeight: "320px",
                overflowY: "auto",
                // custom scrollbar
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(255,255,255,0.2) transparent",
              }}
            >
              {artworks.map((art, i) => (
                <div
                  key={art.id}
                  onClick={() => {
                    if (isDetailOpen) return;
                    setCurrentIndex(i);
                    setIsDropdownOpen(false); // close after selecting
                  }}
                  style={{
                    padding: isMobile ? "8px 12px" : "10px 24px",
                    fontSize: isMobile ? "11px" : "13px",
                    color:
                      i === currentIndex
                        ? "rgba(255,255,255,1)" // current art = full white
                        : "rgba(255,255,255,0.5)", // others = dimmed
                    cursor: "pointer",
                    background:
                      i === currentIndex
                        ? "rgba(255,255,255,0.08)" // subtle highlight on current
                        : "transparent",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    transition: "background 0.2s ease, color 0.2s ease",
                    letterSpacing: "0.03em",
                  }}
                  // hover effect via onMouseEnter/Leave
                  onMouseEnter={(e) => {
                    if (i !== currentIndex) {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.05)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (i !== currentIndex) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    }
                  }}
                >
                  {art.title}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* NEXT BUTTON */}
        <button
          onClick={() => {
            if (isDetailOpen) return;
            setCurrentIndex((i) => (i + 1) % total);
          }}
          style={{
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.5)",
            fontSize: 48,
            cursor: isDetailOpen ? "default" : "pointer",
            userSelect: "none",
            padding: "0 8px",
            lineHeight: 1,

            opacity: isDetailOpen ? 0.2 : 1,
            pointerEvents: isDetailOpen ? "none" : "auto",
          }}
        >
          ›
        </button>
      </div>
    </div>
  );
}

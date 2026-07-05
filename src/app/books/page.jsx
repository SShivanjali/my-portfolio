"use client";
import { useEffect, useState } from "react";

export default function BooksPage() {
  const [showLFA, setShowLFA] = useState(false);
  useEffect(() => {
    // enable scroll for this page only
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    document.documentElement.style.overflow = "auto";
    document.documentElement.style.height = "auto";

    return () => {
      // restore when leaving this page
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "100%";
    };
  }, []);
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      {/* Background video */}
      <video
        src="/books/mistyforest.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Header */}
      <div
        style={{
          position: "fixed",
          top: "0px",
          left: 0,
          width: "100%",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <img
          src="/books/banner.webp"
          alt="header"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />

        <h1
          style={{
            position: "absolute",
            zIndex: 2,
            top: "4%",
            left: "20%",

            // transform: "translate(-50%, -50%)",

            fontFamily: "StNicholas",
            fontSize: "clamp(0.6rem, 5vw, 4.5rem)",
            whiteSpace: "nowrap",

            color: "black",

            margin: 0,
          }}
        >
          in the end, we'll all become stories
        </h1>
      </div>

      {/* writing 1 */}
      <img
        src="books/w1.png"
        alt="writing1"
        style={{
          position: "fixed",
          width: "100%",
          bottom: "10px",
          opacity: 0.2,
          // height: "auto",
          // zIndex: 2,
        }}
      />

      {/* writing 2 */}
      <img
        src="books/w2.png"
        alt="writing2"
        style={{
          position: "fixed",
          width: "100%",
          bottom: "10px",
          opacity: 0.2,
          // height: "auto",
          // zIndex: 2,
        }}
      />

      {/* glass block */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          marginTop: "7.5vw",
        }}
      >
        <div style={{ position: "relative" }}>
          <img
            src="/books/gb.jpeg"
            alt="glass-block"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              // marginTop: "100px",
              opacity: 0.15,
              mixBlendMode: "screen",
              pointerEvents: "none",
            }}
          />

          {/* normal-ppl */}
          <img
            src="books/normal-ppl.webp"
            alt="normal people"
            style={{
              position: "absolute",
              top: "4.5%",
              left: "4%",
              width: "15%",
            }}
          />

          {/* readers digest */}
          <img
            src="books/readersdigest.webp"
            alt="readers digest"
            style={{
              position: "absolute",
              top: "4%",
              left: "29%",
              width: "15%",
            }}
          />

          {/* lfa */}
          <img
            src="books/lfa.webp"
            alt="looking for alaska"
            onClick={() => setShowLFA(true)}
            style={{
              position: "absolute",

              top: "4%",
              left: "54%",

              width: "15%",

              cursor: "pointer",
            }}
          />

          {/* veg */}
          <img
            src="books/veg.webp"
            alt="the vegetarian"
            style={{
              position: "absolute",
              top: "4%",
              left: "80%",
              width: "15%",
            }}
          />

          {/* belljar */}
          <img
            src="books/belljar.webp"
            alt="the belljar"
            style={{
              position: "absolute",
              top: "29%",
              left: "4%",
              width: "15%",
            }}
          />

          {/* turtles */}
          <img
            src="books/turtles.webp"
            alt="turtles all the way down"
            style={{
              position: "absolute",
              top: "29.4%",
              left: "29%",
              width: "15%",
            }}
          />

          {/* hardboiled */}
          <img
            src="books/hardboiled.webp"
            alt="hard-boiled wonderland and the end of the world"
            style={{
              position: "absolute",
              top: "29.4%",
              left: "54%",
              width: "15%",
            }}
          />

          {/* midlib */}
          <img
            src="books/midlib.webp"
            alt="the midnight library"
            style={{
              position: "absolute",
              top: "29.4%",
              left: "80%",
              width: "15%",
            }}
          />

          {/* morisaki */}
          <img
            src="books/morisaki.webp"
            alt="days at the morisaki bookshop"
            style={{
              position: "absolute",
              top: "55%",
              left: "4%",
              width: "15%",
            }}
          />

          {/* shakespeare */}
          <img
            src="books/shakespeare.webp"
            alt="tales from shakespeare"
            style={{
              position: "absolute",
              top: "55%",
              left: "29%",
              width: "15%",
            }}
          />

          {/* After-dark */}
          <img
            src="books/After-dark.webp"
            alt="After dark"
            style={{
              position: "absolute",
              top: "55%",
              left: "54%",
              width: "15%",
            }}
          />

          {/* book-thief */}
          <img
            src="books/book-thief.webp"
            alt="the book thief"
            style={{
              position: "absolute",
              top: "55%",
              left: "80%",
              width: "15%",
            }}
          />

          {/* frankenstein */}
          <img
            src="books/frankenstein.webp"
            alt="frankenstein"
            style={{
              position: "absolute",
              top: "80.5%",
              left: "4%",
              width: "15%",
            }}
          />

          {/* me-b4-u */}
          <img
            src="books/me-b4-u.webp"
            alt="me before you"
            style={{
              position: "absolute",
              top: "80.5%",
              left: "29%",
              width: "15%",
            }}
          />

          {/* Norwegian-Wood */}
          <img
            src="books/Norwegian-Wood.webp"
            alt="Norwegian Wood"
            style={{
              position: "absolute",
              top: "80.5%",
              left: "54%",
              width: "15%",
            }}
          />

          {/* almond */}
          <img
            src="books/almond.webp"
            alt="almond"
            style={{
              position: "absolute",
              top: "80.5%",
              left: "80%",
              width: "15%",
            }}
          />
        </div>

        <div style={{ position: "relative" }}>
          <img
            src="/books/gb.jpeg"
            alt="glass-block-repeat-1"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              opacity: 0.15,
              mixBlendMode: "screen",
              pointerEvents: "none",
            }}
          />

          {/* 7-husbands-of-evelyn-hugo */}
          <img
            src="books/7-husbands-of-evelyn-hugo.webp"
            alt="7 husbands of evelyn hugo"
            style={{
              position: "absolute",
              top: "4.5%",
              left: "4%",
              width: "15%",
            }}
          />

          {/* fault-in-our-stars */}
          <img
            src="books/fault-in-our-stars.webp"
            alt="the fault in our stars"
            style={{
              position: "absolute",
              top: "4%",
              left: "29%",
              width: "15%",
            }}
          />

          {/* after-the-quake */}
          <img
            src="books/after-the-quake.webp"
            alt="after the quake"
            style={{
              position: "absolute",
              top: "4%",
              left: "54%",
              width: "15%",
            }}
          />

          {/* girl-on-the-train */}
          <img
            src="books/girl-on-the-train.webp"
            alt="the girl on the train"
            style={{
              position: "absolute",
              top: "4%",
              left: "80%",
              width: "15%",
            }}
          />

          {/* agggtm */}
          <img
            src="books/agggtm.webp"
            alt="a good girl's guide to murderad"
            style={{
              position: "absolute",
              top: "29%",
              left: "4%",
              width: "15%",
            }}
          />

          {/* agad */}
          <img
            src="books/agad.webp"
            alt="as good as dead"
            style={{
              position: "absolute",
              top: "29.4%",
              left: "29%",
              width: "15%",
            }}
          />

          {/* b4-p1 */}
          <img
            src="books/b4-p1.webp"
            alt="before the coffee gets cold"
            style={{
              position: "absolute",
              top: "29.4%",
              left: "54%",
              width: "15%",
            }}
          />

          {/* luvhypo */}
          <img
            src="books/luvhypo.webp"
            alt="the love hypothesis"
            style={{
              position: "absolute",
              top: "29.4%",
              left: "80%",
              width: "15%",
            }}
          />

          {/* Sharp-objects */}
          <img
            src="books/Sharp-objects.webp"
            alt="Sharp objects"
            style={{
              position: "absolute",
              top: "55%",
              left: "4%",
              width: "15%",
            }}
          />

          {/* sil-pat */}
          <img
            src="books/sil-pat.webp"
            alt="the silent patient"
            style={{
              position: "absolute",
              top: "55%",
              left: "29%",
              width: "15%",
            }}
          />

          {/* verity */}
          <img
            src="books/verity.webp"
            alt="verity"
            style={{
              position: "absolute",
              top: "55%",
              left: "54%",
              width: "15%",
            }}
          />

          {/* it-ends-w-us */}
          <img
            src="books/it-ends-w-us.webp"
            alt="it ends with us"
            style={{
              position: "absolute",
              top: "55%",
              left: "80%",
              width: "15%",
            }}
          />

          {/* it-starts-w-us */}
          <img
            src="books/it-starts-w-us.webp"
            alt="it starts with us"
            style={{
              position: "absolute",
              top: "80.5%",
              left: "4%",
              width: "15%",
            }}
          />

          {/* american-roommate */}
          <img
            src="books/american-roommate.webp"
            alt="the american roommate experiment"
            style={{
              position: "absolute",
              top: "80.5%",
              left: "29%",
              width: "15%",
            }}
          />

          {/* The-loneliest-girl-in-the-universe */}
          <img
            src="books/The-loneliest-girl-in-the-universe.webp"
            alt="The loneliest girl in the universe"
            style={{
              position: "absolute",
              top: "80.5%",
              left: "54%",
              width: "15%",
            }}
          />
        </div>
      </div>

      <style>{`
  @keyframes wiggle {
    0%   { transform: rotate(-3deg); }
    50%  { transform: rotate(3deg); }
    100% { transform: rotate(-3deg); }
  }
`}</style>

      {/* letter */}
      <img
        src="/books/letter.webp"
        alt="letter"
        style={{
          position: "fixed",

          right: "-5px",
          bottom: "10px",

          width: "clamp(80px, 13vw, 190px)",
          height: "auto",

          zIndex: 2,

          animation: "wiggle 2s infinite",
          transformOrigin: "center center",
        }}
      />
      {showLFA && (
        <div className="book-overlay" onClick={() => setShowLFA(false)}>
          <div className="book-popup" onClick={(e) => e.stopPropagation()}>
            <button className="book-close" onClick={() => setShowLFA(false)}>
              ✕
            </button>

            <iframe
              allowFullScreen
              allow="clipboard-write"
              scrolling="no"
              src="https://heyzine.com/flip-book/3adc4775b5.html"
              className="book-iframe"
            />
          </div>
        </div>
      )}
    </main>
  );
}

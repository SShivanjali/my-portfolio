"use client";

import { useState } from "react";
import Background from "@/components/Background";
import IntroText from "@/components/IntroText";
import Scene from "@/components/Scene";

export default function Home() {
  const [showIdCard, setShowIdCard] = useState(false);

  return (
    <main>
      <div className={showIdCard ? "page-blurred" : ""}>
        <Background />
        <IntroText />
        <Scene setShowIdCard={setShowIdCard} />
      </div>

      {showIdCard && (
        <div
          className="id-overlay"
          onClick={() => setShowIdCard(false)}
        >
          <div
            className="id-card-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/id-card.png"
              alt="ID Card"
              className="id-card"
            />

            {/* EMAIL */}
            <a
              href="mailto:shivanjalisriv@gmail.com"
              className="id-hotspot id-hotspot-mail"
              aria-label="Email"
            />

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/shivanjali-srivastav"
              target="_blank"
              rel="noopener noreferrer"
              className="id-hotspot id-hotspot-linkedin"
              aria-label="LinkedIn"
            />

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/star5hollow.scribe"
              target="_blank"
              rel="noopener noreferrer"
              className="id-hotspot id-hotspot-instagram"
              aria-label="Instagram"
            />
          </div>
        </div>
      )}
    </main>
  );
}
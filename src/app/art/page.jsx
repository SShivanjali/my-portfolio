"use client";
import { useState } from "react";
import IntroModal from "@/components/art/IntroModal";
import ArtGrid from "@/components/art/ArtGrid";
import HorizontalViewer from "@/components/art/HorizontalViewer";
import { artworks } from "../../../data/artworks";
export default function ArtPage() {
  const [selectedArt, setSelectedArt] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [isClosingIntro, setIsClosingIntro] = useState(false);
  return (
    <main>
      {/* {showIntro && <IntroModal onClose={() => setShowIntro(false)} />}
       */}
       {showIntro && (
  <IntroModal
    isClosing={isClosingIntro}
    onClose={() => {
      setIsClosingIntro(true);

      setTimeout(() => {
        setShowIntro(false);
      }, 300);
    }}
  />
)}
      <div
        style={{
          filter: selectedArt ? "blur(8px)" : "none",
          transition: "filter 0.3s ease",
          pointerEvents: selectedArt ? "none" : "auto",
        }}
      >
        <ArtGrid
          onArtClick={(art) => setSelectedArt(art)}
          isViewerOpen={!!selectedArt}
        />
      </div>
      {selectedArt && (
        <HorizontalViewer
          artwork={selectedArt}
          artworks={artworks}
          isDetailOpen={isDetailOpen}
          setIsDetailOpen={setIsDetailOpen}
          onClose={() => {
            setSelectedArt(null);
            setIsDetailOpen(false);
          }}
        />
      )}
    </main>
  );
}

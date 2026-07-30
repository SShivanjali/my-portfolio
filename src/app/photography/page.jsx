"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./photography.module.css";

const photos = [
  "/cam/icecream.jpg",
  "/cam/playground2.jpeg",
  "/cam/greenbluesky2.jpg",
  "/cam/greenbluesky3.jpg",
  "/cam/damanPano.jpg",
  "/cam/hostelsideWindow.jpg",
  "/cam/buildings.jpg",
  "/cam/horse.jpg",
  "/cam/emptyClass2.jpg",
  "/cam/sky3.jpg",
  "/cam/2icecreamsWroomie.jpg",
  "/cam/sisBeach.jpg",
  "/cam/cloud.jpg",
  "/cam/bougenville.jpeg",
  "/cam/chandelier.jpeg",
  "/cam/door.jpeg",
  "/cam/books.jpeg",
  "/cam/fountain.jpeg",
  "/cam/narmada-canal.jpeg",
  "/cam/reading.jpeg",
  "/cam/Dblock.jpg",
  "/cam/star!.jpg",
  "/cam/cat.jpeg",
  "/cam/r-city.jpeg",
  "/cam/blurAbit.jpg",
];

// rev photos arr cuz [E   D   C   B   A] is needed instead of [A   B   C   D   E]
const reversed = [...photos].reverse();


export default function Photography() {
  const [count, setCount] = useState(0);
  const [opened, setOpened] = useState(false);

const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (opened) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0; // rewind to start
    }
  }, [opened]);

  const showNextPhoto = () => {
    if (count >= photos.length - 1) return;

    setCount((c) => c + 1);
  };

  const handleCanisterClick = () => {
    setOpened((o) => {
      if (o) setCount(0);
      return !o;
    });
  };

  return (
    <main className={styles.photoGallery}>
      <video
        ref={videoRef}
        className={`${styles.bgVideo} ${opened ? styles.open : ""}`}
        src="/cam/filmdust.mp4"
        muted
        loop
        playsInline
      />
      <div className={styles.help}>
        ⓘ
        <div className={styles.helpText}>
          <strong>How to navigate</strong>

          <ul>
            <li>Click the canister to begin.</li>
            <li>Click the colored photo to reveal the next frame.</li>
            <li>Click the canister again to rewind and close the roll.</li>
          </ul>
        </div>
      </div>
      <div
        className={`${styles.canister} ${opened ? styles.open : ""}`}
        onClick={handleCanisterClick}
      >
        <img src="cam/film_canister2.png" alt="film canister" />
        <div className={styles.sliver} />
      </div>
      <div className={`${styles.clipWindow} ${opened ? styles.open : ""}`}>
        <div className={styles.slideWrapper}>
          <div
            className={styles.filmTrack}
            style={{
              "--count": count,
              "--total": photos.length,
              "--current-peek":
                count === photos.length - 1 ? "0px" : "var(--peek)",
            }}
          >
            {reversed.map((src, index) => {
              const originalIndex = photos.length - 1 - index;
              const isFrontPhoto = originalIndex === count;
              return (
                <figure
                  key={src}
                  className={`${styles.frame} ${
                    isFrontPhoto ? styles.front : ""
                  }`}
                  onClick={isFrontPhoto ? showNextPhoto : undefined}
                >
                  <img src={src} alt="" />
                </figure>
              );
            })}
          </div>
        </div>
      </div>
      {/* foot note */}
      <div className={styles.footNote}>the world, as I see it</div>

      <div className={styles.frameCounter}>
        ({opened ? count + 1 : 0}/{photos.length})
      </div>
    </main>
  );
}

"use client";
import { useEffect, useState } from "react";
import styles from "./books.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function BooksPage() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    document.documentElement.style.overflow = "auto";
    document.documentElement.style.height = "auto";

    return () => {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "100%";
    };
  }, []);

  useEffect(() => {
    if (isLetterOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  }, [isLetterOpen]);

  return (
    <main className={styles.page}>
      <video
        src="/books/mistyforest.mp4"
        autoPlay
        muted
        loop
        playsInline
        className={styles.bgVideo}
      />

      <div className={styles.headerWrap}>
        <img src="/books/banner.webp" alt="header" className={styles.headerBanner} />
        <h1 className={styles.headerTitle}>in the end, we'll all become stories</h1>
      </div>

      <img src="books/w1.png" alt="writing1" className={styles.writingImg} />
      <img src="books/w2.png" alt="writing2" className={styles.writingImg} />

      <div className={styles.glassBlockWrap}>
        <div className={styles.glassBlockRow}>
          <img src="/books/gb.jpeg" alt="glass-block" className={styles.glassBlockBg} />

          <img className={styles.bookImg} style={{ "--top": "4.5%", "--left": "4%" }} src="books/normal-ppl.webp" alt="normal people" />
          <img className={styles.bookImg} style={{ "--top": "4%", "--left": "29%" }} src="books/readersdigest.webp" alt="readers digest" />
          <img className={styles.bookImg} style={{ "--top": "4%", "--left": "54%" }} src="books/lfa.webp" alt="looking for alaska" />
          <img className={styles.bookImg} style={{ "--top": "4%", "--left": "80%" }} src="books/veg.webp" alt="the vegetarian" />

          <img className={styles.bookImg} style={{ "--top": "29%", "--left": "4%" }} src="books/belljar.webp" alt="the belljar" />
          <img className={styles.bookImg} style={{ "--top": "29.4%", "--left": "29%" }} src="books/turtles.webp" alt="turtles all the way down" />
          <img className={styles.bookImg} style={{ "--top": "29.4%", "--left": "54%" }} src="books/hardboiled.webp" alt="hard-boiled wonderland and the end of the world" />
          <img className={styles.bookImg} style={{ "--top": "29.4%", "--left": "80%" }} src="books/midlib.webp" alt="the midnight library" />

          <img className={styles.bookImg} style={{ "--top": "55%", "--left": "4%" }} src="books/morisaki.webp" alt="days at the morisaki bookshop" />
          <img className={styles.bookImg} style={{ "--top": "55%", "--left": "29%" }} src="books/shakespeare.webp" alt="tales from shakespeare" />
          <img className={styles.bookImg} style={{ "--top": "55%", "--left": "54%" }} src="books/After-dark.webp" alt="After dark" />
          <img className={styles.bookImg} style={{ "--top": "55%", "--left": "80%" }} src="books/book-thief.webp" alt="the book thief" />

          <img className={styles.bookImg} style={{ "--top": "80.5%", "--left": "4%" }} src="books/frankenstein.webp" alt="frankenstein" />
          <img className={styles.bookImg} style={{ "--top": "80.5%", "--left": "29%" }} src="books/me-b4-u.webp" alt="me before you" />
          <img className={styles.bookImg} style={{ "--top": "80.5%", "--left": "54%" }} src="books/Norwegian-Wood.webp" alt="Norwegian Wood" />
          <img className={styles.bookImg} style={{ "--top": "80.5%", "--left": "80%" }} src="books/almond.webp" alt="almond" />
        </div>

        <div className={styles.glassBlockRow}>
          <img src="/books/gb.jpeg" alt="glass-block-repeat-1" className={styles.glassBlockBg} />

          <img className={styles.bookImg} style={{ "--top": "4.5%", "--left": "4%" }} src="books/7-husbands-of-evelyn-hugo.webp" alt="7 husbands of evelyn hugo" />
          <img className={styles.bookImg} style={{ "--top": "4%", "--left": "29%" }} src="books/fault-in-our-stars.webp" alt="the fault in our stars" />
          <img className={styles.bookImg} style={{ "--top": "4%", "--left": "54%" }} src="books/after-the-quake.webp" alt="after the quake" />
          <img className={styles.bookImg} style={{ "--top": "4%", "--left": "80%" }} src="books/girl-on-the-train.webp" alt="the girl on the train" />

          <img className={styles.bookImg} style={{ "--top": "29%", "--left": "4%" }} src="books/agggtm.webp" alt="a good girl's guide to murderad" />
          <img className={styles.bookImg} style={{ "--top": "29.4%", "--left": "29%" }} src="books/agad.webp" alt="as good as dead" />
          <img className={styles.bookImg} style={{ "--top": "29.4%", "--left": "54%" }} src="books/b4-p1.webp" alt="before the coffee gets cold" />
          <img className={styles.bookImg} style={{ "--top": "29.4%", "--left": "80%" }} src="books/luvhypo.webp" alt="the love hypothesis" />

          <img className={styles.bookImg} style={{ "--top": "55%", "--left": "4%" }} src="books/Sharp-objects.webp" alt="Sharp objects" />
          <img className={styles.bookImg} style={{ "--top": "55%", "--left": "29%" }} src="books/sil-pat.webp" alt="the silent patient" />
          <img className={styles.bookImg} style={{ "--top": "55%", "--left": "54%" }} src="books/verity.webp" alt="verity" />
          <img className={styles.bookImg} style={{ "--top": "55%", "--left": "80%" }} src="books/it-ends-w-us.webp" alt="it ends with us" />

          <img className={styles.bookImg} style={{ "--top": "80.5%", "--left": "4%" }} src="books/it-starts-w-us.webp" alt="it starts with us" />
          <img className={styles.bookImg} style={{ "--top": "80.5%", "--left": "29%" }} src="books/american-roommate.webp" alt="the american roommate experiment" />
          <img className={styles.bookImg} style={{ "--top": "80.5%", "--left": "54%" }} src="books/The-loneliest-girl-in-the-universe.webp" alt="The loneliest girl in the universe" />
        </div>
      </div>

      <AnimatePresence>
        {!isLetterOpen && (
          <motion.img
            src="/books/letter.webp"
            alt="letter"
            onClick={() => setIsLetterOpen(true)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={styles.letterIcon}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isLetterOpen && (
          <motion.div
            className={styles.letterModal}
            onClick={() => setIsLetterOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className={styles.letterContainer}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img src="/books/open-letter.png" alt="Open Letter" className={styles.openLetter} />
              <div className={styles.letterText}>
                Hi! Needless to say, I love reading books. On this page, I have
                shown you the books that I've read and what I think about them (
                <span style={{ color: "#ff0000" }}>reviews will be coming soon</span>
                ).
                <br />
                I have tried to recreate the kind of environment I like to read
                books in, basically "Twilight"-like weather: misty green forest,
                drizzle, and a hot cup of coffee.
                <br />
                <br />
                My favorite genre is{" "}
                <span style={{ color: "#488cb7" }}>Young Adult</span>. It is so
                freeing and liberating. You feel invincible. The world is in
                your hands. [More can be read in my reviews of{" "}
                <span style={{ color: "#864eb1" }}>Normal People </span>,{" "}
                <span style={{ color: "#8bb0e8" }}>Looking for Alaska</span>,
                and{" "}
                <span style={{ color: "#de9b4a" }}>Turtles All the Way Down</span>
                . Gotta love <span style={{ color: "#f00fe1" }}>John Green</span>!]
                <br />
                <br />
                Besides that, I enjoy psychological thrillers, romance, and
                sci-fi. I've also been enjoying{" "}
                {<span style={{ color: "#f00f0f" }}>Murakami</span>} quite a bit.
                <span style={{ color: "#3b0303" }}> "After Dark" </span>is my
                favorite of his. I've been trying to get into the classics as
                well. <span style={{ color: "#776387" }}> "Frankenstein" </span>
                was where I started, followed by some Shakespeare.{" "}
                <span style={{ color: "#3e343484" }}> "The Bell Jar" </span>is
                depressing. You absolutely have to read{" "}
                <span style={{ color: "#7abcf2" }}> "The Loneliest Girl in the Universe" </span>
                if you enjoy space survival fiction.
                <br />
                <br />
                Enjoy, and happy reading!
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
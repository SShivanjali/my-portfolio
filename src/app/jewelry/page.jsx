"use client";
import { useState } from "react";
import "./jewelry.css";

export default function Jewelry() {
  const [bgColor, setBgColor] = useState("#cbb8a4");
  return (
    <main className="jewelry-page" style={{ backgroundColor: bgColor }}>
      <div className="jewelry-frame">
        <img
          className="quote-img"
          src="/jewelry/quote.png"
          alt="Jewelry title qupote"
        />
        <div className="jewelry-row row1">
          <video
            className="r1-curtain-vid"
            src="/jewelry/curtain-480p.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="jewelry-row row2">
          <div className="jewelry-carousel">

            <div
              className="jewelry-slide"
              onMouseEnter={() => setBgColor("#d3beaa")}
            >
              <div className="collage-wrapper swirling-wrapper">
                <img
                  className="piece-img"
                  src="/jewelry/swirling-dream/piece.png"
                  alt="Swirling dream necklace"
                />

                <img
                  className="sd-t1"
                  src="/jewelry/swirling-dream/t1.png"
                  alt=""
                />
                <img
                  className="sd-t2"
                  src="/jewelry/swirling-dream/t2.png"
                  alt=""
                />
                <img
                  className="sd-t3"
                  src="/jewelry/swirling-dream/t3.png"
                  alt=""
                />
                <img
                  className="sd-t4"
                  src="/jewelry/swirling-dream/t4.png"
                  alt=""
                />

                <img className="sd-arrow1" src="/jewelry/arrow1.png" alt="" />
                <img className="sd-arrow2" src="/jewelry/arrow2.png" alt="" />
              </div>
            </div>

            <div
              className="jewelry-slide"
              onMouseEnter={() => setBgColor("#d7b9a4")}
            >
              <div className="collage-wrapper swan-wrapper">
                <img
                  className="piece-img"
                  src="/jewelry/swan/piece.png"
                  alt="2 swans ring"
                />

                <img className="swan-t1" src="/jewelry/swan/t1.png" alt="" />
                <img className="swan-t2" src="/jewelry/swan/t2.png" alt="" />
                <img className="swan-t3" src="/jewelry/swan/t3.png" alt="" />
                <img className="swan-t4" src="/jewelry/swan/t4.png" alt="" />

                <img className="swan-arrow1" src="/jewelry/arrow1.png" alt="" />
                <img className="swan-arrow2" src="/jewelry/arrow2.png" alt="" />
              </div>
            </div>

            <div
              className="jewelry-slide"
              onMouseEnter={() => setBgColor("#bc9d86")}
            >
              <div className="collage-wrapper cats-barette-wrapper">
                <img
                  className="piece-img"
                  src="/jewelry/cats-barette/piece.png"
                  alt="cats barrette"
                />

                <img
                  className="cats-barette-t1"
                  src="/jewelry/cats-barette/t1.png"
                  alt=""
                />
                <img
                  className="cats-barette-t2"
                  src="/jewelry/cats-barette/t2.png"
                  alt=""
                />
              </div>
            </div>

            <div
              className="jewelry-slide"
              onMouseEnter={() => setBgColor("#f4c49d")}
            >
              <div className="collage-wrapper labyrinth-wrapper">
                <img
                  className="piece-img"
                  src="/jewelry/labyrinth/piece.png"
                  alt="star coiled necklace"
                />

                <img
                  className="labyrinth-t1"
                  src="/jewelry/labyrinth/t1.png"
                  alt=""
                />
                <img
                  className="labyrinth-t2"
                  src="/jewelry/labyrinth/t2.png"
                  alt=""
                />
                <img
                  className="labyrinth-t3"
                  src="/jewelry/labyrinth/t3.png"
                  alt=""
                />
              </div>
            </div>

            <div
              className="jewelry-slide"
              onMouseEnter={() => setBgColor("#cebda3")}
            >
              <div className="collage-wrapper cyberpunk-wrapper">
                <img
                  className="piece-img"
                  src="/jewelry/cyberpunk/piece.png"
                  alt="vivayou watch"
                />

                <img
                  className="cyberpunk-t1"
                  src="/jewelry/cyberpunk/t1.png"
                  alt=""
                />
                <img
                  className="cyberpunk-t2"
                  src="/jewelry/cyberpunk/t2.png"
                  alt=""
                />
                <img
                  className="cyberpunk-t3"
                  src="/jewelry/cyberpunk/t3.png"
                  alt=""
                />
              </div>
            </div>

            <div
              className="jewelry-slide"
              onMouseEnter={() => setBgColor("#bc9c83")}
            >
              <div className="collage-wrapper moth-wrapper">
                <img
                  className="piece-img"
                  src="/jewelry/moth/piece.png"
                  alt="vivayou watch"
                />

                <img
                  className="moth-t1"
                  src="/jewelry/moth/t1.png"
                  alt=""
                />
              </div>
            </div>


          </div>
        </div>

        <div className="jewelry-row row3"></div>
      </div>
    </main>
  );
}

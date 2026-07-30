"use client";
import { useState } from "react";
import HoverImage from "./HoverImage";
import Link from "next/link";
import Laptop from "./laptop/Laptop";

export default function Scene({ setShowIdCard, introStage }) {
  const [standHover, setStandHover] = useState(null);

  return (
    <div
      className={`scene-container ${introStage === 0 ? "intro-blurred" : ""}`}
    >
      {/* LEFT: CABINET + ITEMS ABOVE IT */}
      {/* --------------------------------------------------------- */}
      <div className="scene-cabinet-group">
        <img src="/home/empty-cabinet.png" alt="cabinet" className="cabinet" />

        {/* ID CARD */}
        <div
          onClick={() => setShowIdCard(true)}
          style={{ pointerEvents: "all" }}
        >
          <HoverImage
            src="/home/id.png"
            hoverSrc="/home/id-hover.png"
            alt="id"
            className="cabinet-id"
            hoverClassName="cabinet-id-hovered"
            label="about me⋆˚꩜｡"
            labelClassName="cabinet-label-id"
          />
        </div>

        {/* CAKE */}
        <HoverImage
          src="/home/cake.png"
          hoverSrc="/home/cake-hover.gif"
          alt="cake"
          className="cabinet-cake"
          hoverClassName="cabinet-cake-hover"
          label={
            <>
              fav foods𓌉◯𓇋
              <br />
              coming soon ♡
            </>
          }
          labelClassName="cabinet-label-cake"
        />

        {/* BOOKS TOP */}
        <img
          src="/home/books-bunch.png"
          alt="cabinet-books-top"
          className="cabinet-books-top"
        />

        {/* JEWELLERY */}
        <Link href="/jewelry">
          <HoverImage
            src="/home/jewellery-hand.png"
            hoverSrc="/home/jewellery-hand-hover.gif"
            alt="jewellery"
            className="cabinet-jewellery"
            hoverClassName="cabinet-jewellery-hovered"
            label="jewellery -`♡´-"
            labelClassName="cabinet-label-jewelry"
          />
        </Link>

        {/* BOOKS */}
        <Link href="/books">
          <HoverImage
            src="/home/books.png"
            hoverSrc="/home/books-hover.png"
            alt="books"
            className="cabinet-books"
            hoverClassName="cabinet-books-hovered"
            label="books✮"
            labelClassName="cabinet-label-books"
          />
        </Link>

        {/* CABINET BOTTOM */}
        <img
          src="/home/bottom-shelf-cabinet.png"
          alt="cabinet-bottom"
          className="cabinet-bottom"
        />

        {/* LAMP */}
        <img src="/lamp.webp" alt="lamp" className="scene-lamp" />

        {/* CAMERA */}
        <Link href="/photography" style={{ pointerEvents: "all" }}>
          <HoverImage
            src="/cam.png"
            hoverSrc="/cam-hover.png"
            alt="camera"
            className="scene-camera"
            hoverClassName="scene-camera-hover"
            label={<>my clicks ⛶</>}
            labelClassName="scene-label-camera"
          />
        </Link>

        {/* POPCORN */}
        <HoverImage
          src="/popcorn.png"
          hoverSrc="/popcorn-hover.png"
          alt="popcorn"
          className="scene-popcorn"
          hoverClassName="scene-popcorn-hovered"
          label={
            <>
              movie time? [ ▶︎ ]
              <br />
              coming soon ♡
            </>
          }
          labelClassName="scene-label-popcorn"
        />

        {/* DIARY */}
        <HoverImage
          src="/diary.png"
          hoverSrc="/diary-hover.gif"
          alt="diary"
          className="scene-diary"
          hoverClassName="scene-diary-hovered"
          label={
            <>
              drafts / archives 𖡎
              <br />
              coming soon ♡
            </>
          }
          labelClassName="scene-label-diary"
        />
      </div>
      {/* --------------------------------------------------------- */}

      {/* CENTER: guitar and laptop */}
      {/* --------------------------------------------------------- */}
      <div className="scene-center-group">
        {/* GUITAR */}
        <HoverImage
          src="/guitar.png"
          hoverSrc="/guitar-hover.png"
          alt="guitar"
          className="scene-guitar"
          hoverClassName="scene-guitar-hovered"
          label={
            <>
              songs i listen to 𖦤
              <br />
              coming soon ♡
            </>
          }
          labelClassName="scene-label-guitar"
        />

        {/* LAPTOP */}
        <Laptop />
      </div>
      {/* --------------------------------------------------------- */}

      {/* RIGHT: collage and stand */}
      {/* --------------------------------------------------------- */}
      <div className="scene-stand-group">
        {/* ART-COLLAGE */}
        <Link href="/art" style={{ pointerEvents: "all" }}>
          <HoverImage
            src="/collage.png"
            hoverSrc="/collage-hover.png"
            alt="collage"
            className="scene-collage"
            hoverClassName="scene-collage-hovered"
            label="my digital art⛤"
            labelClassName="scene-label-collage"
          />
        </Link>

        {/* CLOTH STAND */}
        <img
          src={
            standHover === "clothes"
              ? "/cloth-hover.png"
              : standHover === "shoes"
                ? "/shoes.png"
                : "/stand.png"
          }
          alt="stand"
          className="scene-stand"
        />

        {/* clothes hotspot */}
        <div
          className="scene-hotspot scene-hotspot-clothes"
          onMouseEnter={() => setStandHover("clothes")}
          onMouseLeave={() => setStandHover(null)}
        />
        {standHover === "clothes" && (
          <div className="scene-label scene-label-clothes">
            𑣲let's play dress up°❀⋆.ೃ࿔
            <br />
            coming soon ♡
          </div>
        )}

        {/* shoes hotspot */}
        <div
          className="scene-hotspot scene-hotspot-shoes"
          onMouseEnter={() => setStandHover("shoes")}
          onMouseLeave={() => setStandHover(null)}
        />
        {standHover === "shoes" && (
          <div className="scene-label scene-label-shoes">
            𓂇 footwear
            <br />
            coming soon ♡
          </div>
        )}
      </div>
    </div>
  );
}

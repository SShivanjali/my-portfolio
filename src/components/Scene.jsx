"use client";
import { useState } from "react";
import HoverImage from "./HoverImage";
import Link from "next/link";

export default function Scene({ setShowIdCard }) {
  const [standHover, setStandHover] = useState(null);
  const [cabinetHover, setCabinetHover] = useState(null);
  // const [showIdCard, setShowIdCard] = useState(false);

  return (
    <div className="scene-container">
      {/* LEFT: cabinet and the items above it */}
      <div className="scene-cabinet-group">
        <img
          src={
            cabinetHover === "cake"
              ? "/cake.gif"
              : cabinetHover === "jewelry"
                ? "/jewellery-hover.gif"
                : cabinetHover === "books"
                  ? "/books.png"
                  : "/cabinet.png"
          }
          alt="cabinet"
          className="scene-cabinet"
        />

        {/* cake hotspot */}
        <div
          className="scene-hotspot scene-hotspot-cake"
          onMouseEnter={() => setCabinetHover("cake")}
          onMouseLeave={() => setCabinetHover(null)}
        />
        {cabinetHover === "cake" && (
          <div className="scene-label scene-label-cake">fav foods𓌉◯𓇋</div>
        )}

        {/* jewelry hotspot */}
        <Link href="/jewelry" style={{ pointerEvents: "all" }}>
          <div
            className="scene-hotspot scene-hotspot-jewelry"
            onMouseEnter={() => setCabinetHover("jewelry")}
            onMouseLeave={() => setCabinetHover(null)}
          />
        </Link>
        {cabinetHover === "jewelry" && (
          <div className="scene-label scene-label-jewelry">jewellery -`♡´-</div>
        )}

        {/* books hotspot */}
        <Link href="/books" style={{ pointerEvents: "all" }}>
          <div
            className="scene-hotspot scene-hotspot-books"
            onMouseEnter={() => setCabinetHover("books")}
            onMouseLeave={() => setCabinetHover(null)}
          />
        </Link>
        {cabinetHover === "books" && (
          <div className="scene-label scene-label-books">books✮</div>
        )}

        <img src="/lamp.webp" alt="lamp" className="scene-lamp" />

        <HoverImage
          src="/cam.png"
          hoverSrc="/cam-hover.png"
          alt="camera"
          className="scene-camera-wrapper"
          hoverClassName="scene-camera-hover"
          label="my clicks ⛶"
          labelClassName="scene-label-camera"
        />

        <HoverImage
          src="/popcorn.png"
          hoverSrc="/popcorn-hover.png"
          alt="popcorn"
          className="scene-popcorn-wrapper"
          hoverClassName="scene-popcorn-hovered"
          label="movie time? [ ▶︎ ]"
          labelClassName="scene-label-popcorn"
        />

        <HoverImage
          src="/diary.png"
          hoverSrc="/diary-hover.gif"
          alt="diary"
          className="scene-diary-wrapper"
          hoverClassName="scene-diary-hovered"
          label="drafts / archives 𖡎"
          labelClassName="scene-label-diary"
        />
      </div>

      {/* CENTER: guitar and laptop */}
      <div className="scene-center-group">
        <HoverImage
          src="/guitar.png"
          hoverSrc="/guitar-hover.png"
          alt="guitar"
          className="scene-guitar-wrapper"
          hoverClassName="scene-guitar-hovered"
          label="songs i listen to 𖦤"
          labelClassName="scene-label-guitar"
        />

        <div onClick={() => setShowIdCard(true)}>
          <HoverImage
            src="/laptop.webp"
            hoverSrc="/laptop-hover.png"
            alt="laptop"
            className="scene-laptop-wrapper"
            hoverClassName="scene-laptop-hovered"
            label="about me⋆˚꩜｡"
            labelClassName="scene-label-laptop"
          />
        </div>
      </div>

      {/* RIGHT: collage and stand */}
      <div className="scene-stand-group">
        <Link href="/art" style={{ pointerEvents: "all" }}>
          <HoverImage
            src="/collage.png"
            hoverSrc="/collage-hover.png"
            alt="collage"
            className="scene-collage-wrapper"
            hoverClassName="scene-collage-hovered"
            label="my digital art⛤"
            labelClassName="scene-label-collage"
          />
        </Link>
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
          </div>
        )}

        {/* shoes hotspot */}
        <div
          className="scene-hotspot scene-hotspot-shoes"
          onMouseEnter={() => setStandHover("shoes")}
          onMouseLeave={() => setStandHover(null)}
        />
        {standHover === "shoes" && (
          <div className="scene-label scene-label-shoes">𓂇 footwear</div>
        )}
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";

export default function HoverImage({ src, hoverSrc, alt, className, hoverClassName, label, labelClassName }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
        className={hovered ? `${className} ${hoverClassName}` : className}
        style={{ zIndex: hovered ? 20 : "auto" }}
        >
      <img
        src={hovered && hoverSrc ? hoverSrc : src}
        alt={alt}
        style={{ width: "100%" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      {hovered && label && (
        <div className={`scene-label ${labelClassName || "scene-label-hover"}`}>
          {label}
        </div>
      )}
    </div>
  );
}
"use client";

import { useState } from "react";
import "./Laptop.css";
import VisitorsLog from "../visitorslog/VisitorsLog";

export default function Laptop() {
  const [showVisitorsLog, setShowVisitorsLog] = useState(false);

  return (
    <div className="laptop-container">
      <img
        className="laptop-image"
        src={showVisitorsLog ? "/laptop-hover.png" : "/laptop.png"}
        alt="laptop"
      />
      <div className="laptop-screen">
        {!showVisitorsLog ? (
          <button
            className="visitors-log-button"
            onClick={() => setShowVisitorsLog(true)}
          >
              <img
                src="/visitors-log-button.png"
                alt="Visitor's Log"
                className="visitors-log-button-image"
              />
          </button>
        ) : (
          <VisitorsLog onClose={() => setShowVisitorsLog(false)} />
        )}
      </div>
    </div>
  );
}

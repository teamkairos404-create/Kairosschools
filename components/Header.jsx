import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        background: "#000",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* LOGO */}
      <img
        src="/logo.png"
        alt="Kairos Logo"
        style={{ height: "60px", borderRadius: "8px" }}
      />

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          fontSize: "28px",
          background: "transparent",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        ☰
      </button>

      {/* Navigation */}
      <nav
        style={{
          display: menuOpen ? "flex" : "flex",
          gap: "30px",
        }}
      >
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>
        <a
          href="/competency"
          style={{ color: "white", textDecoration: "none" }}
        >
          Competency
        </a>
        <a href="/pedagogy" style={{ color: "white", textDecoration: "none" }}>
          Pedagogy
        </a>
        <a href="/econtent" style={{ color: "white", textDecoration: "none" }}>
          E-Content
        </a>
        <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>
      </nav>
    </header>
  );
}

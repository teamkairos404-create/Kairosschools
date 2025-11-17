import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.brand}>
        <img src="/logo.png" alt="Kairos Logo" style={styles.logo} />
        <h1 style={styles.title}>KairosSchools</h1>
      </div>

      {/* Hamburger menu icon for mobile */}
      <button style={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Navigation menu */}
      <motion.nav
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={navVariants}
        style={styles.nav}
      >
        <a style={styles.link} href="#competency" onClick={() => setMenuOpen(false)}>Competency</a>
        <a style={styles.link} href="#pedagogy" onClick={() => setMenuOpen(false)}>Pedagogy</a>
        <a style={styles.link} href="#econtent" onClick={() => setMenuOpen(false)}>E-Content</a>
      </motion.nav>
    </header>
  );
};

const navVariants = {
  closed: { opacity: 0, height: 0, transition: { duration: 0.25 } },
  open: { opacity: 1, height: "auto", transition: { duration: 0.25 } },
};

const styles = {
  header: {
    width: "100%",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#111",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logo: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
  },
  title: {
    fontSize: "24px",
    margin: 0,
  },
  menuButton: {
    fontSize: "24px",
    color: "#f9b233",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    display: "none",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#f9b233",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
  },
};

export default Header;

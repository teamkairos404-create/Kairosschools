import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.brand}>
        <img src="/logo.png" alt="Kairos Logo" style={styles.logo} />
        <h1 style={styles.title}>KairosSchools</h1>
      </div>

      <nav style={styles.nav}>
        <a style={styles.link} href="#competency">Competency</a>
        <a style={styles.link} href="#pedagogy">Pedagogy</a>
        <a style={styles.link} href="#econtent">E-Content</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    width: "100%",
    padding: "15px 25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#111",
    color: "white",
    borderBottom: "2px solid #f9b233",
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
    fontWeight: "bold",
    margin: 0,
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

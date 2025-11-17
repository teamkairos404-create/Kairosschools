import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Competency() {
  return (
    <div>
      <Header />

      <section style={{ padding: "60px", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Competency-Based Learning
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "800px", margin: "0 auto" }}>
          Kairos helps schools identify gaps in student understanding through
          structured competency-based assessments. Students answer questions,
          and our system generates a detailed report for teachers showing:
        </p>

        <ul
          style={{
            fontSize: "20px",
            lineHeight: "32px",
            marginTop: "30px",
            textAlign: "left",
            maxWidth: "600px",
            margin: "40px auto",
          }}
        >
          <li>✔ Misconceptions in each concept</li>
          <li>✔ Competencies mastered & competencies needing work</li>
          <li>✔ Class-level learning patterns</li>
          <li>✔ Individual student performance</li>
          <li>✔ Suggested remediation paths</li>
        </ul>

        <a
          href="/contact"
          style={{
            display: "inline-block",
            background: "black",
            color: "white",
            padding: "14px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            marginTop: "20px",
            fontSize: "18px",
          }}
        >
          Book a Demo With Us
        </a>
      </section>

      <Footer />
    </div>
  );
}

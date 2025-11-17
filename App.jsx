import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Competency from "./pages/competency";

export default function App() {
  return (
    <Router>
      <div>

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div>
                <Header />
                <section style={{ padding: "60px", textAlign: "center" }}>
                  <h1 style={{ fontSize: "42px" }}>Welcome to Kairos</h1>
                  <p style={{ fontSize: "20px" }}>
                    Empowering K-12 schools with data-driven insights,
                    pedagogy support, and rich e-content.
                  </p>
                </section>
                <Footer />
              </div>
            }
          />

          {/* Competency Page */}
          <Route path="/competency" element={<Competency />} />

        </Routes>

      </div>
    </Router>
  );
}

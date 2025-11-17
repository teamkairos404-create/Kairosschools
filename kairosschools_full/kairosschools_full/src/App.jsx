import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />

      <div style={styles.section} id="competency">
        <h2>Competency-Based Questions</h2>
        <p>
          Students attempt questions, schools get insights, and misconceptions are identified.
        </p>
      </div>

      <div style={styles.section} id="pedagogy">
        <h2>Pedagogy Training</h2>
        <p>
          Teachers receive targeted pedagogy sessions to fix the learning gaps identified.
        </p>
      </div>

      <div style={styles.section} id="econtent">
        <h2>E-Content for Classrooms</h2>
        <p>
          Videos, interactives, and digital teaching content for K-12 lessons.
        </p>
      </div>
    </div>
  );
};

const styles = {
  section: {
    padding: "50px",
    borderBottom: "1px solid #eee",
  },
};

export default App;

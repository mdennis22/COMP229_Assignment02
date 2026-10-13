import { Link } from "react-router-dom";
import "../style/About.css";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-card">
        <header className="about-header">
          <h2 className="greeting">About Me</h2>
          <hr className="divider" />
        </header>

        <div className="about-content">
          {/* Paragraph 1: Introduction & Background */}
          <p>
            Hello! I'm Mitchell Dennis, a passionate software developer based in Hamilton, ON. I specialize in building full-stack web applications,
            focus on clean architecture, and love solving complex problems with modern technologies.
          </p>

          {/* Paragraph 2: Journey & Experience */}
          <p>
            My journey into software development started when I decided I wanted to make a career change from welding and fabrication 2 years ago.
            Since then, I’ve worked on various projects involving frontend interfaces, backend APIs, and database design. I'm constantly learning new
            tools and staying up to date with modern web standards.
          </p>

          {/* Paragraph 3: Interests, Philosophy, or Goals */}
          <p>
            I spend all my free time at the golf course. I started playing golf around the same time I started programming. I find that it gives me a
            good solid break from working at the computer. Keeping a balance between work and play is important as a software developer. Without
            balance, it will reflect in your work.
          </p>

          {/* Quick Info Grid */}
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value"> Hamilton, ON</span>
            </div>
            <div className="info-item">
              <span className="info-label">Education:</span>
              <span className="info-value"> 2nd Year Software Engineering Student</span>
            </div>
            <div className="info-item">
              <span className="info-label">Primary Stack:</span>
              <span className="info-value"> React, Node.js, JavaScript, SQL</span>
            </div>
            <div className="info-item">
              <span className="info-label">Status:</span>
              <span className="info-value"> Available for opportunities</span>
            </div>
          </div>

          <div className="about-actions">
            <a href="../assets//resume1.pdf" download className="btn btn-primary">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

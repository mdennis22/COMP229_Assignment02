import { Link } from "react-router-dom";
import "../style/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <p className="greeting">Hello, I'm</p>
        <h1>Mitchell Dennis</h1>
        <hr className="divider" />
        <p className="subtitle">Software Engineer</p>

        <p className="bio">
          I build clean, accessible, and performant web applications, third party API integrations, and database design. Welcome to my personal
          portfolio where I showcase my work and experience.
        </p>

        <p className="bio">I look to develop and maintain software solutions that can make a positive impact on users and businesses.</p>

        <div className="cta-buttons">
          <a href="/about" className="btn btn-primary">
            View More about me
          </a>
          <a href="/contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span>•</span>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span>•</span>
          <a href="mailto:mdenni22@my.centennialcollege.ca">Email</a>
        </div>
      </header>
    </div>
  );
};
export default Home;

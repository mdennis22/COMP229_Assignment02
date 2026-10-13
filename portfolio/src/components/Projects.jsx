import React from "react";
import "../style/Projects.css";
import pongScreenshot from "../assets/pong.png";
import mapScreenshot from "../assets/map screenshot with user location and bubba's house.png";
import wowScreenshot from "../assets/wow.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="greeting">Projects</h2>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <div>
            <h3 className="project-title">Recreation of Pong game</h3>
            <p className="project-description">
              {" "}
              A small project of a pong game that I built. I tried to thematically create the retro arcade version of the game as close as possible.
            </p>
          </div>
          <div className="project-screetshots">
            <img src={pongScreenshot} alt="Pong Game Screenshot" className="project-image" />
          </div>
        </div>
        <hr></hr>

        {/* Project 2 */}
        <div className="project-card">
          <div>
            <h3 className="project-title">Website with weather widget and maps that create a route to the business.</h3>
            <p className="project-description">
              Created a responsive website with a weather widget and interactive maps to help users find the best route to the business. I utilized
              Leaflet and OpenWeatherMap API's to provide real time information to the user.
            </p>
          </div>
          <div className="project-screetshots">
            <img src={mapScreenshot} alt="Map" className="project-image" />
          </div>
        </div>
        <hr></hr>

        {/* Project 3 */}
        <div className="project-card">
          <div>
            <h3 className="project-title">Full World of Warcraft Server hosted on a debian virtual machine</h3>
            <p className="project-description">
              Full local server setup for World of Warcraft hosted on a virtual machine. Utilizing Oracle Virtual box to install the software. Created
              a full database for account creation along with SQL. The server is fully functional and allows players to create accounts, log in, and
              play the game. The server also integrats AzerothCore "bots" that can be controlled by the user to create 5 man parties to defeat
              monsters.
            </p>
          </div>
          <div className="project-screetshots"></div>
          <img src={wowScreenshot} alt="World of Warcraft Server" className="project-image" />
        </div>
      </div>
    </div>
  );
};

export default Projects;

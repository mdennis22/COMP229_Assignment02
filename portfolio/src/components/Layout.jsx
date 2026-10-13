import { Link } from "react-router-dom";
import "../style/Global.css";
import logo from "../assets/logo3.png";

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h1>PORTFOLIO</h1>
      </header>

      <nav className="nav-links">
        <Link to="/">Home</Link>•<Link to="/about">About</Link>•<Link to="/contact">Contact</Link>•<Link to="/projects">Projects</Link>•
        <Link to="/services">Services</Link>•<Link to="/education">Education</Link>
      </nav>
      <hr />
    </div>
  );
};
export default Layout;

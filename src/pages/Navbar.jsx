import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <section className="slider" id="slider">
      <nav>
        <div className="portfolio-container">
          <span>P</span>ortfolio
        </div>
        <ul>
          <NavLink to="/">
            <li>
              <i className="fa-solid fa-house"></i>
              <span className="home_txt">Home</span>
            </li>
          </NavLink>

          <NavLink to="/about">
            <li>
              <i className="fa-solid fa-user"></i>
              <span className="about_txt">About Me</span>
            </li>
          </NavLink>
          <NavLink to="/projects">
            <li>
              <i className="fa-solid fa-folder-open"></i>
              <span className="project_txt">Projects</span>
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li>
              <i className="fa-solid fa-message"></i>
              <span className="contact_txt">Contact</span>
            </li>
          </NavLink>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;

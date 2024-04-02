import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function NavLinks({ navOpen, setNavOpen }) {
  const handleNavClose = () => setNavOpen(!navOpen);

  return (
    <div
      className={
        navOpen ? "navigation-links navigation-links-open" : "navigation-links"
      }
    >
      <div>
        <ul>
          <li>
            <Link to="Home" smooth onClick={handleNavClose}>
              Home
            </Link>
          </li>
          <li>
            <Link to="About" smooth onClick={handleNavClose}>
              About
            </Link>
          </li>
          <li>
            <Link to="Websites" smooth onClick={handleNavClose}>
              Websites
            </Link>
          </li>
          <li>
            <Link to="Webapps" smooth onClick={handleNavClose}>
              Webapps
            </Link>
          </li>
          <li>
            <Link to="Contact" smooth onClick={handleNavClose}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <a href="https://github.com/Newellso1" target="blank">
          <FontAwesomeIcon icon={faGithub} />{" "}
        </a>
        <a href="https://www.linkedin.com/in/newellso1/" target="blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}

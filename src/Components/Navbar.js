import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faSquareMinus } from "@fortawesome/free-regular-svg-icons";

export default function Navbar({ navOpen, setNavOpen }) {
  const navStyle = {
    height: navOpen ? "10em" : "",
  };

  return (
    <div className="navigation" style={navStyle}>
      <div className="button" onClick={() => setNavOpen(!navOpen)}>
        <FontAwesomeIcon icon={navOpen ? faSquareMinus : faSquarePlus} />
      </div>
    </div>
  );
}

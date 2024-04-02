import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar({ navOpen, setNavOpen }) {
  const buttonRotate1 = {
    rotate: navOpen ? "45deg" : "",
    width: navOpen ? "1.125em" : "",
  };

  const buttonRotate2 = {
    rotate: navOpen ? "-45deg" : "",
    width: navOpen ? "1.125em" : "",
  };

  return (
    <div className="navigation">
      <div className="button" onClick={() => setNavOpen(!navOpen)}>
        <div className="button-line-1" style={buttonRotate1}></div>
        <div className="button-line-2" style={buttonRotate2}></div>
      </div>
    </div>
  );
}

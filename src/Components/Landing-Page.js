import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-awesome-reveal";

export default function SplashPage() {
  return (
    <div className="page">
      <div className="splash">
        <h2>I</h2>
        <h2>Am</h2>
        <h2>Sam</h2>
        <TypeAnimation
          sequence={["Memorial Mason &\nAspiring Web\nDeveloper"]}
          wrapper="span"
          cursor={true}
          className="splash-paragraph"
        />
        <div className="skill-set">
          <Fade cascade delay={2250} triggerOnce={true} duration={615}>
            <FontAwesomeIcon icon={faHtml5} className="html-icon" />
            <FontAwesomeIcon icon={faCss3Alt} className="css-icon" />
            <FontAwesomeIcon icon={faJs} className="javascript-icon" />
            <FontAwesomeIcon icon={faReact} className="react-icon" />
          </Fade>
        </div>
      </div>
    </div>
  );
}

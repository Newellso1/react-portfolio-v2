import { TypeAnimation } from "react-type-animation";

export default function SplashPage() {
  return (
    <div className="page">
      <div className="splash">
        <h2>I</h2>
        <h2>Am</h2>
        <h2>Sam</h2>
        <TypeAnimation
          sequence={["Memorial Mason & \nAspiring Web\nDeveloper"]}
          wrapper="span"
          cursor={true}
          className="splash-paragraph"
        />
      </div>
    </div>
  );
}

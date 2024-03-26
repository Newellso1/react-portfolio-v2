import { TypeAnimation } from "react-type-animation";

export default function SplashPage() {
  return (
    <div className="page">
      <div className="splash">
        <h1>I</h1>
        <h1>Am</h1>
        <h1>Sam</h1>
        <TypeAnimation
          sequence={["Memorial Mason & Aspiring Web Developer"]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="splash-paragraph"
        />
      </div>
    </div>
  );
}

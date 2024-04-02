import { useState } from "react";
import AboutMe from "./Components/About-Me";
import Contact from "./Components/Contact";
import SplashPage from "./Components/Landing-Page";
import Navbar from "./Components/Navbar";
import WebApps from "./Components/Web-apps";
import Websites from "./Components/Websites";
import NavLinks from "./Components/Navigation-Links";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <SplashPage />
        <AboutMe />
        <Websites />
        <WebApps />
        <Contact />
        <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
        <NavLinks navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>
    </div>
  );
}

export default App;

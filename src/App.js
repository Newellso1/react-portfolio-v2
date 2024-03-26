import AboutMe from "./Components/About-Me";
import SplashPage from "./Components/Landing-Page";
import WebApps from "./Components/Web-apps";
import Websites from "./Components/Websites";

function App() {
  return (
    <div className="App">
      <SplashPage />
      <AboutMe />
      <Websites />
      <WebApps />
    </div>
  );
}

export default App;

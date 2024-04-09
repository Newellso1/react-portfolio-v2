import { Fade, Slide } from "react-awesome-reveal";
import Project from "./Project";

export default function WebApps() {
  return (
    <div className="page" id="Webapps">
      <Fade>
        <div className="web-apps-content">
          <h1>WebApps</h1>
          <p>
            Here are three different websites I've created over the last few
            months. The first demonstrates my knowledge of HTML, CSS, and some
            simple JavaScript. Then, The other two are examples of what I'm
            capable of using the React framework.
          </p>
          <div className="web-apps-examples">
            <Slide direction="up">
              <Project
                title="Weather App"
                description="A basic weather app that using an api to fetch the weather for the selected city"
                websiteLink="https://react-weather-app-newell.netlify.app/"
                githubLink="https://github.com/Newellso1/weather-app"
              />
            </Slide>
            <Slide direction="up" delay={200}>
              <Project
                title="MyMDB"
                description="A webapp that  the OMDB api to generate a list of movies based on users search, clicking a movie displays the relevant information. Movies can also be added and removed from users favourites"
                websiteLink="https://mymdb-newell.netlify.app/"
                githubLink="https://github.com/Newellso1/my-movie-database"
              />
            </Slide>
            <Slide direction="up" delay={250}>
              <Project />
            </Slide>
          </div>
        </div>
      </Fade>
    </div>
  );
}

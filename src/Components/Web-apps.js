import { Fade, Slide } from "react-awesome-reveal";
import Project from "./Project";

export default function WebApps() {
  return (
    <div className="page" id="Webapps">
      <Fade>
        <div className="web-apps-content">
          <h1>WebApps</h1>
          <p>
            Each of these projects showcases my knack for utilizing React's
            features to craft engaging web applications that provide users with
            fluid and interactive experiences.
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
                description="A webapp that  the OMDB api to generate a list of movies based on users search, clicking a movie displays the relevant information. Movies can also be added and removed from users favourites. For the latest version of this I have used tailwind for ease of styling and to make the experience a lot more responsive on mobile (Old version - https://mymdb-newell.netlify.app/)
                "
                websiteLink="https://mymdb-tailwind.netlify.app"
                githubLink="https://github.com/Newellso1/MyMDB"
              />
            </Slide>
            <Slide direction="up" delay={250}>
              <Project
                title="React Store - Work in Progress"
                description="This one is a work in progress, I set out creating a simple store page where the user could add and remove items from their basket and it developed more into a fully fledged webstore"
                websiteLink="https://elysian-store.netlify.app/"
                githubLink="https://github.com/Newellso1/elysian-store"
              />
            </Slide>
          </div>
        </div>
      </Fade>
    </div>
  );
}

import { Fade, Slide } from "react-awesome-reveal";
import Project from "./Project";

export default function Websites() {
  return (
    <div className="page" id="Websites">
      <Fade>
        <div className="web-apps-content">
          <h1>Websites</h1>
          <p>
            Here are three different websites I've created over the last few
            months. The first demonstrates my knowledge of HTML, CSS, and some
            simple JavaScript. Then, The other two are examples of what I'm
            capable of using the React framework
          </p>
          <div className="website-examples">
            <Slide direction="left">
              <Project
                title="No Place Like Gnome"
                description="This Website was created as a practice project for an interview, it's built using HTML, CSS and uses Javascript to validate whether data has been entered to required forms"
                websiteLink="https://newellso1.github.io/NPL-Gnome/index.html"
                githubLink="https://github.com/Newellso1/NPL-Gnome"
              />
            </Slide>
            <Slide direction="up">
              <Project
                title="Babysitting Website"
                description="I created a simple one page website for a family members babysitting company, the navigation menu is rendered conditionally and the testimonials are easily updated from a separate file"
                websiteLink="https://main--babystitting-website.netlify.app/"
                githubLink="https://github.com/Newellso1/babysitting-by-maisie"
              />
            </Slide>
            <Slide direction="right">
              <Project
                title="Boss Burgers"
                description="I brought back one of my favourite independent food chains in this project, including a custom burger menu (when viewing on a mobile), I found having reusable components really handy when it came to mapping the menu and allowing the user to eliminate certain options"
                websiteLink="https://65a5554884f9c025562d719d--boss-burgers.netlify.app/"
                githubLink="https://github.com/Newellso1/boss-burgers"
              />
            </Slide>
          </div>
        </div>
      </Fade>
    </div>
  );
}

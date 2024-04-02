import { Fade, Slide } from "react-awesome-reveal";

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
              <div>1</div>
            </Slide>
            <Slide direction="up" delay={200}>
              <div>2</div>
            </Slide>
            <Slide direction="up" delay={250}>
              <div>3</div>
            </Slide>
          </div>
        </div>
      </Fade>
    </div>
  );
}

import { Fade, Slide } from "react-awesome-reveal";

export default function Websites() {
  return (
    <div className="page">
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
              <div>1</div>
            </Slide>
            <Slide direction="up">
              <div>2</div>
            </Slide>
            <Slide direction="right">
              <div>3</div>
            </Slide>
          </div>
        </div>
      </Fade>
    </div>
  );
}

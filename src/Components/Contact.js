import { Fade } from "react-awesome-reveal";
export default function Contact() {
  return (
    <div className="page" id="Contact">
      <Fade delay={300}>
        <div className="contact-content">
          <h1>Get in touch!</h1>
          <p>
            If you have any inquiries regarding my work, are interested in
            potential collaborations, or simply wish to get in touch then please
            don't hesitate to reach out, either by the form below or by
            connecting with me through my social media channels.
          </p>
          <form name="contact" netlify>
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-top">
              <input
                id="Name"
                name="name"
                type="text"
                placeholder="Name?"
              ></input>
              <input
                id="Email"
                name="email"
                type="email"
                placeholder="Email?"
              ></input>
            </div>
            <textarea id="Message" name="message"></textarea>
            <input type="submit" value="submit" />
          </form>
        </div>
      </Fade>
    </div>
  );
}

import React, { useRef, useState } from "react";
import "./Contact.css";
import instagramIcon from "../../assets/instagram.png";
import YoutubeIcon from "../../assets/youtube.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Start loading animation
    setLoading(true);

    emailjs
      .sendForm(
        "service_z19z4kd",
        "template_2tm3l0z",
        form.current,
        "eTc5--PLCKqbgFsJy"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true); // Show success message
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          alert("❌ Failed to send email");
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <h1 className="contactPageTitle">
        Contact <span>Me</span>
      </h1>

      <div className="contactDetail">
        <p className="phone">📞 +91 6394604267</p>
        <p className="email">📩 animeshmishra829@gmail.com</p>
      </div>

      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>

      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Your Name" name="name" required />
        <input type="email" placeholder="Your Email" name="email" required />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
        ></textarea>

        {!success ? (
          <button
            type="submit"
            className={`submitBtn ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        ) : (
          <div className="successContainer">
            <div className="successMessage">
              ✅ Message sent successfully! <br />
              I’ll reply ASAP.
            </div>
            <button className="resendBtn" onClick={() => setSuccess(false)}>
              Send Another Message
            </button>
          </div>
        )}

        <div className="links">
          <div className="links">
          
            <a
              href="https://www.instagram.com/animeshmishra.here?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="instagram" className="link" />
            </a>
            <a
              href="https://www.youtube.com/@AnimeshMishra-123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={YoutubeIcon} alt="youtube" className="link" />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;

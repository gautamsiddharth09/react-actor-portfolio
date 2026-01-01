import React from "react";
import "./Intro.css";
import heroImage from "../../assets/heroImage.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm
          <span className="introName"> Animesh Mishra</span>
          <br />
          Actor
        </span>
        <p className="introPara">
          I am a professionally Trained Actor from Tagore National School of
          Drama, Bhopal (2021-2023).
        </p>

        <div className="btnGroup">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/916394604267?text=Hello%20Animesh,%20I%20saw%20your%20portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn whatsappBtn">📲 WhatsApp</button>
          </a>

          {/* Call Button */}
          <a href="tel:+916394604267">
            <button className="btn callBtn">📞 Call Me</button>
          </a>
        </div>
      </div>
      <img src={heroImage} alt="heroIMage" className="heroImage" />
    </section>
  );
};

export default Intro;

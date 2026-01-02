import React from "react";
import "./Intro.css";
import heroImage from "../../assets/heroImage.png";

const Intro = () => {

  // WhatsApp Function
  const openWhatsApp = () => {
    const msg =
      "Hello Animesh, I saw your portfolio and want to connect with you.";
    const url = `https://wa.me/916394604267?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  //  Call Function 
  const makeCall = () => {
    const phoneNumber = "916394604267";
    window.open(`tel:${phoneNumber}`);
  };

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
          <button className="btn whatsappBtn" onClick={openWhatsApp} aria-label="Chat with Animesh Mishra on WhatsApp">
            📲 WhatsApp
          </button>

          {/* Call Button */}
          <button className="btn callBtn" onClick={makeCall}  aria-label="Call Animesh Mishra">
            📞 Call Me
          </button>
        </div>
      </div>

       <img
        src={heroImage}
        alt="Animesh Mishra Actor Portrait"
        className="heroImage"
        loading="lazy"
      />
    </section>
  );
};

export default Intro;

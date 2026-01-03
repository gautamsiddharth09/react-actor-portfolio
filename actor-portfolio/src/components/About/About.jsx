import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="aboutLuxury">
        {/* Left Accent Line */}
        <div className="accentLine"></div>

        {/* Content */}
        <div className="aboutContent">
          <h1 className="actorName">
            About <span>Me</span>
          </h1>

          <p className="actorTagline">Theatre & Screen Actor</p>

          <div className="actorStats">
            <div>
              <span>Age</span>
              <h4>29</h4>
            </div>
            <div>
              <span>Height</span>
              <h4>5'9"</h4>
            </div>
            <div>
              <span>Based In</span>
              <h4>Mumbai</h4>
            </div>
            <div>
              <span>Experience</span>
              <h4>7+ Years</h4>
            </div>
          </div>

          <div className="actorBio">
            <p>
              My name is Animesh Mishra, and I am from Lucknow, Uttar Pradesh.
              Professionally trained at{" "}
              <span className="collegeName">
                Tagore National School of Drama, Bhopal
              </span>
              , where I completed a 2 years postgraduate program in Theatre.
            </p>

            <p>
              With over <strong>7 years of active theatre experience</strong>, I
              have worked closely with multiple directors across diverse
              productions, developing a strong foundation in performance,
              discipline, and character depth.
            </p>

            <div className="credits">
  <h3>I have featured in web series such as</h3>
  <ul>
    <li>Heart of Darkness</li>
    <li>Aadarsh Bal Vidyalaya</li>
  </ul>

  <h3>Television Shows</h3>
  <ul>
    <li>Yeh Rishta Kya Kehlata Hai</li>
    <li>Pushpa Impossible</li>
    <li>Ishani</li>
    <li>Mann Ati Sundar</li>
    <li>Jaane Anjaane Hum Mile</li>
    <li>etc..</li>
  </ul>
</div>


            <p>
              I am actively seeking opportunities in <strong>films</strong>,
              <strong> web series</strong>, <strong>OTT platforms</strong>, and
              <strong> digital content</strong>, and I welcome auditions for
              complex, challenging roles.
            </p>

            <p>
              Alongside acting, my passion for{" "}
              <strong>reading and writing </strong>
              allows me to approach scripts with deeper emotional and narrative
              understanding.
            </p>
          </div>

          <p className="actorQuote">
            “ I am dedicated, disciplined, adaptable, and I am eager to
            collaborate with creative professionals and contribute meaningfully
            to impactful storytelling”
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

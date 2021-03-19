import React from "react";
import standingPicture from "../../img/personalPhotos/allo.jpg";

const WhoIAm = ({ chapterRef }) => {
  return (
    <section className="about-me" id="about" ref={chapterRef}>
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        React Developer based in Budapest, Hungary
      </p>

      <div className="about-me__body">
        <p>
          I am just starting my <strong>new career</strong> as Front End
          Developer. Having tried myself in various professions, I bring a
          varied{" "}
          <strong>
            {" "}
            work experien<span className="sketch-kipipalva">c</span>e
          </strong>{" "}
          from all kind fields outside of the programming world. From Accounting
          where I managed bookkeeping for a bunch of films shot in Hungary to
          being a Pyrotechnician in action packed Hollywood movies, burning down
          movie sets and creating explosions for a living. I also supported my
          family business as Customhouse Agent. Having finished an intense 4
          month long <strong>Front End Developer bootcamp</strong> at Codecool I
          am ready to jump om the deep end and start a new project. <br />
          Based on my work experience I am confident to describe myself like
          this:{" "}
          <strong>
            {" "}
            I <span className="circle-sketch-highlight">don't </span>give up
          </strong>{" "}
          and I don't crack under pressure, guaranteed. I know how to
          <strong> work hard</strong>, how to be a useful{" "}
          <strong>
            tea<span className="sketch-kipipalva">m</span> player
          </strong>
          , how to solve problems and think outside the box. I am very well{" "}
          <strong>aware of the importance</strong> of deadlines, cut-off times,
          just as the importance of customer satisfaction. I can adjust myself
          to any company's
          <strong>
            {" "}
            work cultur<span className="sketch-kipipalva">e</span>
          </strong>
          . I do believe in <strong>lifelong learning</strong> and the
          continuous self development, so I have no problem whatsoever learning
          and acquiring <strong>new skills</strong> for my professional career.
          I did it before, I am doing it right now, I will do it again whenever
          I need to. I am <strong>proactive</strong>, I can work{" "}
          <strong> independently</strong> and I don`t freeze down if I need to
          debug my own code. But above all: I am a{" "}
          <strong>
            nice, <span className="circle-sketch-highlight">trustworthy</span>
            <span className="sketch-smiley">
              <span className="sketch-smiley-eyes"> guy</span>
            </span>
          </strong>
          , you will not regret having me on your team.
        </p>
      </div>
      <img
        src={standingPicture}
        alt="Nagy Lajos portre"
        className="about-me__img"
      />
    </section>
  );
};
export default WhoIAm;
/*COMPONENT DESCRIPTION
parent: LandingPage only;
role: personal introduction in text
plus a standing image
*/
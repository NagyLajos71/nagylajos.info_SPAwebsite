import React from "react";
import Ambition from "../pagesFragments/Ambiton";
import { scrollToChapter } from "../../sharedFunctions/scrollToChapter";

const MyAmbitions = ({ chapterRef, chapterToScrollTo }) => {
  return (
    <section className="my-ambitions" ref={chapterRef}>
      <h2 className="section__title section__title--ambitions">My Ambitions</h2>
      <div className="ambitions">
        <Ambition topic={"carreer"} />
        <Ambition topic={"JSWizzard"} />
        <Ambition topic={"fullstack"} />
      </div>
      <a
        className="btn"
        onClick={() => {
          scrollToChapter(chapterToScrollTo);
        }}
      >
        My Projects
      </a>
      <a href="http://nagylajos.info/resume/" className="btn" target="_blank">
        My Resume
      </a>
    </section>
  );
};
export default MyAmbitions;
/*COMPONENT DESCRIPTION
parent: LandingPage only;
role: 2nd chapter; text with two buttons
background image is a computer
*/
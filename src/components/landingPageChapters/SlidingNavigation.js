import React from "react";
import SlidingNavigationLink from "../pagesFragments/SlidingNavigationLink";

const SlidingNavigation = ({
  scrollToHomeChapter,
  scrollToAboutChapter,
  scrollToMyAmbitionsChapter,
  scrollToMyWorkChapter,
}) => {

  return (
    <nav className="nav">
      <ul className="nav__list">
        <SlidingNavigationLink
          chapter={scrollToHomeChapter}
          linkText={"Home"}
        />

        <SlidingNavigationLink
          chapter={scrollToMyAmbitionsChapter}
          linkText={"My Ambitions"}
        />

        <SlidingNavigationLink
          chapter={scrollToAboutChapter}
          linkText={"About Me"}
        />

        <SlidingNavigationLink
          chapter={scrollToMyWorkChapter}
          linkText={"My Work"}
        />
      </ul>
    </nav>
  );
};
export default SlidingNavigation;
/*COMPONENT DESCRIPTION
parent: LandingPage only;
role: provide slide in/out Navigation panel 
navigation only within the homepage chapters
to navigate to different projects the user has to click on an image in MyProjects chapter.
*/
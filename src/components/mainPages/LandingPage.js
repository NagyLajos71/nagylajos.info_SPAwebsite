import React, { useRef } from "react";
import HamburgerIcon from "../pagesFragments/HamburgerIcon";
import SlidingNavigation from "../landingPageChapters/SlidingNavigation";
import MyLogo from "../pagesFragments/Logo";
import Introduction from "../landingPageChapters/Introduction";
import MyAmbitions from "../landingPageChapters/MyAmbitions";
import WhoIAm from "../landingPageChapters/WhoIAm";
import MyProjects from "../landingPageChapters/MyProjects";
import Footer from "../pagesFragments/Footer";

const LandingPage = () => {
  const introChapter = useRef();
  const aboutMeChapter = useRef();
  const myAmbitionsChapter = useRef();
  const myProjectsChapter = useRef();
  const parentId = "LandingPage"; //referencing this component in the props system

  return (
    <div>
      <header>
        <MyLogo />
        <HamburgerIcon />
        <SlidingNavigation
          scrollToHomeChapter={introChapter}
          scrollToAboutChapter={aboutMeChapter}
          scrollToMyAmbitionsChapter={myAmbitionsChapter}
          scrollToMyWorkChapter={myProjectsChapter}
        />
      </header>
      <Introduction parentId={parentId} chapterRef={introChapter} />
      <WhoIAm chapterRef={aboutMeChapter} />
      <MyAmbitions
        chapterRef={myAmbitionsChapter}
        chapterToScrollTo={myProjectsChapter}
      />
      <MyProjects chapterRef={myProjectsChapter} />
      <Footer parentId={parentId} />
    </div>
  );
};
export default LandingPage;
/*COMPONENT DESCRIPTION
parent: App.js;
role: this is the de facto index.js, the starting point
*/
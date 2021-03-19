import React from "react";
import portraitPicture1 from "../../img/personalPhotos/portre.jpg";
import portraitPicture2 from "../../img/personalPhotos/portre2.jpg";
import { pageText } from "../data/pageText"; //textContent for HTML elements

const Introduction = ({ parentId, chapterRef }) => {
  return (
    <section className="intro" ref={chapterRef}>
      <h1
        className="section__title section__title--intro"
        style={parentId !== "LandingPage" ? { textAlign: "right" } : null}
      >
        {pageText.headerIntro[parentId].h1}
        <strong>{pageText.headerIntro[parentId].strong}</strong>
      </h1>
      <p className="setion__subtitle section__subtitle--intro">
        {pageText.headerIntro[parentId].p}
      </p>
      <img
        src={parentId === "LandingPage" ? portraitPicture1 : portraitPicture2}
        className="intro__img"
      />
    </section>
  );
};
export default Introduction;

/*COMPONENT DESCRIPTION
parent: LandingPage and all the projectPages;
role: header with foto and Title
*/

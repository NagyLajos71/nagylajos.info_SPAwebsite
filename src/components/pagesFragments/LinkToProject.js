import React from "react";
import { Link } from "react-router-dom";
import { pageText } from "../data/pageText"; //textContent for HTML elements
import flexbox from "../../img/imageLinks/flexbox.png";
import webshop from "../../img/imageLinks/webshop.png";
import SPA from "../../img/imageLinks/SPA.png";

const imageSelector = (projectName) => {
  switch (projectName) {
    case "flexbox":
      return flexbox;
    case "webshop":
      return webshop;
    case "SPA":
      return SPA;
    default:
      return flexbox;
  }
};

const LinkToTheProject = ({ projectName }) => {
  return (
    <div className="finishedProject">
      <Link
        to={pageText.LinkToTheProject[projectName].linkTo}
        // target="_blank"
        className="portfolio__item"
      >
        <img
          src={imageSelector(projectName)}
          alt="portfolio image"
          className="portfolio__img"
        />
      </Link>
      <div className="finishedProjectText">
        <h4>{pageText.LinkToTheProject[projectName].h4}</h4>
        <p>{pageText.LinkToTheProject[projectName].p}</p>
      </div>
    </div>
  );
};
export default LinkToTheProject;
/*COMPONENT DESCRIPTION
parent: MyProjects;
role: these are the images the user can click on to navigate to different pages for further description about the project
*/

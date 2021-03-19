import React from "react";

import { Link } from "react-router-dom";
import { scrollToChapter } from "../../sharedFunctions/scrollToChapter";

const SlidingNavigationLink = ({ chapter, linkText }) => {
  return (
    <li
      className="nav__item"
      onClick={() => {
        document.body.classList.remove("nav-open");
        scrollToChapter(chapter);
      }}
    >
      <Link to="/" className="nav__link">
        {linkText}
      </Link>
    </li>
  );
};
export default SlidingNavigationLink;
/*COMPONENT DESCRIPTION
parent: SlideingNavigation;
role: one link to navigate to a chapter within the LandingPAge
*/
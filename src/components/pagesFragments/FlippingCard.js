import React from "react";

const backgroundImageSelector = (link) => {
  switch (link) {
    case "http://www.nagylajos.info/flexbox/":
      return { frontSide: "flexFront", backSide: "flexBack" };
    case "http://www.nagylajos.info/webshop_v2103/":
      return { frontSide: "webShopFront", backSide: "webshopBack" };
    case "http://www.nagylajos.info/":
      return { frontSide: "SPAfront", backSide: "SPAback" };
    default:
      return {};
  }
};

const FlippingCard = ({ linkToWebsite, linkToGithub }) => {
  return (
    <div className="card">
      <div className="card__content">
        <div
          className={`card__front ${
            backgroundImageSelector(linkToWebsite).frontSide
          }`}
        >
          <h3 className="card__title">HOVER HERE</h3>
        </div>
        <div
          className={`card__back ${
            backgroundImageSelector(linkToWebsite).backSide
          }`}
        >
          <ul className="nav__list card__body">
            <li className="nav__item">
              <a href={linkToWebsite} className="nav__link" target="_blank">
                visit the website
              </a>
            </li>
            <li className="nav__item">
              <a href={linkToGithub} className="nav__link" target="_blank">
                check the code on Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FlippingCard;
/*COMPONENT DESCRIPTION
parent: projectpages;
role: flipping card effect in the middle of the project description pages
on the back side there are links to the website and github pages
*/
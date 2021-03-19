import React from "react";
import { pageText } from "../data/pageText"; //textContent for HTML elements

const Footer = ({ parentId }) => {
  return (
    <footer className="footer">
      <a href="mailto:lajos.nagy.budapest@gmail.com" className="footer-link">
        lajos.nagy.budapest@gmail.com
      </a>
      <p>+36 20 288 9556</p>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href={pageText.footer[parentId].githubLink}
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/lajos-nagy-921a771b6/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href={pageText.footer[parentId].websiteLink}
            target="_blank"
          >
            <i className="fas fa-laptop-code"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
/*COMPONENT DESCRIPTION
parent: LandingPage and all the projectpages;
role: provides information (phn, email) and links to github, linkedin and my portfolio website
*/

import React from "react";
import { NavLink } from "react-router-dom";

const SlidingProjectavigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li
          className="nav__item"
          onClick={() => {
            document.body.classList.remove("nav-open");
          }}
        >
          <NavLink
            exact
            to="/"
            className="nav__link"
            activeStyle={{
              opacity: ".3",
            }}
          >
            HOME
          </NavLink>
        </li>

        <li
          className="nav__item"
          onClick={() => {
            document.body.classList.remove("nav-open");
          }}
        >
          <NavLink
            to="/projectpage/flexbox"
            className="nav__link"
            activeStyle={{
              opacity: ".3",
            }}
          >
            PROJECT #1 - FLEXBOX
          </NavLink>
        </li>

        <li
          className="nav__item"
          onClick={() => {
            document.body.classList.remove("nav-open");
          }}
        >
          <NavLink
            to="/projectpage/webshop"
            className="nav__link"
            activeStyle={{
              opacity: ".3",
            }}
          >
            PROJECT #2 - WEBSHOP
          </NavLink>
        </li>
        <li
          className="nav__item"
          onClick={() => {
            document.body.classList.remove("nav-open");
          }}
        >
          <NavLink
            to="/projectpage/SPA"
            className="nav__link"
            activeStyle={{
              opacity: ".3",
            }}
          >
            PROJECT #3 - SINGLE PAGE WEBSITE
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default SlidingProjectavigation;
/*COMPONENT DESCRIPTION
parent: all the projectpages;
role: slide in-out component to navigate among the project pages and the home page (landing page)
please don`t confuse with SlidingNavigation component. They are very similar, but this latter one
navigates within the parent component`s chapters ( on the LandingPage)
*/
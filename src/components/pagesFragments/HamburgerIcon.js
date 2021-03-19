import React from "react";

const HamburgerIcon = () => {
  return (
    <button
      className="nav-toggle"
      aria-label="toggle navigation"
      onClick={() => {
        document.body.classList.toggle("nav-open");
      }}
    >
      <span className="hamburger"></span>
    </button>
  );
};
export default HamburgerIcon;
/*COMPONENT DESCRIPTION
parent: LandingPage and all the projectpages;
role: by clicking on it the Navbar slides in/out
*/
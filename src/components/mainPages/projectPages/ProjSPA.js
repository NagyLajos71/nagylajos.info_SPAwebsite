import React, { useLayoutEffect } from "react";
import HamburgerIcon from "../../pagesFragments/HamburgerIcon";
import SlidingProjectavigation from "../../pagesFragments/SlidingProjectavigation";
import MyLogo from "../../pagesFragments/Logo";
import Introduction from "../../landingPageChapters/Introduction";
import FlippingCard from "../../pagesFragments/FlippingCard";
import Footer from "../../pagesFragments/Footer";

const ProjSPA = () => {
  const parentId = "projSPA";
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div style={{ backgroundColor: "rgba(30,10,10,.1)" }}>
      <header>
        <MyLogo />
        <HamburgerIcon />
        <SlidingProjectavigation />
      </header>
      <Introduction parentId={parentId} />
      <div className="portfolio-item-individual">
        <h3>What is this project about?</h3>
        <p>
          I added my portfolio website to my projects as well. By the way this
          is what you are watching righrt now. I added it because this is my
          very first SPA (Single Page Application). I created the website with
          React and the react-router-dom library.
        </p>
        <FlippingCard
          linkToWebsite={"http://www.nagylajos.info/"}
          linkToGithub={
            "https://github.com/NagyLajos71/nagylajos.info_SPAwebsite.git"
          }
        />
        <h3>Why did I modify the original mulit-page website?</h3>
        <p>
          My original portfolio website was created with vanilla JS. It looked
          pretty much like this one, and funcitoned well. There was no reason to
          change it apart from the fact that I want to position myself as a
          React developer, so I took all the opportunities to practice React.
        </p>
        <h3>The code</h3>
        <p>
          The project was created with function based React components. The
          routing was dealt with the react-router-dom library. <br />
          The biggest obstacle I faced during my coding was how to scroll from
          one component to an other one within the same page. In myAmbitions
          component there is a button, which leads the visitor down to the
          MyProjects component. The solution I choosed was to create useRef
          hooks in their parent component, and pass them down to the child
          components, where I could use them in the ref property (MyProjects),
          and at the buttonClickHandler (myAbitions).
        </p>
      </div>
      <Footer parentId={parentId} />
    </div>
  );
};
export default ProjSPA;
/*COMPONENT DESCRIPTION
parent: App.js;
role: my personal portfolio website as SPA (single page app)
*/
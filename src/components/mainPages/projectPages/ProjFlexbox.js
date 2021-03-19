import React, { useLayoutEffect } from "react";
import HamburgerIcon from "../../pagesFragments/HamburgerIcon";
import SlidingProjectavigation from "../../pagesFragments/SlidingProjectavigation";
import MyLogo from "../../pagesFragments/Logo";
import Introduction from "../../landingPageChapters/Introduction";
import FlippingCard from "../../pagesFragments/FlippingCard";
import Footer from "../../pagesFragments/Footer";
import ScreenshotFlexbox0 from "../../../img/projectpages/flexbox/ScreenshotFlexbox0.png";
import ScreenshotFlexbox1 from "../../../img/projectpages/flexbox/ScreenshotFlexbox1.png";
import ScreenshotFlexbox2 from "../../../img/projectpages/flexbox/ScreenshotFlexbox2.png";

const ProjFlexbox = () => {
  const parentId = "projFlexbox";
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div style={{ backgroundColor: "rgba(0,0,0,.1)" }}>
      <header>
        <MyLogo />
        <HamburgerIcon />
        <SlidingProjectavigation />
      </header>
      <Introduction parentId={parentId} />
      <div className="portfolio-item-individual">
        <h3>What is this project about?</h3>
        <p>
          This is a visual help to see the aggregated effects of different
          Flexbox settings.
        </p>
        <FlippingCard
          linkToWebsite={"http://www.nagylajos.info/flexbox/"}
          linkToGithub={"https://github.com/NagyLajos71/flexbox.git"}
        />
        <p>
          I have completed this project 3 times already. First time the code was
          written in plain Vanilla JavaScript, using tons of querySelectors to
          be able dealing with all of the different settings options. Secound
          time I applied my newly acquired React knowledge. It wasn`t that bad
          approach altogether, but the only way I could solve some challenges,
          was that I stored all the data in the App.js component, and drilled
          them down to all the other components via the Props System. A bit
          better solution this one, than the plain vanilla JS version, but all
          these deeply nested components receiving and passing utterly unrealted
          props made my code way more complicated than necessary. Luckily as I
          progressed thru my React learning curve, eventually I could solve this
          problem with <strong>Redux</strong> state management library. This is
          the final version that you can see here.
        </p>
        <h3>Why did I choose this particular project?</h3>
        <p>
          Sometimes it is just way too hard to wrap my head around the different
          Flexbox concepts: what does align-items do? And what about the
          align-self? Are these same concepts? And what about the align-content?
          Which one of these three should I use in my css settings? Do I need to
          modify the justify-content or the align-content settings to move the
          div upwards? So many unanswered questions about a single CSS
          setting... <br />
          To decide which one to use and how to use it, probably the easiest way
          is by doing and seeing the result. Just simply playing around a bit
          and seeing waht comes out of that gives me answer faster, rather than
          figuring out from the official manual.
          <br />
          <img src={ScreenshotFlexbox0} alt="app screenshot" />I admit, there
          are similar online tools exist on the Internet. My solution one is not
          an altered copy of any of those, I created this project myslef to
          practice JavaScript programming, and comprehend the concepts and logic
          behind the Flexbox.
        </p>
        <h3>The code</h3>
        <p>
          The project was created with function based{" "}
          <strong>
            <span className="circle-sketch-highlight">React</span>{" "}
          </strong>
          components using the{" "}
          <span className="circle-sketch-highlight">Redux</span> library to
          store the global data. The React Hooks I used in this project were
          useState, useEffect, useRef. Although I was aware of the existence of
          the useSelector and useDispatch hooks as well, I deliberately used the
          connect() function along with mapStateToProps() and
          mapDispatchToProps() functions to connect my React components to Redux
          Store. <br />
          The two biggest obstacles I faced during my coding were that the
          Dropdown component was re-used in 4 different places in four different
          roles in this project. I had to figure out the way how to provide
          different dropdown menus and different functionalities attached to
          user selections. The secound one was to figure out a way how to
          differentiate the applied Flexbox rules: effecting only the parent
          component, a single child component or all the child components
          alltogether.
        </p>
        <h3>How does the App work?</h3>
        <p>
          On the right side there are colored boxes (in the code comments I
          refer them as ActionBoxes). These boxes react to the Flexbox settings
          and visualize their aggregated effects. On the left side are the 3
          Settings Panels, where the user can adjust the different settings as
          she pleases.
          <br />
          <img src={ScreenshotFlexbox1} alt="app screenshot" />
          The top one is dedicated merely to change the number of the colored
          boxes. The middle one is for adjusting all those Flexbox settings that
          have effects on the PARENT component. The lower one is functioning as
          settings panel for the CHILD components. To be able to adjust any
          CHILD element settings the user first has to select (click on) an
          ActionBox on the right side of the screen. <br />
          Also the user can see listed all the currently applied Flexbox
          settings next to the dropdown lists. One of these lists is reserved
          for the parent component`s details, and the other one is for the
          currently clicked child component`s settings. If the user clicks on a
          different actionbox, the information will be updated automatically.
        </p>
        <img src={ScreenshotFlexbox2} alt="app screenshot" />
        <p>Have fun playing around with this app!</p>
      </div>
      <Footer parentId={parentId} />
    </div>
  );
};
export default ProjFlexbox;
/*COMPONENT DESCRIPTION
parent: App.js;
role: provide background information to a portfolio project (Flexbox playground)
*/
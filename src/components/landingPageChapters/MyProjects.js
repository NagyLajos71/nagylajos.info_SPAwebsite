import React from "react";
import LinkToProject from "../pagesFragments/LinkToProject";
import { pageText } from "../data/pageText"; //statement about not copying an other project

const MyProjects = ({ chapterRef }) => {
  return (
    <section className="my-work" ref={chapterRef}>
      <h2 className="section__title--work">My projects</h2>
      <p className="section__subtitle--work">{pageText.MyProjects.statement}</p>
      <div className="portfolio">
        {/* Portfolio 1 */}
        <LinkToProject projectName={"flexbox"} />
        {/* Portfolio 2 */}
        <LinkToProject projectName={"webshop"} />
        {/* Portfolio 3 */}
        <LinkToProject projectName={"SPA"} />
      </div>
    </section>
  );
};
export default MyProjects;
/*COMPONENT DESCRIPTION
parent: LandingPage only;
role: to provide images as clickable links to project pages (not to the project itself but to the description)
*/
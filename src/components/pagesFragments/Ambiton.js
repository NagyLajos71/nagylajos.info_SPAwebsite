import React from "react";
import { pageText } from "../data/pageText"; //textContent for HTML elements

const Ambition = ({ topic }) => {
  return (
    <div className="ambition">
      <h3>{pageText.Ambition[topic].h3}</h3>
      <p>{pageText.Ambition[topic].p}</p>
    </div>
  );
};
export default Ambition;
/*COMPONENT DESCRIPTION
parent: MyAmbitions;
role: one of the 3 colums in that chaper describing an ambition of mine
*/
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./mainPages/LandingPage";
import ProjFlexbox from "./mainPages/projectPages/ProjFlexbox";
import ProjWebshop from "./mainPages/projectPages/ProjWebshop";
import ProjSPA from "./mainPages/projectPages/ProjSPA";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/projectpage/flexbox" exact component={ProjFlexbox} />
        <Route path="/projectpage/webshop" exact component={ProjWebshop} />
        <Route path="/projectpage/SPA" exact component={ProjSPA} />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home";
import Details from "./components/details";
import NavBar from "./components/navbar";
import Scrapper from "./components/scrapper";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar></NavBar>
        <Route path={"/"} exact component={Home} />
        <Route path={"/details/:locationName"} exact component={Details} />
        <Route path={"/scrapper"} exact component={Scrapper} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

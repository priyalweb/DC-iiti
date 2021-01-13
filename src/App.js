import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Coreteam from "./Components/About/Coreteam";
import Governingbody from "./Components/About/Governingbody";
import Advisoryboard from "./Components/About/Advisoryboard";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/about/3" component={Advisoryboard} />
        <Route exact path="/about/2" component={Governingbody} />
        <Route exact path="/about/4" component={Coreteam} />

        <Route path="/programmes" />
        <Route path="/partners" />
        <Route path="/portfolio" />
        <Route path="/connect" />
        <Route path="/testimonials" />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

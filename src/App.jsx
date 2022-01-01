import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/reactlivewebsite" component={Home} />
        <Route exact path="/reactlivewebsite/about" component={About} />
        <Route exact path="/reactlivewebsite/service" component={Service} />
        <Route exact path="/reactlivewebsite/contact" component={Contact} />
        <Redirect to="/reactlivewebsite" />
      </Switch>
      <Footer />
    </>
  );
};
export default App;

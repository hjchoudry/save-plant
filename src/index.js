import React from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Galleries from "./galleries";
import Contact from "./contact";
import Basic from "./basic";

function App() {
  return (
    <Router>
      <Basic
        routing={
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/galleries">
              <Galleries />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        }
      />
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));

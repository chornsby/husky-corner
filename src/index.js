import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import "bulma/css/bulma.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Convert from "./views/Convert";
import Home from "./views/Home";

ReactDOM.render(
  <Router>
    <Navbar />
    <Route path="/" component={Home} exact />
    <Route path="/convert/" component={Convert} />
    <Footer />
  </Router>,
  document.getElementById("root")
);

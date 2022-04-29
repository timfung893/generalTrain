import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import RedirectURL from "../router/RedirectURL";
import "./../css/App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Header from "./Header";
import Services from "./Services";


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <RedirectURL />
        <Footer />
      </div>
    );
  }
}

export default App;

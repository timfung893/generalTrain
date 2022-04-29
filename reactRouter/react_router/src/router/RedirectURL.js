import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Services from "../components/Services";

class RedirectURL extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="services" element={<Services />} />
      </Routes>
    );
  }
}

export default RedirectURL;

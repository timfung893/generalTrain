/* eslint-disable no-undef */
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


function RegOne() {
  return (
    <div>
      <h1>This is one</h1>
    </div>
  );
}

var RegTwo = () => {
  return (
    <div>
      <h2>This is two</h2>
    </div>
  );
};

function Item(props) {
  return (
    <div>
      <img src={props.image} alt="" />
    </div>
  );
}

class Item2 extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="" />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The first app</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <RegOne />
      <RegTwo />
      <Item image="https://images.unsplash.com/photo-1635940960084-3794d7d85f07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1526&q=80" />
      <Item2 image="https://images.unsplash.com/photo-1635945404795-dd6bcdd216e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" />
    </div>
  );
}

export default App;

import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import News from "./News";

class App extends Component {
  render() {
    return (
      <div>
        <h1>and ok</h1>
        {this.props.data}
        <News />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.characters,
  };
};

export default connect(mapStateToProps)(App);

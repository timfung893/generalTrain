import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase";
import { firebaseConnect } from "./firebaseConnect";

class App extends Component {
  // add new data
  addData = () => {
    const dataBase = firebase.database().ref("dataForNote/");
    dataBase.push({
      title: "Dec 16",
      content: "continue to work on react",
    });
    console.log("You have added new item");
  };

  // delete data

  delData = (id) => {
    const dataBase = firebase.database().ref("dataForNote/");
    dataBase.child(id).remove();
    console.log("You have deleted an item with the id of " + id);
  };

  render() {
    console.log(firebaseConnect);
    return (
      <div>
        <h3>Edit data here</h3>
        <button
          onClick={() => {
            this.addData();
          }}
        >
          Add Data
        </button>
        <hr />
        <button
          onClick={() => {
            this.delData("note 1");
          }}
        >
          Delete Data
        </button>
      </div>
    );
  }
}

export default App;

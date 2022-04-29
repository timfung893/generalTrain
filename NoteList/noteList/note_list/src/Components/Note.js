import React, { Component } from "react";
import { data } from "./firebaseConnect";
import NoteItem from "./NoteItem";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFirebase: [],
    };
  }
  // get data from firebase and set state
  UNSAFE_componentWillMount() {
    data.on("value", (notes) => {
      var noteData = [];
      notes.forEach((element) => {
        const key = element.key;
        const title = element.val().title;
        const content = element.val().content;

        noteData.push({
          id: key,
          title: title,
          content: content,
        });

        this.setState({
          dataFirebase: noteData,
        });
      });
    });
  }

  // map data to note item from state
  getData = () => {
    if (this.state.dataFirebase) {
      return this.state.dataFirebase.map((value, key) => {
        return (
          <NoteItem
            key={key}
            i={key}
            note={value}
            title={value.title}
            content={value.content}
          />
        );
      });
    }
  };

  render() {
    return (
      <div className="col mt-2">
        <div id="noteList" role="tablist" aria-multiselectable="true">
          {this.getData()}
        </div>
      </div>
    );
  }
}

export default Note;

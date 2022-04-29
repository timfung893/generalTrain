import React, { Component } from "react";
import "../App.css";
import Note from "./Note";
import AddForm from "./AddForm";
import Nav from "./Nav";
import Noti from "./Noti"
import { data } from "./firebaseConnect";
import { connect } from "react-redux";


class App extends Component {
  // addData = (item) => {
  //   data.push(item);
  // };

  // show edit form

  showAddForm = () => {
    if (this.props.isEdit === true) {
      return <AddForm />;
    }
  };

  // show noti

  showNoti = () => {
    if (this.props.showNoti === true) {
      return <Noti />;
    }
  };

  render() {
    return (
      <div>
        <Nav />
        {this.showNoti()}
        <div className="container">
          <div className="row">
            <Note />

            {this.showAddForm()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit,
    isAdd: state.isAdd,
    showNoti: state.showNoti,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({ type: "CHANGE_EDIT_STATUS" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

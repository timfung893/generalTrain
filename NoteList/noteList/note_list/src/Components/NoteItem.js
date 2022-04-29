import React, { Component } from "react";
import { connect } from "react-redux";

class NoteItem extends Component {
  // get data when clicked on 'edit' btn and show form
  twoFunctionBtn = () => {
    // open addForm
    this.props.changeEditStatus();
    // send data to store
    this.props.getEditData(this.props.note);
  };

  deleteData = () => {
    this.props.deleteData(this.props.note.id);
    this.props.showNoti("Your data " + this.props.note.title + "has been deleted", "danger")
  };

  render() {
    return (
      <div className="card">
        <div className="card-header" role="tab" id="note1">
          <h5 className="mb-0">
            <a
              data-toggle="collapse"
              data-parent="#noteList"
              href={"#no" + this.props.i}
              aria-expanded="true"
              aria-controls="section1ContentId"
            >
              {this.props.title}
            </a>

            <div className="btn-group float-right">
              <button
                className="btn btn-outline-info"
                onClick={() => this.twoFunctionBtn()}
              >
                Edit
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={() => this.deleteData()}
              >
                Delete
              </button>
            </div>
          </h5>
        </div>
        <div
          id={"no" + this.props.i}
          className="collapse in"
          role="tabpanel"
          aria-labelledby="note1"
        >
          <div className="card-body">{this.props.content}</div>
        </div>
      </div>
    );
  }
}

// show form based on isEdit status - this.props.changeEditStatus
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({ type: "CHANGE_EDIT_STATUS" });
    },
    // send data to store
    getEditData: (editObject) => {
      dispatch({
        type: "GET_EDIT_DATA",
        editObject,
      });
    },
    // send deleteData to store
    deleteData: (deleteId) => {
      dispatch({ type: "DELETE_DATA", deleteId });
    },

    showNoti: (notiContent, notiType) => {
      dispatch({ type: "NOTI_ON", notiContent, notiType });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);

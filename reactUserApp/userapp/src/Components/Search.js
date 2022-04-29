import React, { Component } from "react";
import EditUserForm from "./EditUserForm";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingMode: false,
      tempText: "",
      userInfo: {},
    };
  }

  // get user info from editUserForm
  getUserInfo = (info) => {
    this.setState({
      userInfo: info,
    });
    this.props.saveUserInfo(info);
  };

  // show form when edit btn is clicked
  showEditUserForm = () => {
    if (this.props.editUserMode === true) {
      return (
        <EditUserForm
          getUserInfo={(info) => {
            this.getUserInfo(info);
          }}
          editUserObject={this.props.editUserObject}
          editUserBtn={(event) => {
            this.props.editUserBtn(event);
          }}
        />
      );
    }
  };

  // check if text is entered and save text in state
  isChanged = (event) => {
    this.setState({
      tempText: event.target.value,
    });
    this.props.saveText(this.state.tempText);
  };

  // change editing mode on click
  OnModeChange = () => {
    this.setState({ editingMode: !this.state.editingMode });
  };

  //  show close and add user btn
  showBtn = () => {
    if (this.state.editingMode === true) {
      return (
        <div
          className="btn btn-block btn-outline-secondary"
          onClick={() => {
            this.OnModeChange();
            this.props.closeForm();
          }}
        >
          Close
        </div>
      );
    } else {
      return (
        <div
          className="btn btn-block btn-outline-info"
          onClick={() => {
            this.OnModeChange();
            this.props.openForm();
          }}
        >
          Add a new user
        </div>
      );
    }
  };

  render() {
    return (
      <div className="col-12 text-center">
        {this.showEditUserForm()}
        <div className="btn-group">
          <label htmlFor="input" />
          <input
            type="text"
            className="form-control"
            id="input"
            aria-describedby="helpId"
            placeholder="Enter a key word"
            onChange={(event) => {
              this.isChanged(event);
            }}
          />
          <div
            className="btn btn-info"
            onClick={(text) => this.props.saveText(this.state.tempText)}
          >
            Search
          </div>
        </div>
        <div className="btn-group ml-2">{this.showBtn()}</div>

        <hr />
      </div>
    );
  }
}

export default Search;

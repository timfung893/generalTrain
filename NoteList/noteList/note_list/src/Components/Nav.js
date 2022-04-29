/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";

class Nav extends Component {
  changeStatus = (event) => {
    event.preventDefault();
    this.props.changeEditStatus();
    this.props.changeAddStatus();
  };

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-sm navbar-dark"
          style={{ backgroundColor: "#155c92" }}
        >
          <a className="navbar-brand" href="#">
            Note
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item">Action 1</a>
                  <a className="dropdown-item">Action 2</a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              {/* <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              /> */}
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                onClick={(event) => this.changeStatus(event)}
              >
                Add new
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({ type: "CHANGE_EDIT_STATUS" });
    },
    // switch form title isAdd or isEdit
    changeAddStatus: () => {
      dispatch({ type: "CHANGE_ADD_STATUS" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

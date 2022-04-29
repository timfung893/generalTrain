import React, { Component } from "react";

class TableDataRow extends Component {
  // delete user
  delUser = (idUser) => {
    this.props.delUser(idUser);
  };
  // show user right
  showRight = () => {
    if (this.props.right === 1) {
      return "User";
    } else if (this.props.right === 2) {
      return "Moderator";
    } else {
      return "Admin";
    }
  };

  // show edit user form

  showForm = () => {
    this.props.editUserBtn();
    this.props.editUser();
  };
  render() {
    return (
      <tr>
        <td>{this.props.no} </td>
        <td>{this.props.name} </td>
        <td>{this.props.phone} </td>
        <td>{this.showRight()} </td>
        <td>
          <div className="btn-group">
            <div
              onClick={() => {
                this.showForm();
              }}
              className="btn btn-warning edit"
            >
              Edit
            </div>
            <div
              className="btn btn-danger edit"
              onClick={(idUser) => this.delUser(this.props.id)}
            >
              Delete
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default TableDataRow;

import React, { Component } from "react";

class EditUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.editUserObject.id,
      name: this.props.editUserObject.name,
      phone: this.props.editUserObject.phone,
      right: this.props.editUserObject.right,
    };
  }

  isChanged = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  saveUserInfo = () => {
    var info = {};
    info.id = this.state.id;
    info.name = this.state.name;
    info.phone = this.state.phone;
    info.right = this.state.right;
    console.log(info);
    this.props.getUserInfo(info);
    this.props.editUserBtn();
  };

  render() {
    console.log(this.state);
    return (
      <div className="col">
        <form>
          <div className="card mt-2">
            <div className="card-header">Edit User Data</div>
            <div className="card-body text-primary">
              <div className="form-group">
                <input
                  defaultValue={this.props.editUserObject.name}
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-describedby="helpId"
                  name="name"
                  onChange={(event) => this.isChanged(event)}
                />
              </div>
              <div className="form-group">
                <input
                  defaultValue={this.props.editUserObject.phone}
                  type="text"
                  id="phone"
                  className="form-control"
                  placeholder="Phone"
                  aria-describedby="helpId"
                  name="phone"
                  onChange={(event) => this.isChanged(event)}
                />
              </div>
              <div className="form-group">
                <select
                  defaultValue={this.props.editUserObject.right}
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  name="right"
                  required
                  onChange={(event) => this.isChanged(event)}
                >
                  <option defaultValue>Select a right</option>
                  <option value={1}>User</option>
                  <option value={2}>Moderator</option>
                  <option value={3}>Admin</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  onClick={(info) => this.saveUserInfo(info)}
                  type="reset"
                  value="Save"
                  className="btn btn-warning"
                ></input>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditUserForm;

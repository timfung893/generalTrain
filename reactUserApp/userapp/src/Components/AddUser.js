import React, { Component } from "react";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      phone: "",
      right: "",
    };
  }

  isChanged = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  modeCheck = () => {
    if (this.props.showForm === true) {
      return (
        <div className="col">
          <form>
            <div className="card mt-2">
              <div className="card-body text-primary">
                <div className="form-group">
                  <input
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
                    className="custom-select mr-sm-2"
                    id="inlineFormCustomSelect"
                    name="right"
                    required
                    onChange={(event) => this.isChanged(event)}
                  >
                    <option defaultValue>Select a right</option>
                    <option value={1}>Member</option>
                    <option value={2}>Moderator</option>
                    <option value={3}>Admin</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="reset"
                    value="Add"
                    className="btn btn-block btn-primary"
                    onClick={(name, phone, right) =>
                      this.props.addUser(
                        this.state.name,
                        this.state.phone,
                        this.state.right
                      )
                    }
                  ></input>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    }
  };

  showUserForm = () => {
    if (this.state.editingMode === true) {
      return (
        <div className="card mt-2">
          <div className="card-body text-primary">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-describedby="helpId"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="phone"
                className="form-control"
                placeholder="Phone"
                aria-describedby="helpId"
              />
            </div>
            <div className="form-group">
              <select
                className="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
                required
              >
                <option defaultValue>Select a right</option>
                <option value={1}>Member</option>
                <option value={2}>Moderator</option>
                <option value={3}>Admin</option>
              </select>
            </div>
            <div className="form-group">
              <div className="btn btn-block btn-primary">Add</div>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return <div>{this.modeCheck()}</div>;
  }
}

export default AddUser;

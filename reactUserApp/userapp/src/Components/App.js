import React, { Component } from "react";
import "./../App.css";
import AddUser from "./AddUser";
import Header from "./Header";
import Search from "./Search";
import TableData from "./TableData";
import Data from "./Data.json";
import { v1 as uuidv1 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      dataUser: [],
      searchText: "",
      editUserStatus: false,
      editUserObject: {},
    };
  }

  // check localStorage before render to get data if there is

  componentWillMount() {
    if (localStorage.getItem("userData") === null) {
      localStorage.setItem("userData", JSON.stringify(Data));
    } else {
      var temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        dataUser: temp,
      });
    }
  }

  // delete user
  delUser = (idUser) => {
    const tempDataUser = this.state.dataUser.filter(
      (item) => item.id !== idUser
    );
    this.setState({
      dataUser: tempDataUser,
    });

    // update data on localStorage
    localStorage.setItem("userData", JSON.stringify(tempDataUser));
  };

  // get edited user data from search component
  saveUserInfo = (info) => {
    this.state.dataUser.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.phone = info.phone;
        value.right = info.right;
      }
    });
    // console.log("thong tin da sua la " + info.name);

    // update data on localStorage
    localStorage.setItem("userData", JSON.stringify(this.state.dataUser));
  };

  // change state and show form when edit btn is clicked

  // setting editing function

  showEditUserBtn = (event) => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
    });
  };

  editUSer = (user) => {
    this.setState({
      editUserObject: user,
    });
  };

  // get new user data from AddUser form

  getNewUserData = (name, phone, right) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.phone = phone;
    item.right = right;

    var items = this.state.dataUser;
    items.push(item);
    this.setState({
      dataUser: items,
    });

    // update data on localStorage
    localStorage.setItem("userData", JSON.stringify(items));
  };

  // get text from Search component

  saveText = (text) => {
    this.setState({
      searchText: text,
    });
  };

  // close & open form function for btn

  closeForm = () => {
    this.setState({
      showForm: false,
    });
  };

  openForm = () => {
    this.setState({
      showForm: true,
    });
  };

  render() {
    // check if search text is included in data and export saved text
    var savedText = [];
    this.state.dataUser.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        savedText.push(item);
      }
    });

    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                saveUserInfo={(info) => {
                  this.saveUserInfo(info);
                }}
                editUserMode={this.state.editUserStatus}
                editUserBtn={(event) => {
                  this.showEditUserBtn(event);
                }}
                editUserObject={this.state.editUserObject}
                saveText={(text) => this.saveText(text)}
                openForm={() => {
                  this.openForm();
                }}
                closeForm={() => {
                  this.closeForm();
                }}
              />
              <TableData
                delUser={(idUser) => {
                  this.delUser(idUser);
                }}
                editUser={(user) => {
                  this.editUSer(user);
                }}
                editUserBtn={(event) => {
                  this.showEditUserBtn(event);
                }}
                dataProps={savedText}
              />
              <AddUser
                showForm={this.state.showForm}
                addUser={(name, phone, right) =>
                  this.getNewUserData(name, phone, right)
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

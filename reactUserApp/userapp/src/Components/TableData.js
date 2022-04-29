import React, { Component } from "react";
import TableDataRow from "./TableDataRow";

class TableData extends Component {
  // delete user
  delUser = (idUser) => {
    this.props.delUser(idUser);
  };

  insertData2 = () =>
    this.props.dataProps.map((value, key) => (
      <TableDataRow
        key={key}
        no={key + 1}
        id={value.id}
        name={value.name}
        phone={value.phone}
        right={value.right}
        delUser={(idUser) => {
          this.delUser(idUser);
        }}
        editUser={(user) => {
          this.props.editUser(value);
        }}
        editUserBtn={(event) => {
          this.props.editUserBtn(event);
        }}
      />
    ));

  // add data to table row
  insertData = () =>
    this.props.dataProps.map((value, key) => (
      <TableDataRow
        key={key}
        no={key + 1}
        id={value.id}
        name={value.name}
        phone={value.phone}
        right={value.right}
        delUser={(idUser) => {
          this.delUser(idUser);
        }}
        editUser={(user) => {
          this.props.editUser(value);
        }}
        editUserBtn={(event) => {
          this.props.editUserBtn(event);
        }}
      />
    ));

  render() {
    return (
      <div className="col">
        <table className="table table-striped table-hover">
          <thead className="thead-inverse thead-default">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Rights</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.insertData()}</tbody>
        </table>
      </div>
    );
  }
}

export default TableData;

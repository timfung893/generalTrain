import React, { Component } from "react";
import { connect } from "react-redux";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
  }

  // set state data from store as default value
  UNSAFE_componentWillMount() {
    if (this.props.editItem) {
      this.setState({
        id: this.props.editItem.id,
        title: this.props.editItem.title,
        content: this.props.editItem.content,
      });
    }
  }

  // get data from input and put in state
  isChanged = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  // add state data to store when submit is clicked
  addData = (title, content) => {
    // edit case
    if (this.state.id) {
      var editObject = {};
      editObject.id = this.state.id;
      editObject.title = this.state.title;
      editObject.content = this.state.content;

      this.props.edit(editObject);
      this.props.changeEditStatus();
      this.props.showNoti("Your data has been edited", "warning");
    } else {
      // add new
      var item = {};
      item.title = this.state.title;
      item.content = this.state.content;
      // this.props.sendData(item);

      this.props.addNoteStore(item);
      this.props.showNoti("Your data has been added", "info");
    }
  };

  // switch title for edit/add form
  changeAddStatus = () => {
    if (this.props.isAdd === true) {
      return <h4> Add New Note </h4>;
    } else {
      return <h4> Edit Note </h4>;
    }
  };

  render() {
    return (
      <div className="col-4">
        {this.changeAddStatus()}
        <form>
          <div className="form-group">
            <label htmlFor="note-title">Note title</label>
            <input
              type="text"
              id="note-title"
              className="form-control"
              placeholder="Insert title here"
              aria-describedby="helpId"
              name="title"
              defaultValue={this.props.editItem.title}
              onChange={(event) => {
                this.isChanged(event);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="note-content">Note content</label>
            <input
              type="text"
              id="note-content"
              className="form-control"
              placeholder="Insert content here"
              aria-describedby="helpId"
              name="content"
              defaultValue={this.props.editItem.content}
              onChange={(event) => {
                this.isChanged(event);
              }}
            />
          </div>
          <button
            type="reset"
            onClick={() => {
              this.addData(this.state.title, this.state.content);
            }}
            className="btn btn-primary btn-block"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    editItem: state.editItem,
    isAdd: state.isAdd,
    isEdit: state.isEdit,
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // add data from AddForm state to store
    addNoteStore: (getItem) => {
      dispatch({ type: "ADD_DATA", getItem });
    },
    // get edited data to store
    edit: (getItem) => {
      dispatch({ type: "EDIT", getItem });
    },
    // close AddForm after editing
    changeEditStatus: () => {
      dispatch({ type: "CHANGE_EDIT_STATUS" });
    },
    // show noti when action is completed
    showNoti: (notiContent, notiType) => {
      dispatch({ type: "NOTI_ON", notiContent, notiType });
    },

    OffNoti: () => {
      dispatch({ type: "NOTI_OFF" });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);

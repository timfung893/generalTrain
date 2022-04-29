import React, { Component } from "react";
import { connect } from "react-redux";

class News extends Component {
  //   useEditStatus = () => {
  //     var { dispatch } = this.props;
  //     dispatch({ type: "CHANGE_EDIT_STATUS" });
  //   };

  render() {
    return (
      <div>
        <h1>This is a new prop</h1>
        <button
          onClick={() => {
            this.props.useEditStatus();
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    editStatus: state.editStatus,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    useEditStatus: () => {
      dispatch({ type: "CHANGE_EDIT_STATUS" });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(News);

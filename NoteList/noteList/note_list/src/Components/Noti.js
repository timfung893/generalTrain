import React, { Component } from "react";
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from "react-redux";

class Noti extends Component {
  showNoti = () => {
    if (this.props.showNoti === false) return null;
  };

  onDismiss = () => {
    this.props.OffNoti();
  };

  render() {
    return (
      <AlertContainer>
        <Alert type={this.props.notiType} onDismiss={() => this.onDismiss()} timeout={1000}>
          {this.props.notiContent}
        </Alert>
      </AlertContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    showNoti: state.showNoti,
    notiContent: state.notiContent,
    notiType: state.notiType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    OffNoti: () => {
      dispatch({ type: "NOTI_OFF" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Noti);

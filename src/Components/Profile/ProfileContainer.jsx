import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { getPostsProfile, getStatus } from "../../Redux/profile-reducer";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 4;
    }
    this.props.getPostsProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <>
        <Profile post={this.props.post} status={this.props.status} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    post: state.profilePage.post,
    status: state.profilePage.status
  };
};

export default compose(
  connect(mapStateToProps, { getPostsProfile, getStatus }),
  withRouter
)(ProfileContainer);

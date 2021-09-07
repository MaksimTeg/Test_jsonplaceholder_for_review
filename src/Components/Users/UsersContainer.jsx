import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../../Redux/users-reducer";
import Users from "./Users";
import Spinner from "../Commons/Spinner/Spinner";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <>
        <Users users={this.props.users} />
        {this.props.isFetching ? <Spinner /> : ""}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    isFetching: state.usersPage.isFetching
  };
};

const UsersContainer = connect(mapStateToProps, {
  getUsers
})(UsersAPIComponent);

export default UsersContainer;

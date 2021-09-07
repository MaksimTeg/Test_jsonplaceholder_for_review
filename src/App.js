import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Navbar from "./Components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div className="">
        <div className="header">
          <Navbar />
        </div>

        <div className="container">
          <Route path="/users/" render={() => <UsersContainer />} />
          <Route path="/posts/:userId?" render={() => <ProfileContainer />} />
        </div>
      </div>
    );
  }
}
export default withRouter(App);

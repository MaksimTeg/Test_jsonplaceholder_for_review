import { Route } from "react-router-dom";
import "./App.css";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";

export default function App(props) {
  return (
    <div className="">
      <div className="header">
        <Navbar />
      </div>
      <div className="">
        <div className="container">
          <Route exact path="/" render={() => <Login />} />
          <Route path="/users/" render={() => <UsersContainer />} />
          <Route path="/posts/:userId?" render={() => <ProfileContainer />} />
        </div>
      </div>
    </div>
  );
}

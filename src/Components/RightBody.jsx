import React from "react";
import { Switch, Route } from "react-router-dom";
//import ProfileContainer from "./ProfilePage/ProfileContainer";
import PostPageContainer from "./PostPageRight/PostPageContainer";
import Simple from "./Simple";

export const RightBody = (props) => {
  return (
    <div className="">
      <Switch>
        <Route exact path="/" render={() => <Simple />} />
        <Route path="/posts/:userId?" component={PostPageContainer} />
      </Switch>
    </div>
  );
};

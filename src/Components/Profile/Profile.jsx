import React, { useState } from "react";
import Spinner from "../Commons/Spinner/Spinner";
import { Comments } from "./Comments";
import "antd/dist/antd.css";
import { PageHeader, Button, Descriptions } from "antd";

const Profile = (props) => {
  if (!props.post) {
    return <Spinner />;
  }
  let [light, setLight] = useState(false);

  const setOff = () => setLight(false);
  const setOn = () => setLight(true);
  let fillColor = light;
  return (
    <div>
      <div>
        <PageHeader
          className="site-page-header"
          onBack={() => window.history.back()}
          title={"User №" + props.post.id}
          extra={
            light === true ? (
              <Button onClick={setOff} key="2">
                Hide Coments
              </Button>
            ) : (
              <Button onClick={setOn} key="1" type="primary">
                Show Comments
              </Button>
            )
          }
        >
          <Descriptions size="small" column={1}>
            <Descriptions.Item label="Title">
              <div>{props.post.title}</div>
            </Descriptions.Item>
            <Descriptions.Item label="Body">
              {props.post.body}
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
        {fillColor === true ? (
          <Comments post={props.post} status={props.status} />
        ) : (
          "NONE"
        )}
      </div>
    </div>
  );
};

export default Profile;

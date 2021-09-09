import React from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import { Card, Col, Row, Avatar } from "antd";

const { Meta } = Card;

let Users = (props) => {
  let usersElements = props.users.map((u) => {
    return (
      <>
        <NavLink to={"/posts/" + u.id}>
          <Row gutter={16}>
            <Col span={6}>
              <Card style={{ width: 600 }} title={"User №" + u.id}>
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={u.title}
                  description={u.body}
                />
              </Card>
            </Col>
          </Row>
        </NavLink>
      </>
    );
  });

  return (
    <div className={s.users}>
      <h2>User's Posts List</h2>
      <div>{usersElements}</div>
    </div>
  );
};

export default Users;

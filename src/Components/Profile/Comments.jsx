import React from "react";
import Spinner from "../Commons/Spinner/Spinner";
import s from "./ProfileInfo.module.css";
import "antd/dist/antd.css";
import { PageHeader, Descriptions } from "antd";

export const Comments = (props) => {
  if (!props.post) {
    return <Spinner />;
  }
  return (
    <div className={s.avatar}>
      {props.status.map((u) => (
        <PageHeader
          className="site-page-header"
          title={"Name: " + u.name}
          src={
            u.avatar != null
              ? u.avatar
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwAAVsLd7PDyf9XTI_XHd-F-w_lfF8-2r9Q&usqp=CAU"
          }
          alt="logo1"
          subTitle={"postId: " + u.postId}
        >
          <Descriptions size="small" column={1}>
            <Descriptions.Item label="Email:">{u.email}</Descriptions.Item>
            <Descriptions.Item label="Body">{u.body}</Descriptions.Item>
          </Descriptions>
        </PageHeader>
      ))}
    </div>
  );
};

import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { newPost } from "../../../Redux/profile-reducer";
import s from "../ProfileInfo.module.css"


const CommentForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <div>
          <Field
            name={"title"}
            component={"input"}
            type={"title"}
            placeholder={"Title"}
          />
        </div>
      </div>
      <div>
        <label>Body</label>
        <div>
          <Field
            name={"body"}
            component={"textarea"}
            type={"body"}
            placeholder={"Body"}
          />
        </div>
      </div>
      <div>
        <button type={"submit"} disabled={pristine || submitting}>
          Submit
        </button>
        <button
          type={"button"}
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear Values
        </button>
      </div>
    </form>
  );
};
const CommentReduxForm = reduxForm({ form: "newPost" })(CommentForm);

let NewPost = props => {
  const onSubmit = formData => {
    props.newPost( formData.title, formData.body);
  };

  return (
    <div className={s.new_post}>
      <h2>Add Comment</h2>
      <CommentReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = state => ({
post:state.profilePage.post
});
export default connect(mapStateToProps, { newPost })(NewPost);

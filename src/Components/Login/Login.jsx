import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./login.module.css";

const LoginForms = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <div>
          <Field
            name={"email"}
            component={"input"}
            type={"email"}
            placeholder={"Email"}
          />
        </div>
      </div>
      <div>
        <label>Pssword</label>
        <div>
          <Field
            name={"password"}
            component={"input"}
            type={"password"}
            placeholder={"Password"}
          />
        </div>
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} />{" "}
        remember me
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

const LoginReduxForms = reduxForm({ form: "login" })(LoginForms);

let Login = (props) => {
  const onSubmit = (formData) => {};
  return (
    <div className={s.login}>
      <h2>Login</h2>
      <LoginReduxForms onSubmit={onSubmit} />
    </div>
  );
};
export default Login;

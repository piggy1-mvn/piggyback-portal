import React from "react";
import TextInput from "./common/TextInput";
import PasswordInput from "./common/PasswordInput";
import PropTypes from "prop-types";

function LoginForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="username"
        label="Email"
        onChange={props.onChange}
        name="user_email"
        value={props.user.user_email}
        error={props.errors.user_email}
      />
      <PasswordInput
        id="password"
        label="Password"
        onChange={props.onChange}
        name="user_password"
        value={props.user.user_password}
        error={props.errors.user_password}
      />

      <input type="submit" value="Login" className="btn btn-primary" />
    </form>
  );
}

LoginForm.propTypes = {
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default LoginForm;

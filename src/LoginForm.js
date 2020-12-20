import React, { useState } from "react";

import { login } from "./actions";
import { connect } from "react-redux";

function LoginForm(props) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.login(formData.email, formData.password);
  };
  return (
    <form
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      <input
        placeholder="Email Address"
        name="email"
        value={formData.email}
        onChange={e => handleChange(e)}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={e => handleChange(e)}
      />
      <input type="submit" value="Login" />
    </form>
  );
}

const actionCreators = {
  login: login
};

export default connect(null, actionCreators)(LoginForm);

import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const [authen, setAuthen] = useState(false);
  const fakeAuth = () => {
    setAuthen(true);
  };
  const { from } = props.location.state || { from: { pathname: "/" } };
  if (authen) {
    return <Redirect to={from} />;
  }
  return (
    <div>
      <h5>You need to log in</h5>
      <button onClick={fakeAuth}>log in</button>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Login = ({ isAuth, location }) => {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  let isAuth = setRedirectToReferrer;

  const { from } = location.state || { from: { pathname: "/" } };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={isAuth}>Log in</button>
    </div>
  );
};

export default Login;

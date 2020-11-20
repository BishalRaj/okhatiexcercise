import { Container } from "@material-ui/core";
import React, { useState } from "react";
import LoginForm from "../pages/loginForm";
import RegisterForm from "../pages/registerForm";

export default function AuthPage(props) {
  const [isLoginPage, setLoginPageVisible] = useState(true);

  function handleChange(value) {
    setLoginPageVisible(value);
  }

  function changeView(value) {
    props.toggle(value);
  }

  return (
    <Container maxWidth="sm">
      {isLoginPage ? (
        <LoginForm clickMe={handleChange} changeMe={changeView} />
      ) : (
        <RegisterForm clickMe={handleChange} />
      )}
    </Container>
  );
}

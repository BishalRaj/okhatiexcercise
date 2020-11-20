import { Container } from "@material-ui/core";
import React from "react";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
class App extends React.Component {
  render() {
    return (
      <Container maxWidth="sm">
        <p>Login</p>
        <LoginForm />
        <p>Register</p>
        <RegisterForm />
      </Container>
    );
  }
}
export default App;

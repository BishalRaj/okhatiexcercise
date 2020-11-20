import { Container } from "@material-ui/core";
import React, { useState } from "react";
import AuthPage from "./components/Auth";
import Authorized from "./pages/authorizedPage";

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  function loginToggle(value) {
    localStorage.setItem("isLoggedIn", false);
    setLoggedIn(value);
  }

  return (
    <Container maxWidth="sm">
      {isLoggedIn === true ? (
        <Authorized toggle={loginToggle} />
      ) : (
        <AuthPage toggle={loginToggle} />
      )}
    </Container>
  );
}

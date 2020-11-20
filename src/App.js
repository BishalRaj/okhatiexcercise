import { Container } from "@material-ui/core";
import React, { useState } from "react";
import AuthPage from "./components/Auth";
import Authorized from "./pages/authorizedPage";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  function loginToggle(value) {
    localStorage.setItem("isLoggedIn", value);
    setLoggedIn(value);
  }

  return (
    <Container
      maxWidth="sm"
      style={{ height: "100vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      {isLoggedIn === true ? (
        <Authorized toggle={loginToggle} />
      ) : (
        <AuthPage toggle={loginToggle} />
      )}
    </Container>
  );
}

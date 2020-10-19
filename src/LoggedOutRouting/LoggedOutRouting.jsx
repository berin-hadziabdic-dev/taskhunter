import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { RegistrationLoginForm } from "./RegistrationLoginForm/RegistrationLoginForm";
import { LandingPage } from "./LandingPage/LandingPage";
function LoggedOutRouting(props) {
  return (
    <>
      <div style={{ height: "80px" }}></div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/register">
            <RegistrationLoginForm type="register" />
          </Route>
          <Route exact path="/login">
            <RegistrationLoginForm type="login" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export { LoggedOutRouting };

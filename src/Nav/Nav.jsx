import React from "react";
import { NavLinkList } from "./NavLinkList";
import "./Nav.css";

//This function returns the nav brand
function NavBrand(props) {
  return (
    <a
      className="navbar-brand custom-brand d-flex flex-row align-items-center"
      href="/"
    >
      <span className="text-primary">🆃 </span>
      <span className="text-warning">🅷 </span>
    </a>
  );
}
//This function contains the nav wrapper
function NavWrapper(props) {
  return (
    <nav className="navbar navbar-expand-md fixed-top nav-wrapper border">
      {props.children}
    </nav>
  );
}

//This function returns the login register button pair
function ButtonPair(props) {
  let { leftButton, rightButton } = props;

  return (
    <div className="ml-auto d-flex flex-row align-items-center">
      <a className="btn btn-outline-info" href={leftButton.href}>
        {leftButton.text}
      </a>
      <a className="ml-2 btn btn-warning text-white" href={rightButton.href}>
        {rightButton.text}
      </a>
    </div>
  );
}

//Configures login/register buttons when the user is not authenticated and logged in.
const LOGIN_BUTTON = { text: "Log In", href: "/login" };
const REGISTER_BUTTON = { text: "Register", href: "/register" };

function LoggedOutNav(props) {
  return (
    <NavWrapper>
      <NavBrand />
      <NavLinkList />

      <ButtonPair leftButton={LOGIN_BUTTON} rightButton={REGISTER_BUTTON} />
    </NavWrapper>
  );
}

//Configures logout/editaccount buttons when the user is authenticated and logged in.
const LOGOUT_BUTTON = { text: "Log Out", href: "/logout" };
const EDITACCT_BUTTON = { text: "Edit Account", href: "/editAccount" };

function LoggedInNav(props) {
  return (
    <NavWrapper>
      <NavBrand />
      <NavLinkList />
      <ButtonPair leftButton={LOGOUT_BUTTON} rightButton={EDITACCT_BUTTON} />
    </NavWrapper>
  );
}
function Nav(props) {
  let { loggedIn } = props;

  let ret = <LoggedOutNav> </LoggedOutNav>;

  if (loggedIn === true) {
    ret = <LoggedInNav> </LoggedInNav>;
  }

  return ret;
}

export { Nav };

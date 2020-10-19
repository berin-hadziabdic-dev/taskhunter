import React from "react";
import SideNavToggle from "../SideNav/SideNavToggle";
function NavBar(props) {
  return (
    <nav class="navbar navbar-custom navbar-expand navbar-light bg-light fixed-top border-bottom">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="d-flex flex-direction-row align-items-center "></div>
      {<SideNavToggle />}

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav ml-auto py-2">
          <li class="nav-item mx-2">
            <a
              class="nav-link btn-warning  text-white"
              role="button"
              href="/login"
            >
              Log-In
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-error" role="button" href="/register">
              Sign-Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

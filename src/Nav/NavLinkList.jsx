import React from "react";
import "./Nav.css";
import homeIcon from "../Images/Icons/house.png";
import editProjectIcon from "../Images/Icons/editProjectIcon.png";

//builds Link item to be used in Link props.
function buildLinkObject(text, href, icon) {
  return { text: text, href: href, icon: icon };
}
//Link item for logged in list.
function LinkItem(props) {
  let { text, href, icon } = props;
  return (
    <li className="nav-item d-flex flex-row align-items-center justify-content-center">
      <img src={icon} className="nav-icon" />
      <a className="nav-link text-secondary" href={href}>
        {text}
      </a>
    </li>
  );
}

function NavLinkList(props) {
  let navList = [
    buildLinkObject("Home", "/", homeIcon),
    buildLinkObject("Edit Projects", "editproject", editProjectIcon),
  ];
  return (
    <ul className="navbar-nav">
      {navList.map((navItem) => (
        <LinkItem {...navItem} />
      ))}
    </ul>
  );
}

export { NavLinkList };

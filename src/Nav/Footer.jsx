import React from "react";
import "./Nav.css";

function FooterGroup(props) {
  let { linkText, href, linkIcon } = props;
  return (
    <div className="my-1 mx-1">
      <a href={href}>{linkText}</a>
    </div>
  );
}
function Footer(props) {
  return (
    <div className="row">
      <nav className="footer col-12 d-flex flex-row">
        <FooterGroup linkText="Log In" href="/login" linkIcon={undefined} />
        <FooterGroup
          linkText="Register"
          href="/register"
          linkIcon={undefined}
        />
        <FooterGroup linkText="Home" href="/" linkIcon={undefined} />
      </nav>
    </div>
  );
}

export { Footer };

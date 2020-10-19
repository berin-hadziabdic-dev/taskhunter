import React from "react";
import { FeatureBody } from "../Features/FeatureBody";
import "./Overlay.css";
import diamondNavyIcon from "../../Images/Icons/diamondDarkBlue.png";

function OverlayHeader(props) {
  let { headerText } = props;

  return (
    <div className="row header-row">
      <h2 className="col-10">{headerText}</h2>
      <header className="ml-auto col-2 d-flex flex-row justify-content-center align-items-center">
        <img
          src={diamondNavyIcon}
          alt="diamond-icon"
          className="overlay-header"
        />
      </header>
    </div>
  );
}

function OverlayDisplay(props) {
  let { headerText, footer } = props;
  return (
    <div className="over-display bg-white shadow col-12 col-md-10 col-lg-8 container-fluid">
      <OverlayHeader headerText={headerText} />
      {props.children}
      {footer}
    </div>
  );
}

export { OverlayDisplay };

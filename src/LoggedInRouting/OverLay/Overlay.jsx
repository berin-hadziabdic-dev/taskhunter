import React from "react";
import "./Overlay.css";
import { OverlayDisplay } from "./OverlayDisplay";

function Overlay(props) {
  let { headerText, footer } = props;

  return (
    <section className="overlay container-fluid mx-0 px-0 ">
      <div className="row justify-content-center align-items-center mx-2 my-1 h-100 ">
        <OverlayDisplay headerText={headerText} footer={footer}>
          {" "}
          {props.children}
        </OverlayDisplay>
      </div>
    </section>
  );
}
export { Overlay };

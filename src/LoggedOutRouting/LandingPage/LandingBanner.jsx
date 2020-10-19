import React from "react";
import "./LandingPage.css";
import bannerImage from "../../Images/Graphics/landingBanner.jpg";

function LandingBanner(props) {
  return (
    <div className="row banner-row">
      <img className="col-12 col-md-6 img-responsive" src={bannerImage} />
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start justify-content-center">
        <h2 className="my-4">
          {" "}
          <span style={{ fontSize: " 0.5 em" }}>
            <span className="text-primary">🆃</span>{" "}
            <span className="text-white">🅰🆂</span>
            <span className="text-white">🅺</span>{" "}
            <span className="text-warning">🅷</span>{" "}
            <span className="text-white">🅽🆃🆁</span>
          </span>
        </h2>
        <h1 className="text-secondary font-italic ">
          Staying organized is good.
        </h1>

        <h5 className="text-secondary">
          {" "}
          Staying organized with agile,{" "}
          <span className="text-white">even better</span>
          <span className="text-warning">.</span>
        </h5>
        <div className="my-4">
          <a className="btn btn-outline-warning" href="/register">
            Try It
          </a>
        </div>
      </div>
    </div>
  );
}

export { LandingBanner };

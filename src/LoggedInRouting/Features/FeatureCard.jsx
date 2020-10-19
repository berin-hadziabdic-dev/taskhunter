import React, { useState } from "react";
import diamondIconRed from "../../Images/Icons/diamond.png";
import diamondIconNavy from "../../Images/Icons/diamondDarkBlue.png";
import diamondIconYellow from "../../Images/Icons/diamondOrange.png";

const YELLOW_SELECTOR = 0;
const NAVY_SELECTOR = 1;
const RED_SELECTOR = 2;

//Selects an icon for each Feature card.
function pickIcon() {
  debugger;
  let integer = Math.random() * 1000;
  let iconSelector = Math.floor(integer) % 3;
  let retIcon = null;

  switch (iconSelector) {
    case YELLOW_SELECTOR:
      retIcon = diamondIconYellow;
      break;
    case NAVY_SELECTOR:
      retIcon = diamondIconNavy;
      break;
    case RED_SELECTOR:
      retIcon = diamondIconRed;
      break;
  }

  return retIcon;
}

function FeatureCard(props) {
  let {
    feature_name,
    feature_description,
    story_points,
    setSelectedFeature,
    setRenderFeature,
    setSelectedData,
    data,
  } = props;

  function onButtonClick(e) {
    let { name } = e.target;

    if (name !== "" && name !== undefined && name !== null) {
      setSelectedFeature(name);
      setSelectedData(data);
      setRenderFeature(true);
    }
  }

  return (
    <div className="col-sm-6 col-md-4 border-black">
      <div className="card tile-card my-2 py-1 px-1 shadow-lg">
        <div class="container-fluid">
          <div class="card-title col-12 feature-header d-flex ">
            <div className="row mx-2">
              <img
                className="mr-auto feature-header-icon"
                src={pickIcon()}
                alt="diamond-icon"
              />
              <h2 className="col text-truncate">{feature_name}</h2>
            </div>
          </div>
          <div className="row mx-2">
            <h6 className="col-12 text-truncate">Description</h6>
            <div class="card-text col-12">
              <p className=" text-truncate my-0 ">{feature_description}</p>
            </div>
          </div>
          <div class="row mx-2">
            <h6 className="text-secondary col-12 text-truncate">
              Story Points <span className="text-dark">{story_points}</span>
            </h6>
          </div>
          <div className="row mx-2">
            <input
              type="button"
              className="btn btn-sm btn-outline-secondary form-control mr-auto ml-3 col-4"
              value="Expand"
              name={feature_name}
              onClick={(e) => {
                setSelectedFeature(feature_name);
                setSelectedData(data);
                onButtonClick(e);
              }}
            />
            <a className="ml-3 mt-1 col-4 text-secondary" href="/remove">
              Remove
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FeatureCard };

import React from "react";
import diamondIconRed from "../../Images/Icons/diamond.png";
import diamondIconNavy from "../../Images/Icons/diamondDarkBlue.png";
import diamondIconYellow from "../../Images/Icons/diamondOrange.png";

const YELLOW_SELECTOR = 0;
const NAVY_SELECTOR = 1;
const RED_SELECTOR = 2;

//Selects an icon for each project card.
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
function ProjectCard(props) {
  let {
    projectName,
    projectDescription,
    featureCount,
    teamMemberCount,
  } = props;

  return (
    <div className="col-sm-6 col-md-4 border-black">
      <div className="card tile-card my-2 py-1 px-1 shadow-lg container-fluid">
        <div class="row h-100">
          <div class="card-title col-12 project-header d-flex flex-row">
            <h2>{projectName}</h2>
            <img
              className="ml-auto project-header-icon"
              src={pickIcon()}
              alt="diamond-icon"
            />
          </div>
          <h6 className="col-12">Description</h6>
          <div class="card-text col-12">{projectDescription}</div>
          <div className="col-12 d-flex py-3  mt-auto align-self-center">
            <input
              type="button"
              className="btn btn-sm btn-outline-secondary  mt-auto ml-auto mr-5 col-2"
              value="view"
              onClick={() => {
                alert("left off here!");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProjectCard };

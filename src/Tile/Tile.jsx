import React from "react";

import logo from "../logo.svg";
import icon from "../Images/Icons/icon.png";
import edit from "../Images/Icons/edit.svg";
import del from "../Images/Icons/delete.svg";
import projIcon from "../Images/Icons/projecticon.png";

const ICONsMALLER = { height: "30px", width: "30px" };
const USERAVATAR = { height: "60px", width: "60px" };

function ProjectTile(props) {
  let { projectName, deleteOnClick, editOnClick, expandOnClick } = props;
  const startingLetter = projectName[0];

  return (
    <div
      className=" col-12 col-md-6 col-lg-4 container justify-self-start draggable"
      style={{ width: "400px" }}
    >
      <div className="my-1 mx-1">
        <div
          className="row align-items-center justify-self-center"
          style={{ height: "50px", backgroundColor: "#8dcdeb" }}
        >
          <div className="col-1 px-1 py-1"></div>
          <div className="col-9 ">
            <div className="mx-1 text-white"> {projectName}</div>
          </div>
          <div className="col-2">
            <img src={projIcon} style={ICONsMALLER} />
          </div>
        </div>
        <section
          style={{ minHeight: "34px" }}
          className="row align-items-center bg-white border shadow d-flex"
        >
          <div className="col-12">
            <div className="container-fluid h-100">
              <div className="row py-2">
                <div className="col-3 align-self-center justify-self-center h-100">
                  <h1
                    src={icon}
                    style={USERAVATAR}
                    className="rounded text-center text-secondary"
                    style={{
                      backgroundColor: "#80acff",
                      height: "50px",
                      width: "50px",
                    }}
                  >
                    {startingLetter}
                  </h1>
                </div>
                <p className="col-9 pl-0 py-2 text-secondary d-flex align-items-center justify-content-start">
                  Project description here.
                </p>
              </div>
              <div
                className="row align-items-center text-secondary "
                style={{ height: "38px" }}
              >
                <div className="col-2 mx-0 px-0 justify-self-start d-flex flex-row align-items-end">
                  <a className="px-2" onClick={editOnClick}>
                    {" "}
                    Edit{" "}
                  </a>
                </div>
                <div className="col-2 mx-0 px-0 justify-self-start d-flex flex-row align-items-end">
                  <a className="px-2" onClick={deleteOnClick}>
                    {" "}
                    Delete{" "}
                  </a>
                </div>
                <div className=" ml-auto col-2 mx-0 px-0 justify-self-start d-flex flex-row align-items-end">
                  <input
                    type="button"
                    value={"Expand"}
                    className="btn btn-sm btn-outline-info mb-1"
                    onClick={expandOnClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
function Tile(props) {
  let {
    contents,
    startingLetter,
    editOnClick,
    deleteOnClick,
    expandOnClick,
  } = props;
  return (
    <div
      className=" col-12 col-md-6 col-lg-4 container justify-self-start"
      style={{ width: "400px" }}
    >
      <div className="my-1 mx-1">
        <div
          className="row align-items-center justify-self-center"
          style={{ height: "50px", backgroundColor: "#8dcdeb" }}
        >
          <div className="col-1 px-1 py-1"></div>
          <div className="col-9 ">
            <div className="mx-1 text-white"> Hello, this is a row.</div>
          </div>
          <div className="col-2">
            <img src={logo} />
          </div>
        </div>
        <section
          style={{ minHeight: "34px" }}
          className="row align-items-center bg-white border shadow d-flex"
        >
          <div className="col-12">
            <div className="container-fluid h-100">
              <div className="row py-2">
                <div className="col-3 align-self-center justify-self-center h-100">
                  <h1
                    src={icon}
                    style={USERAVATAR}
                    className="rounded text-center text-secondary"
                    style={{
                      backgroundColor: "#80acff",
                      height: "50px",
                      width: "50px",
                    }}
                  >
                    {startingLetter}
                  </h1>
                </div>
                <p className="col-9 pl-0 py-2 text-secondary">{contents}</p>
              </div>
              <div
                className="row align-items-center text-secondary "
                style={{ height: "38px" }}
              >
                <div className="col-3 mx-0 px-0 justify-self-start d-flex flex-row align-items-end">
                  <img src={edit} style={ICONsMALLER} />
                  <a className="px-2 card-link" onClick={editOnClick}>
                    {" "}
                    Edit{" "}
                  </a>
                </div>
                <div className="col-2 mx-0 px-0 justify-self-start d-flex flex-row align-items-end">
                  <img src={del} style={ICONsMALLER} />
                  <a className="px-2" onClick={deleteOnClick}>
                    {" "}
                    Delete{" "}
                  </a>
                </div>
                <div className=" ml-auto col-2 mx-0 px-0 justify-self-start d-flex flex-row align-items-end">
                  <input
                    type="button"
                    value={"Expand"}
                    className="btn btn-sm btn-outline-info mb-1"
                    onClick={expandOnClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export { ProjectTile, Tile };

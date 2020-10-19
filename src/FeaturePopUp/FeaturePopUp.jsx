import React from "react";
import "./FeaturePopUp.css";
import criteriaIcon from "../Images/Icons/criteria.png";
import descriptionIcon from "../Images/Icons/description.png";
import xIcon from "../Images/Icons/xIcon.png";

const respColumns = " col-10 col-md-8 col-lg-7";
const ICONSTYLE = { height: "30px", width: "30px" };
const HEADERSTYLE = { height: "30px" };

function SubHeader(props) {
  let { headerText, icon } = props;

  return (
    <section className="col-12  container" style={HEADERSTYLE}>
      <div className="row pop-up-sub-header h-100 py-2">
        <h6 className="col-10 pl-2 text-info pop-up-sub-header h-100">
          {headerText}
        </h6>
        <div className="col-2 pop-up-sub-header h-100">
          <img src={icon} style={ICONSTYLE} />
        </div>
      </div>
    </section>
  );
}

function Description(props) {
  let { description } = props;

  return (
    <>
      <SubHeader headerText="Feature Description" icon={descriptionIcon} />
      <section className="col-12 d-flex align-items-center justify-content-center text-secondary">
        {description}
      </section>
    </>
  );
}

function AcceptanceCriteria(props) {
  let { criteria } = props;

  let retElement = (
    <>
      <tr>
        <td colSpan="2">No acceptance criteria found for this feature.</td>
      </tr>
      <tr>
        <td colSpan="2">No acceptance criteria found for this feature.</td>
      </tr>
      <tr>
        <td colSpan="2">No acceptance criteria found for this feature.</td>
      </tr>
      <tr>
        <td colSpan="2">No acceptance criteria found for this feature.</td>
      </tr>
    </>
  );

  return (
    <>
      <SubHeader headerText="Acceptance Criteria" icon={criteriaIcon} />
      <table className="col-12 table table-striped table-feature-pop-up mx-0 px-0 mt-2">
        <thead>
          <tr>
            <td colSpan="col">Name</td>
            <td colSpan="col">Description</td>
          </tr>
        </thead>
        <tbody>{retElement}</tbody>
      </table>
      <div className="col-1" />
    </>
  );
}

function PopUpHeader(props) {
  let { featureName } = props;
  return (
    <section className="row pop-up-header-style justify-content-center align-items-center">
      <div className="col-10 mx-0 px-0 d-flex flex-row align-items-center pl-3">
        {" "}
        <h4>{featureName}</h4>
      </div>
      <div className="col-2 mx-0 px-0 d-flex flex-row justify-content-center align-items-center">
        <img src={xIcon} style={ICONSTYLE} alt="close" />
      </div>
    </section>
  );
}

function FeatureBody(props) {
  let { description } = props;
  return (
    <section className="row justify-content-center align-items-around bg-white">
      <Description description={description} />
      <AcceptanceCriteria />
    </section>
  );
}

function FeaturePopUp(props) {
  let copyPasta = (
    <div className="row h-100 justify-content-center align-items-center">
      <section className={respColumns + " container mx-0 px-0 feature-pop-up"}>
        <PopUpHeader featureName="feature-name" />
        <FeatureBody description={"This feature does x, y, and z."} />
      </section>
    </div>
  );
  return (
    <section className="pop-up-wrapper container-fluid">
      <div className="row h-100 justify-content-center align-items-center">
        <section className={respColumns + " container-fluid  feature-pop-up"}>
          <PopUpHeader featureName="feature-name" />
          <FeatureBody description={"This feature does x, y, and z."} />
        </section>
      </div>
    </section>
  );
}

export default FeaturePopUp;

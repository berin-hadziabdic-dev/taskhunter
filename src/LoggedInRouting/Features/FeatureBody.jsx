import React from "react";
import { Overlay } from "../OverLay/Overlay";
import "./Feature.css";

function validateCriteria(criteriaObject) {
  return Array.isArray(criteriaObject);
}
function CriteriaTable(props) {
  let { criteria } = props;
  let index = 1;
  return (
    <table className="col-12 h-100 table table-striped">
      <thead>
        <td colSpan="1">#</td>
        <td colSpan="1">Name</td>
        <td colSpan="3">Description</td>
      </thead>
      <tbody>
        {validateCriteria(criteria) ? (
          criteria.map((criteriaElement) => (
            <tr>
              <td colSpan="1">{index++}</td>
              <td colSpan="1">{criteriaElement.name}</td>
              <td colSpan="3">{criteriaElement.description}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colspan="5">
              <span className="text-warning">
                The feature does not have any acceptance criteria.
              </span>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

function FeatureOverlayFooter(props) {
  let { setRenderFeature } = props;
  return (
    <footer className="feature-footer d-flex flex-row justify-items-end px-2 py-1 w-100">
      <input
        type="button"
        className="btn btn-outline-info ml-auto"
        value="Close"
        onClick={() => {
          setRenderFeature(false);
        }}
      />
    </footer>
  );
}

function FeatureRender(props) {
  let { feature_description, story_points, criteria } = props.data;
  return (
    <>
      <section className="row">
        <div className="col-12">
          <h3 className="text-truncate col-12">Description</h3>
          <p className="text-truncate col-12">{feature_description}</p>
          <h3 className="text-truncate col-12">Story Points: {story_points}</h3>
          <CriteriaTable criteria={criteria} />
        </div>
      </section>
    </>
  );
}

function FeatureOverlay(props) {
  let { headerText, data, setRenderFeature } = props;
  let footer = <FeatureOverlayFooter setRenderFeature={setRenderFeature} />;
  return (
    <Overlay headerText={headerText} footer={footer}>
      <FeatureRender data={data} />
    </Overlay>
  );
}

export { FeatureOverlay };

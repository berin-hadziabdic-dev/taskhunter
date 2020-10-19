import React, { useState, useEffect } from "react";
import JSstyles from "../JSstyles";
import add from "../Images/Icons/add.png";
import descriptionIcon from "../Images/Icons/description.png";
import nameIcon from "../Images/Icons/name.png";
import { notNullUndefined, notEmptyString } from "../Validation/Validator";

const HEADERhEIGHT = { height: "80px", backgroundColor: JSstyles.primaryColor };
const HEADERiCON = { height: "60px", width: "60px" };
const FORMiCON = { height: "20px", width: "20px" };
const TABLEsTYLE = { minHeight: "200px", overflow: "scroll" };
const TABLErOW = { minHeight: "50px" };

function buildCriteriaObject(name, description) {
  return { criteria: name, description: description };
}

const description = "description";
const featureName = "name";
const acceptanceCriteriaName = "criteriaName";
const acceptanceCriteriaDescription = "criteriaDescription";
const points = "points";

function CriteriaTable(props) {
  let { rows, deleteCriteria } = props;

  function RowData() {
    let index = 0;
    let retRows = (
      <tr>
        <td className="text-warning" colSpan="3">
          No criteria data found.
        </td>
      </tr>
    );

    if (Array.isArray(rows) && rows.length > 0) {
      retRows = rows.map((row) => (
        <tr id={description}>
          <td colSpan="1">
            {" "}
            <input
              type="text"
              className="form-control"
              disabled="true"
              value={row.criteria}
            />
          </td>
          <td colSpan="1">
            <input
              className="form-control"
              type="text"
              disabled="true"
              value={row.description}
            />
          </td>
          <td className="d-flex flex-row justify-content-center">
            <input
              type="button"
              className="btn btn-outline-primary mx-1"
              value="delete"
              id={description}
              onClick={() => deleteCriteria(row.criteria)}
            />
          </td>
        </tr>
      ));
    }

    return retRows;
  }

  return (
    <table
      className="table table-striped col-12 border-top border-bottom "
      style={TABLEsTYLE}
    >
      <thead>
        <tr>
          <td colSpan="1" className="text-secondary">
            {" "}
            Criteria Namecol-3
          </td>
          <td colSpan="1" className="text-secondary">
            Description
          </td>
          <td colSpan="1"></td>
        </tr>
      </thead>
      <tbody>{RowData()}</tbody>
    </table>
  );
}
function TextInput(props) {
  let { name, placeholder, onChange, label, icon } = props;

  return (
    <div className="form-group">
      <label for={name} className="text-secondary">
        <img src={icon} style={FORMiCON} className="mr-2" />
        <span>{label}</span>
      </label>
      <input
        type="text"
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        name={name}
        className="form-control"
        id={name}
      />
    </div>
  );
}

function CriteriaAddRow(props) {
  let { onChange } = props;

  return (
    <>
      <div className="col-12 col-md-6">
        <TextInput
          name={acceptanceCriteriaName}
          label="Name"
          onChange={onChange}
          icon={nameIcon}
        />
      </div>
      <div className="col-12 col-md-4">
        <TextInput
          name={acceptanceCriteriaDescription}
          label="Description"
          onChange={onChange}
          icon={descriptionIcon}
        />
      </div>
      <div className="col-4 col-md-2">
        <div className="form-group">
          <label for="criteria-btn" className="text-white">
            .
          </label>
          <input
            type="btn"
            className="btn btn-info form-control"
            value="Add Criteria"
          />
        </div>
      </div>
    </>
  );
}
function FeatureForm(props) {
  let [acceptanceCriteria, setCriteria] = useState(() => [
    buildCriteriaObject("Criteria 1", "Criteria 1 description"),
    buildCriteriaObject("Criteria 2", "Criteria 2 description"),
    buildCriteriaObject("Criteria 3", "Criteria 2 description"),
    buildCriteriaObject("Criteria 4", "Criteria 2 description"),
  ]);
  let [description, setDescription] = useState("");
  let [featureName, setFeatureName] = useState("");
  let [points, setStoryPoints] = useState(0);

  function deleteCriteria(criteriaName) {
    let criteriaLengthIterator = 0;
    let criteriaFound = false;
    let criteriaStateCopy;
    debugger;
    while (
      criteriaLengthIterator < acceptanceCriteria.length &&
      !criteriaFound
    ) {
      if (
        acceptanceCriteria[criteriaLengthIterator].criteria === criteriaName
      ) {
        criteriaStateCopy = acceptanceCriteria.splice(
          criteriaLengthIterator,
          1
        );

        setCriteria(acceptanceCriteria);
        criteriaFound = true;
      }
      criteriaLengthIterator++;
    }
  }

  function onChange(e) {
    let { name, value } = e.target;
    const whitespaceReg = /^\s*$/;

    switch (name) {
      case description:
        if (notNullUndefined(value)) setDescription(value);
        break;
      case featureName:
        if (notNullUndefined(value) && notEmptyString(value))
          setFeatureName(value);
        break;
    }
  }

  return (
    <div className="container border-secondary shadow">
      {" "}
      <section className="row" style={HEADERhEIGHT}>
        <div className="col-11 d-flex flex-row align-items-center justify-content-between">
          <h1 className="text-white"> Add a Feature</h1>
        </div>
        <div className="col-1 d-flex flex-direction-row justify-content-center align-items-center">
          <img src={add} style={HEADERiCON} />
        </div>
      </section>
      <section className="row">
        <div className="col-12 col-md-4">
          <TextInput
            name={featureName}
            label="Feature Name"
            onChange={onChange}
            icon={nameIcon}
          />
        </div>
        <div className="col-9 col-md-4">
          <TextInput
            name={description}
            label="Feature Description"
            onChange={onChange}
            icon={descriptionIcon}
          />
        </div>
        <div className="col-3 ml-md-auto col-md-2">
          <label for={points} className="text-secondary">
            Story Points
          </label>
          <input
            className="form-control"
            name={points}
            id={points}
            type="number"
            min="0"
          />
        </div>
        <div className="col-12">
          <h4 className="text-info">Acceptance Criteria</h4>
        </div>
        <CriteriaAddRow />
        <CriteriaTable
          rows={acceptanceCriteria}
          deleteCriteria={deleteCriteria}
        />
        <div className="col-3">
          <div className="form-group">
            <input
              type="button"
              className="btn btn-outline-info"
              value="Create Feature"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeatureForm;

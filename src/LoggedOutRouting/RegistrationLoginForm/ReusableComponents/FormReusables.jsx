import React from "react";
import "./ReusableStyles.css";
import $ from "jquery";

function ToolTip(props) {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  let { text, icon } = props;

  return (
    <img
      alt="img"
      src={icon}
      className=""
      data-toggle="tooltip"
      data-placement="top"
      title={text}
      style={{ height: "35px", width: "35px" }}
    />
  );
}
function buildTextGroup(isPassword, { fieldName, spanText, onChange, value }) {
  return (
    <div className="d-flex flex-row align-items-center my-1">
      <div className=" form-group col-12 my-0">
        <label className="text-primary text-custom" for="username">
          {fieldName}
        </label>
        <input
          type={isPassword ? "password" : "text"}
          onChange={(e) => onChange(e)}
          placeholder={fieldName}
          name={fieldName}
          id={fieldName}
          className="form-control form-control-sm"
          value={value}
        />

        {spanText !== undefined ? (
          <span className="form-text text-muted">{spanText}</span>
        ) : null}
      </div>
    </div>
  );
}
function buildButton({ value, onClick, imgFile }) {
  return (
    <div className="form-group my-1 d-flex flex-row">
      <input
        type="button"
        value={value}
        className="form-control btn btn-primary btn-custom ml-3 mr-auto col-6"
        onClick={() => onClick()}
      />
    </div>
  );
}
export { buildTextGroup, buildButton, ToolTip };

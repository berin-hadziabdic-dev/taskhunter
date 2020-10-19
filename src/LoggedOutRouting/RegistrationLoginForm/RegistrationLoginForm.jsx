import React, { useState } from "react";
import "./RegistrationForm.css";
import { LogInTemplate } from "./LogInTemplate";
import { RegistrationTemplate } from "./RegistrationTemplate";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
const { loginRegistrationForm } = GlobalStyles;
//This function produces the form wrapper that wraps the login form and register form.
function FormWrapper(formContents) {
  return (
    <div className="container-fluid  login-reg-container">
      <div className="row h-100 w-100 mx-0 px-0 my-auto justify-content-center align-items-center ">
        <div className="registration-form-border-top w-100"></div>
        {formContents}
      </div>
    </div>
  );
}

function RegistrationLoginForm(props) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [email, setEmail] = useState("");

  const ABOUT = "";
  const whitespaceReg = /\s/g;

  let { type } = props;
  let retForm = null;

  function onChange(e) {
    let { name, value } = e.target;
    let noWhitespace = !whitespaceReg.test(value);
    if (noWhitespace) {
      switch (name) {
        case "username":
          setUsername(value);
          break;
        case "password":
          setPassword(value);
          break;
        case "confirm password":
          setConfirmPassword(value);
          break;
        case "email":
          setEmail(value);
          break;
      }
    }
  }

  if (type === "register")
    retForm = FormWrapper(
      RegistrationTemplate({
        onChange: onChange,
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        email: email,
      })
    );
  else
    retForm = FormWrapper(
      LogInTemplate({
        onChange: onChange,
        username: username,
        password: password,
      })
    );

  return retForm;
}

export { RegistrationLoginForm };

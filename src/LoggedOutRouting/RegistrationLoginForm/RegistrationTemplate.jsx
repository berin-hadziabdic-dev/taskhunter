import React, { useState } from "react";
import "./RegistrationForm.css";
import {
  buildTextGroup,
  buildButton,
} from "./ReusableComponents/FormReusables";
import { createUser } from "../../AxiosHTTP/AxiosHttpUser";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
const { loginRegistrationForm } = GlobalStyles;

//This function prints out the task hunter log with fancy font!
function taskHuntrFullLogo(props) {
  let element = (
    <span style={{ fontSize: " 0.5 em" }}>
      <span className="text-primary">🆃</span>🅰🆂
      <span className="text-secondary">🅺</span>{" "}
      <span className="text-warning">🅷</span>🅽🆃🆁
    </span>
  );

  return element;
}

//This function produces the template for the registration form.
//This class needs to be embedded inside a host which will provide state mgt.
function RegistrationTemplate(props) {
  let { onChange, username, password, confirmPassword, email } = props;
  let [invalidInput, setInvalid] = useState(false); //invalid is used to toggle the tooltip of the registration form.

  return (
    <div className={loginRegistrationForm + " registration-template"}>
      <div className="d-flex flex-column my-auto">
        <h2 className="col-12">{taskHuntrFullLogo()}</h2>
        <h2 className="col-6 text-primary" id="registerTooltip">
          Register
        </h2>
        <p className="col-12 text-secondary">
          Sign up for an account with TaskHntr to use all of our services.
        </p>
      </div>

      {buildTextGroup(false, {
        fieldName: "username",
        spanText: undefined,
        value: username,
        onChange: onChange,
      })}
      {buildTextGroup(true, {
        fieldName: "password",
        spanText: undefined,
        value: password,
        onChange: onChange,
      })}
      {buildTextGroup(true, {
        fieldName: "confirm password",
        spanText: undefined,
        value: confirmPassword,
        onChange: onChange,
      })}
      {buildTextGroup(false, {
        fieldName: "email",
        spanText: undefined,
        onChange: onChange,
        value: email,
      })}
      {buildButton({
        value: "Register",
        onClick: () => {
          createUser(username, password, email)
            .then((response) => {
              setInvalid(false);
            })
            .catch((err) => setInvalid(true));
        },
      })}
      {<a href="/login"> Already have an account? Sign in</a>}
    </div>
  );
}

export { RegistrationTemplate };

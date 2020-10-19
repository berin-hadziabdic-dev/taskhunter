import { logIn } from "../../AxiosHTTP/AxiosHttpLog";
import React, { useState } from "react";
import "./RegistrationForm.css";
import check from "../../Images/Icons/check.png";
import {
  buildTextGroup,
  buildButton,
  ToolTip,
} from "./ReusableComponents/FormReusables";
import { TaskHuntrFullLogo } from "./ThLogo";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
const { loginRegistrationForm } = GlobalStyles;

//This function produces the template for the login form.
//It needs to be embedded inside a class which will provide statemanagment.
function LogInTemplate(props) {
  let { onChange, username, password } = props;
  let [success, setSuccess] = useState(false);

  return (
    <form className={loginRegistrationForm}>
      <div className="d-flex flex-column my-auto">
        <h2 className="col-12">
          <TaskHuntrFullLogo />
        </h2>
        <div className="col-12 px-2 d-flex flex-row">
          <h2 className="text-primary pl-2 mr-auto" id="registerTooltip">
            LogIn
          </h2>
          <div className="ml-auto"></div>

          <ToolTip icon={check} text={"Username and Password Ok!"} />
        </div>

        <p className="col-12 text-secondary">
          Enter your username and password to login.
        </p>
      </div>
      {buildTextGroup(false, {
        fieldName: "username",
        spanText: "Enter your username.",
        onChange: onChange,
        value: username,
      })}
      {buildTextGroup(true, {
        fieldName: "password",
        spanText: "Enter your password.",
        onChange: onChange,
        value: password,
      })}

      {buildButton({
        value: "Log In",
        onClick: () => {
          logIn(username, password)
            .then(() => setSuccess(true))
            .catch(() => {
              setSuccess(false);
            });
        },
      })}
      {<a href="/register"> Don't have an account? Sign up</a>}
    </form>
  );
}

export { LogInTemplate };

import { CONFIG } from "./AxiosConfig";
import axios from "axios";

function logIn(username, password) {
  let userPayload = { username: username, password: password };

  return axios.post("/user/login", userPayload, CONFIG);
}

function logOut(username, password) {
  let logOutUser = { username: username, password: password };
  return axios.post("/user/logout", logOutUser, CONFIG);
}

export { logIn, logOut };

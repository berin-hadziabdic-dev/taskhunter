import { POST_JSON_CONFIG } from "./AxiosConfig";
import axios from "axios";

function createUser(username, password, email) {
  let newUser = {
    username: username,
    password: password,
    email: email,
    about: "",
  };
  return axios.post("/user/create", newUser, POST_JSON_CONFIG);
}

function readUser(username, password) {
  let loadUser = { username: username, password: password };
  return axios.post("/user/read", loadUser, POST_JSON_CONFIG);
}
function updateUser(username, password, email, about) {
  let updateUser = {
    username: username,
    password: password,
    email: email,
    about: about,
  };

  return axios.post("/user/update", updateUser, POST_JSON_CONFIG);
}
function deleteUser(username, password) {
  let deletedUser = { username: username, password: password };
  return axios.post("/user/delete", deleteUser, POST_JSON_CONFIG);
}

export { createUser, readUser, updateUser, deleteUser };

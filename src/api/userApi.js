import { handleResponse, handleError } from "./apiUtils";
import * as config from "../config/config";

const baseUrlHateOas = config.baseUrlHateOas;
const baseUrl = config.baseUrl;

export function getUsers() {
  return fetch(baseUrlHateOas)
    .then(handleResponse)
    .catch(handleError);
}

export function getUserById(user_id) {
  return fetch(baseUrlHateOas + user_id)
    .then(handleResponse)
    .catch(handleError);
}

export function saveUser(user) {
  return fetch(baseUrlHateOas + (user.id || ""), {
    method: user.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function loginUser(email, user_password) {
  if (email === "" || user_password === "") return;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, user_password })
  };

  return fetch(baseUrl + "login", requestOptions)
    .then(handleResponse)
    .then(user => {
      user.authdata = window.btoa(email + ":" + user_password);
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    })
    .catch(handleError);
}

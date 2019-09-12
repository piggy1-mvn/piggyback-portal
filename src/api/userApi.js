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
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(user => {
        return user;
      });
    })
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
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, user_password })
  };

  debugger;
  return (
    fetch(baseUrl + "login", requestOptions)
      /* 
      THIS IS A BUG
      NEED TO UN-COMMENT ONCE USER API RETURNS USER_ROLE IN LOGIN RESPONSE 
      .then(handleResponse)
      */
      .then(user => {
        if (user) {
          user.authdata = window.btoa(email + ":" + user_password);
          localStorage.setItem("user", JSON.stringify(user));
        }
        return user;
      })
  );
}

export function logout() {
  localStorage.removeItem("user");
}

import { handleResponse, handleError } from "./apiUtils";
import * as config from "../config/config";
import jwt from "jwt-decode";
import { logout } from "../helper/LoginHelper";

const baseUrl = config.baseUrlUserApi;

export function getUsers() {
  if (!localStorage.getItem("token")) return;
  refreshToken();
  const token = localStorage.getItem("token");
  return fetch(baseUrl, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + token.slice(1, token.length - 1)
    }
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getUserById(user_id) {
  if (!localStorage.getItem("token")) return;
  refreshToken();
  const token = localStorage.getItem("token");
  return fetch(baseUrl + user_id, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": "Bearer " + token.slice(1, token.length - 1)
    }
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveUser(user) {
  if (!localStorage.getItem("token")) return;
  refreshToken();
  const token = localStorage.getItem("token");
  if (!user.id) {
    return fetch(baseUrl + "create", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(handleResponse)
      .catch(handleError);
  } else {
    return fetch(baseUrl + user.id, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "Authorization": "Bearer " + token.slice(1, token.length - 1)
      },
      body: JSON.stringify(user)
    })
      .then(handleResponse)
      .catch(handleError);
  }
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
    .then(token => {
      const decoded = jwt(token.jwttoken);
      localStorage.setItem("user", JSON.stringify(decoded.sub));
      localStorage.setItem("password", JSON.stringify(user_password));
      localStorage.setItem("userRole", JSON.stringify(decoded.user_role));
      localStorage.setItem("token", JSON.stringify(token.jwttoken));
      localStorage.setItem("expires", JSON.stringify(decoded.exp));
      return token;
    })
    .catch(handleError);
}

function refreshToken() {
  if (!localStorage.getItem("expires") || !localStorage.getItem("user") || !localStorage.getItem("password")) return;
  const expires = JSON.parse(localStorage.getItem("expires"));
  const seconds = new Date().getTime() / 1000;
  if (seconds - expires < config.extendUserSessionMinutes * 60) {
    loginUser(JSON.parse(localStorage.getItem("user")), JSON.parse(localStorage.getItem("password")));
  }
  else {
    logout();
    window.location.replace("/");
  }
}

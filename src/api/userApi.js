import { handleResponse, handleError } from "./apiUtils";
import { baseUrlUserApi, partnerUserRoles } from "../config/config";
import jwt from "jwt-decode";
import { refreshToken } from "../helper/LoginHelper";

const baseUrl = baseUrlUserApi;

export function getUsers() {
  if (!localStorage.getItem("token")) return;
  refreshToken();
    const token = JSON.parse(localStorage.getItem("token"));
  return fetch(baseUrl, {
    method: "GET",
    headers: {
      "content-type": "application/json",
            "Authorization": "Bearer " + token
    }
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getUserById(user_id) {
  if (!localStorage.getItem("token")) return;
  refreshToken();
    const token = JSON.parse(localStorage.getItem("token"));
  return fetch(baseUrl + user_id, {
    method: "GET",
    headers: {
      "content-type": "application/json",
            "Authorization": "Bearer " + token
    }
  })
    .then(handleResponse)
    .catch(handleError);
}

export default function getUserRoles() {
  if (!localStorage.getItem("token")) return;
    const token = JSON.parse(localStorage.getItem("token"));
  return fetch(baseUrl + "roles", {
    method: "GET",
    headers: {
      "content-type": "application/json",
            "Authorization": "Bearer " + token
    }
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveUser(user) {
  if (!localStorage.getItem("token")) return;
  refreshToken();
  const token = JSON.parse(localStorage.getItem("token"));
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
                "Authorization": "Bearer " + token
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
      localStorage.setItem("partnerId", JSON.stringify(decoded.user_partner_id));
      return token;
    })
    .catch(handleError);
}

export function getUsersInRoles() {
  if (!localStorage.getItem("token")) return;
  refreshToken();
    const token = JSON.parse(localStorage.getItem("token"));
  return fetch(baseUrl + "role", {
    method: "POST",
    headers: {
      "content-type": "application/json",
            "Authorization": "Bearer " + token
    },
    body: JSON.stringify({ user_roles: partnerUserRoles })
  })
    .then(handleResponse)
    .catch(handleError);
}

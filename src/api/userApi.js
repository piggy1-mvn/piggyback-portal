import { handleResponse, handleError } from "./apiUtils";
//TODO: Update to pull from config
//const baseUrl = "process.env.REACT_APP_API_URL" + "/authors/";
const baseUrlHateOas = "http://localhost:8083/users/";
const baseUrl = "http://localhost:8083/user/";

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

export function loginUser(user) {
  return fetch(baseUrl + "login/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(_user => {
        return _user;
      });
    })
    .catch(handleError);
}

/*
export function deleteUser(userId) {
  return fetch(baseUrl + userId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}*/

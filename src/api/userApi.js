import { handleResponse, handleError } from "./apiUtils";
//TODO: Update to pull from config
//const baseUrl = "process.env.REACT_APP_API_URL" + "/authors/";
const baseUrl = "http://localhost:8083/users/";

export function getUsers() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getUserById(user_id) {
  return fetch(baseUrl + user_id)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(user => {
        return user;
      });
    })
    .catch(handleError);
}

export function saveUser(user) {
  return fetch(baseUrl + (user.id || ""), {
    method: user.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function loginUser(user) {
  return fetch(baseUrl + user.id)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(_user => {
        if (
          !(
            user.user_email === _user.user_email &&
            user.user_password === _user.user_password
          )
        )
          throw new Error("Invalid credentials");
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

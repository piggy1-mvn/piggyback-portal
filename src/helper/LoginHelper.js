import { loginUser } from "../api/userApi";
import * as config from "../config/config";

export function logout() {
  localStorage.clear();
}

export function refreshToken() {
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

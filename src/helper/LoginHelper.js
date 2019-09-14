export function isAuthenticated() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return true;
  } else return false;
}

export function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("userRole");
  localStorage.removeItem("token");
  localStorage.removeItem("expires")
}

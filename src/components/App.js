import React from "react";
import { PrivateRoute } from "./common/PrivateRoute";
import Login from "./login/LoginPage";
import About from "./about/AboutPage";
import Users from "./users/UsersPage";
import { Route, Switch, Redirect } from "react-router-dom";
import FileNotFound from "./NotFoundPage";
import ManageUsers from "./users/ManageUsersPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as config from "../config/config";
import HomePage from "./home/HomePage";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={config.toastDuration} hideProgressBar />
      <div className="body">
        <Switch>
          <Route path="/" exact component={Login} />
          <Redirect path="/login" to="/" />
          <PrivateRoute path="/home" component={HomePage} />
          <PrivateRoute path="/users" component={Users} />
          <PrivateRoute path="/user/:user_id" component={ManageUsers} />
          <PrivateRoute path="/user" component={ManageUsers} />
          <PrivateRoute path="/about" component={About} />
          <Route component={FileNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

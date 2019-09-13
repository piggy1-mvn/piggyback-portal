import React from "react";
import Header from "./common/Header";
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

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={config.toastDuration} hideProgressBar />
      <Header />
      <div className="body">
        <Switch>
          <Route path="/" exact component={Login} />
          <Redirect path="/home" to="/" />
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

import React from "react";
import Header from "./common/Header";
import Login from "./LoginPage";
import About from "./AboutPage";
import Users from "./UsersPage";
import { Route, Switch, Redirect } from "react-router-dom";
import FileNotFound from "./NotFoundPage";
import ManageUsers from "./ManageUsers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={Login} />
        <Redirect path="/home" to="/" />
        <Route path="/users" component={Users} />
        <Route path="/user/:user_id" component={ManageUsers} />
        <Route path="/user" component={ManageUsers} />
        <Route path="/about" component={About} />
        <Route component={FileNotFound} />
      </Switch>
    </div>
  );
}

export default App;

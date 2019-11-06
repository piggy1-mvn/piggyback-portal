import React from "react";
import { PrivateRoute } from "./common/PrivateRoute";
import LoginPage from "./login/LoginPage";
import PartnerRouter from "./partners/PartnerRouter";
import UsersPage from "./users/UsersPage";
import { Route, Switch, Redirect } from "react-router-dom";
import FileNotFoundPage from "./NotFoundPage";
import ManageUsersPage from "./users/ManageUsersPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastDuration } from "../config/config";
import HomePage from "./home/HomePage";
import CreateUsersPage from "./users/CreateUsersPage";
import CreatePartnersPage from "./partners/CreatePartnersPage";
import ManagePartnersPage from "./partners/ManagePartnersPage";
import OrderRouter from "./orders/OrderRouter";
import ManageOrdersPage from "./orders/ManageOrdersPage";
import InvoiceRouter from "./invoice/InvoiceRouter";
import InvoicePaymentPage from "./invoice/InvoicePaymentPage";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={toastDuration} hideProgressBar />
      <div className="body">
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Redirect path="/login" to="/" />
          <PrivateRoute path="/home" component={HomePage} />
          <PrivateRoute path="/users" component={UsersPage} />
          <PrivateRoute path="/user/add" exact component={CreateUsersPage} />
          <PrivateRoute path="/user/:user_id" component={ManageUsersPage} />
          <PrivateRoute path="/partners" component={PartnerRouter} />
          <PrivateRoute path="/partner/add" exact component={CreatePartnersPage} />
          <PrivateRoute path="/partner/:partner_id" component={ManagePartnersPage} />
          <PrivateRoute path="/orders" component={OrderRouter} />
          <PrivateRoute path="/order/add" exact component={ManageOrdersPage} />
          <PrivateRoute path="/order/:order_id" component={ManageOrdersPage} />
          <PrivateRoute path="/invoice" component={InvoiceRouter} />
          <PrivateRoute path="/payment/:invoice_id" component={InvoicePaymentPage} />
          <Route component={FileNotFoundPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

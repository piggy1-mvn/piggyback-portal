import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import { getOrderByPartnerId } from "../../api/orderApi";
import { Link } from "react-router-dom";
import OrderList from "./OrderList";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const partnerId = JSON.parse(localStorage.getItem("partnerId"));

  useEffect(() => {
    getOrderByPartnerId(partnerId).then(_orders => setOrders(_orders));
  }, []);

  return (
    <div className="container-fluid">
      <Header />
      <div className="body">
        <h2>Orders</h2>
        <Link className="btn btn-primary" style={{ margin: "5px" }} to="/order/add">
          Add Order
         </Link>
        <OrderList orders={orders.data} />
      </div>
    </div>
  );
}

export default OrdersPage;

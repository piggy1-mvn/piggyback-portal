import React from "react";
import { Link } from "react-router-dom";

function OrderList(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Status</th>
                    <th>Partner</th>
                    <th>Updated On</th>
                </tr>
            </thead>
            <tbody>
                {props.orders && props.orders.length > 0 &&
                    props.orders.map(order => {
                        return (
                            <tr key={order.orderId}>
                                <td>
                                    <Link to={"/order/" + order.orderId}>{order.orderId}</Link>
                                </td>
                                <td>{order.orderStatus}</td>
                                <td>
                                    <Link to={"/partner/" + order.partnerId}>{order.partnerId}</Link>
                                </td>
                                <td>{order.lastModifiedDate}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
}

export default OrderList;

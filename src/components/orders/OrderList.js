import React from "react";
import { Link } from "react-router-dom";

function OrderList(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Partner</th>
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
                                <td>{order.partnerId}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
}

export default OrderList;

import React from "react";
import { Link } from "react-router-dom";

function InvoiceList(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Payment</th>
                </tr>
            </thead>
            <tbody>
                {props.invoice && props.invoice.length > 0 &&
                    props.invoice.map(_invoice => {
                        return (
                            <tr key={_invoice.invoice_id}>
                                <td>{_invoice.invoice_id}</td>
                                <td>${_invoice.amount}</td>
                                <td>{_invoice.status}</td>
                                <td> {_invoice.status === "PENDING" ?
                                    <Link to={"/payment/" + _invoice.invoice_id}>Pay</Link>
                                    : <div></div>
                                }
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
}

export default InvoiceList;

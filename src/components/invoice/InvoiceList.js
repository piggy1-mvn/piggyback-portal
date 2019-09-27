import React from "react";
//import { Link } from "react-router-dom";

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
                                <td>
                                    <input type="button" value="Pay" className="btn btn-primary" />
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
}

export default InvoiceList;

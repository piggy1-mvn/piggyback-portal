import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import { getAllInvoice } from "../../api/invoiceApi";
import InvoiceList from "./InvoiceList";

function InvoicesPage() {
    const [invoice, setInvoice] = useState({
        amount: "",
        due_Date: "",
        invoice_id: 0,
        lineItem: "",
        partnerId: "",
        status: ""
    });

    useEffect(() => {
        getAllInvoice().then(_invoice => setInvoice(_invoice));
    }, []);

    return (
        <div className="container-fluid">
            <Header />
            <div className="body">
                <h2>Invoices</h2>
                <InvoiceList invoice={invoice} />
            </div>
        </div>
    );
}

export default InvoicesPage;

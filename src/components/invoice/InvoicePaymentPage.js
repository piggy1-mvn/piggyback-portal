import React, { useState, useEffect } from "react";
import InvoicePaymentForm from "./InvoicePaymentForm";
import Header from "../common/Header";
import { getInvoiceById, saveInvoice } from "../../api/invoiceApi";
import { toast } from "react-toastify";
import { paymentProcessor } from "../../helper/PaymentHelper";

const InvoicePaymentPage = props => {
    const [errors, setErrors] = useState({});

    const [invoice, setInvoice] = useState({
        amount: "",
        due_Date: "",
        invoice_id: "",
        lineItem: "",
        partnerId: "",
        status: ""
    });

    const [invoicePayment, setInvoicePayment] = useState({
        cardNumber: "",
        expirtyDate: "",
        cardCode: ""
    });

    useEffect(() => {
        const invoice_id = props.match.params.invoice_id;
        if (invoice_id) {
            getInvoiceById(invoice_id)
                .then(_invoice => setInvoice(_invoice));
        }
    }, [props.match.params.invoice_id]);

    function handleChangePayment({ target }) {
        setInvoicePayment({
            ...invoicePayment,
            [target.name]: target.value
        });
    }

    function formIsValid() {
        const _errors = {};

        if (!invoicePayment.cardNumber) _errors.cardNumber = "Card Number is required";
        if (!invoicePayment.expiryDate) _errors.expiryDate = "Expiry Date is required";
        if (!invoicePayment.cardCode) _errors.cardCode = "Card Code is required";

        setErrors(_errors);

        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;

        paymentProcessor(invoicePayment.cardNumber, invoicePayment.expiryDate, invoicePayment.cardCode, invoice.amount);

        let _invoice = invoice;
        _invoice.status = "Paid";
        setInvoice({ _invoice });

        saveInvoice(invoice).then(() => {
            props.history.push("/invoice");
            toast.success("Payment successful");
        });
    }

    return (
        <div className="container-fluid">
            <Header />
            <div className="body">
                <h2>Payment</h2>
                <InvoicePaymentForm
                    errors={errors}
                    invoicePayment={invoicePayment}
                    onChange={handleChangePayment}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
};

export default InvoicePaymentPage;

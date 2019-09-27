import React from "react";
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";

function InvoicePaymentForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="cardNumber"
                type="text"
                label="Card Number"
                onChange={props.onChange}
                name="cardNumber"
                value={props.invoicePayment.cardNumber}
                error={props.errors.cardNumber}
            />
            <TextInput
                id="expiryDate"
                type="text"
                label="Expiry Date"
                onChange={props.onChange}
                name="expiryDate"
                value={props.invoicePayment.expiryDate}
                error={props.errors.expiryDate}
            />
            <TextInput
                id="cardCode"
                type="password"
                label="Card Code"
                onChange={props.onChange}
                name="cardCode"
                value={props.invoicePayment.cardCode}
                error={props.errors.cardCode}
            />

            <input type="submit" value="Pay" className="btn btn-primary" />
        </form>
    );
}

InvoicePaymentForm.propTypes = {
    invoicePayment: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

export default InvoicePaymentForm;

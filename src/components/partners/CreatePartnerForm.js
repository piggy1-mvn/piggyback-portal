import React from "react";
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";

function CreatePartnerForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="partnerName"
                type="text"
                label="Name"
                onChange={props.onChange}
                name="partnerName"
                value={props.partner.partnerName}
                error={props.errors.partnerName}
            />
            <TextInput
                id="partnerDescription"
                type="text"
                label="Description"
                onChange={props.onChange}
                name="partnerDescription"
                value={props.partner.partnerDescription}
                error={props.errors.partnerDescription}
            />
            <TextInput
                id="partnerWebHookAddress"
                type="text"
                label="Webhook Address"
                onChange={props.onChange}
                name="partnerWebHookAddress"
                value={props.partner.partnerWebHookAddress}
                error={props.errors.partnerWebHookAddress}
            />
            <TextInput
                id="partnerOfficeAddress"
                type="text"
                label="Office Address"
                onChange={props.onChange}
                name="partnerOfficeAddress"
                value={props.partner.partnerOfficeAddress}
                error={props.errors.partnerOfficeAddress}
            />
            <TextInput
                id="partnerMobile"
                type="text"
                label="Mobile Number"
                onChange={props.onChange}
                name="partnerMobile"
                value={props.partner.partnerMobile}
                error={props.errors.partnerMobile}
            />

            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

CreatePartnerForm.propTypes = {
    partner: PropTypes.object.isRequired,
    partnerUsers: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

export default CreatePartnerForm;

import React, { useState } from "react";
import CreatePartnerForm from "./CreatePartnerForm";
import Header from "../common/Header";
import { savePartner } from "../../api/partnerApi";
import { toast } from "react-toastify";

const CreatePartnersPage = props => {
    const [errors, setErrors] = useState({});

    const [partner, setPartner] = useState({
        partnerName: "",
        partnerDescription: "",
        partnerWebHookAddress: "",
        partnerOfficeAddress: "",
        partnerMobile: "",
        userIds: []
    });

    function handleChange({ target }) {
        setPartner({
            ...partner,
            [target.name]: target.value
        });
    }

    function formIsValid() {
        const _errors = {};

        if (!partner.partnerName) _errors.partnerName = "Name is required";
        if (!partner.partnerDescription) _errors.partnerDescription = "Description is required";
        if (!partner.partnerWebHookAddress) _errors.partnerWebHookAddress = "Webhook address is required";
        if (!partner.partnerOfficeAddress) _errors.partnerOfficeAddress = "Office address is required.";
        if (!partner.partnerMobile) _errors.partnerMobile = "Mobile number is required";

        setErrors(_errors);

        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        savePartner(partner).then(() => {
            props.history.push("/partners");
            toast.success("Partner saved");
        });
    }

    return (
        <div className="container-fluid">
            <Header />
            <div className="body">
                <h2>Create Partner</h2>
                <CreatePartnerForm
                    errors={errors}
                    partner={partner}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
};

export default CreatePartnersPage;

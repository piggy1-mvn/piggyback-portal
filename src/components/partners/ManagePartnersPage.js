import React, { useState, useEffect } from "react";
import ManagePartnerForm from "./ManagePartnerForm";
import Header from "../common/Header";
import * as partnerApi from "../../api/partnerApi";
import { toast } from "react-toastify";

const ManagePartnersPage = props => {
    const [errors, setErrors] = useState({});

    const [partner, setPartner] = useState({
        partnerId: 0,
        partnerName: "",
        partnerDescription: "",
        partnerWebHookAddress: "",
        partnerOfficeAddress: "",
        partnerMobile: ""
    });

    useEffect(() => {
        const partner_id = props.match.params.partner_id;
        if (partner_id) {
            partnerApi.getPartnerById(partner_id)
                .then(_partner => setPartner(_partner.data));
        }
    }, [props.match.params.partner_id]);

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
        partnerApi.savePartner(partner).then(() => {
            props.history.push("/partners");
            toast.success("Partner saved");
        });
    }

    return (
        <div className="container-fluid">
            <Header />
            <div className="body">
                <h2>Manage Partner</h2>
                <ManagePartnerForm
                    errors={errors}
                    partner={partner}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
};

export default ManagePartnersPage;

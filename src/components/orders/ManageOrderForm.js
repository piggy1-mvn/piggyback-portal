import React from "react";
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";

function ManageOrderForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="partnerId"
                type="text"
                label="Partner ID"
                onChange={false}
                name="partnerId"
                value={props.order.partnerId}
                error={props.errors.partnerId}
            />
            <TextInput
                id="orderType"
                type="text"
                label="Order Type"
                onChange={false}
                name="orderType"
                value={props.order.orderType}
                error={props.errors.orderType}
            />
            <TextInput
                id="partnerRedirectUrl"
                type="text"
                label="Redirect URL"
                onChange={props.onChange}
                name="partnerRedirectUrl"
                value={props.order.partnerRedirectUrl}
                error={props.errors.partnerRedirectUrl}
            />
            <TextInput
                id="orderStatus"
                type="text"
                label="Order Status"
                onChange={props.onChange}
                name="orderStatus"
                value={props.order.orderStatus}
                error={props.errors.orderStatus}
            />
            <TextInput
                id="optimizationDuration"
                type="text"
                label="Optimization Duration"
                onChange={props.onChange}
                name="optimizationDuration"
                value={props.order.optimizationDuration}
                error={props.errors.optimizationDuration}
            />
            <TextInput
                id="orderLocation.latitude"
                type="text"
                label="Order Latitude"
                onChange={props.onChangeNested}
                name="orderLocation.latitude"
                value={props.order.orderLocation.latitude}
                error={props.errors.orderLocationLatitude}
            />
            <TextInput
                id="orderLocation.longitude"
                type="text"
                label="Order Longitude"
                onChange={props.onChangeNested}
                name="orderLocation.longitude"
                value={props.order.orderLocation.longitude}
                error={props.errors.orderLocationLongitude}
            />
            <TextInput
                id="maxOptimizations"
                type="text"
                label="Maximum Optimizations"
                onChange={props.onChange}
                name="maxOptimizations"
                value={props.order.maxOptimizations}
                error={props.errors.maxOptimizations}
            />
            <TextInput
                id="optimizationRadius"
                type="text"
                label="Optimization Radius"
                onChange={props.onChange}
                name="optimizationRadius"
                value={props.order.optimizationRadius}
                error={props.errors.optimizationRadius}
            />
            <TextInput
                id="initiatorUserId"
                type="text"
                label="Initiator User ID"
                onChange={props.onChange}
                name="initiatorUserId"
                value={props.order.initiatorUserId}
                error={props.errors.initiatorUserId}
            />

            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

ManageOrderForm.propTypes = {
    order: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onChangeNested: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

export default ManageOrderForm;

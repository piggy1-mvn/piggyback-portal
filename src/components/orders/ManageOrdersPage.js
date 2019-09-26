import React, { useState, useEffect } from "react";
import ManageOrderForm from "./ManageOrderForm";
import Header from "../common/Header";
import { getOrderById, saveOrder } from "../../api/orderApi";
import { toast } from "react-toastify";

const ManageOrdersPage = props => {
    const [errors, setErrors] = useState({});

    const [order, setOrder] = useState({
        partnerId: "",
        orderType: "",
        partnerRedirectUrl: "",
        orderStatus: "",
        optimizationDuration: "",
        orderLocation: {
            longitude: "",
            latitude: ""
        },
        maxOptimizations: "",
        optimizationRadius: "",
        initiatorUserId: ""
    });

    useEffect(() => {
        const order_id = props.match.params.order_id;
        if (order_id) {
            getOrderById(order_id)
                .then(_order => setOrder(_order.data));
        }
    }, [props.match.params.order_id]);

    function handleChangeNested({ target }) {
        let _order = order;
        if (target.name.includes("longitude")) {
            _order.orderLocation.longitude = target.value;
        } else {
            _order.orderLocation.latitude = target.value;
        }
        setOrder({
            ...order,
            orderLocation: _order.orderLocation
        });
    }

    function handleChange({ target }) {
        setOrder({
            ...order,
            [target.name]: target.value
        });
    }

    function formIsValid() {
        const _errors = {};

        if (!order.partnerId) _errors.partnerId = "Partner ID is required";
        if (!order.orderType) _errors.orderType = "Order Type is required";
        if (!order.partnerRedirectUrl) _errors.partnerRedirectUrl = "Redirect URL is required";
        if (!order.orderStatus) _errors.orderStatus = "Order Status is required";
        if (!order.optimizationDuration) _errors.optimizationDuration = "Optimization Duration is required.";
        if (!order.orderLocation.longitude) _errors.orderLocationLongitude = "Longitude is required";
        if (!order.orderLocation.latitude) _errors.orderLocationLatitude = "Latitude is required";
        if (!order.maxOptimizations) _errors.maxOptimizations = "Maximum Optimizations is required";
        if (!order.optimizationRadius) _errors.optimizationRadius = "Optimization Radius is required";

        setErrors(_errors);

        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        saveOrder(order).then(() => {
            props.history.push("/orders");
            toast.success("Order saved");
        });
    }

    return (
        <div className="container-fluid">
            <Header />
            <div className="body">
                <h2>Manage order</h2>
                <ManageOrderForm
                    errors={errors}
                    order={order}
                    onChange={handleChange}
                    onChangeNested={handleChangeNested}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
};

export default ManageOrdersPage;

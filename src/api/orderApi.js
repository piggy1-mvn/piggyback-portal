import { baseUrlOrderApi } from "../config/config";
import { refreshToken } from "../helper/LoginHelper";
import { handleResponse, handleError } from "../api/apiUtils";

const baseUrl = baseUrlOrderApi;

export function getOrders() {
    if (!localStorage.getItem("token")) return;
    refreshToken();
    return fetch(baseUrl + "/", {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
        .then(handleResponse)
        .catch(handleError);
}

export function saveOrder(order) {
    if (!localStorage.getItem("token")) return;
    refreshToken();
    if (!order.orderId) {
        return fetch(baseUrl + "/", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(handleResponse)
            .catch(handleError);
    } else {
        return fetch(baseUrl + "?orderId=" + order.orderId, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(handleResponse)
            .catch(handleError);
    }
}

export function getOrderById(order_id) {
    if (!localStorage.getItem("token")) return;
    refreshToken();
    return fetch(baseUrl + "?orderId=" + order_id, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
        .then(handleResponse)
        .catch(handleError);
}

export function getOrderByPartnerId(partner_id) {
    if (!localStorage.getItem("token")) return;
    refreshToken();
    return fetch(baseUrl + "/partnerId"+ "?partnerId=" + partner_id, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
        .then(handleResponse)
        .catch(handleError);
}

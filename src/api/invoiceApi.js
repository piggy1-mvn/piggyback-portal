import { baseUrlInvoiceApi } from "../config/config";
import { refreshToken } from "../helper/LoginHelper";
import { handleResponse, handleError } from "../api/apiUtils";

const baseUrl = baseUrlInvoiceApi;

export function getAllInvoice() {
    if (!localStorage.getItem("token")) return;
    refreshToken();
    const token = JSON.parse(localStorage.getItem("token"));
    return fetch(baseUrl + "/", {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "Authorization": "Bearer " + token
        }
    })
        .then(handleResponse)
        .catch(handleError);
}

export function getInvoiceById(invoice_id) {
    if (!localStorage.getItem("token")) return;
    refreshToken();
    return fetch(baseUrl + "/" + invoice_id, {
        method: "GET",
        headers: {
            "content-type": "application/json",
        }
    })
        .then(handleResponse)
        .catch(handleError);
}

export function saveInvoice(invoice) {
    if (!localStorage.getItem("token")) return;
    refreshToken();
    return fetch(baseUrl + "/" + invoice.invoice_id, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(invoice)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function getInvoiceByPartnerId(partner_id) {
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
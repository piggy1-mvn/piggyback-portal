import * as config from "../config/config";
import { refreshToken } from "../helper/LoginHelper";
import { handleResponse, handleError } from "../api/apiUtils";

const baseUrl = config.baseUrlPartnerApi;

export function getPartners() {
    if (!localStorage.getItem("token")) return;
    refreshToken();
    return fetch(baseUrl + "/", {
        method: "GET",
        headers: {
            "content-type": "application/json",
        }
    })
        .then(handleResponse)
        .catch(handleError);
}

export function savePartner(partner) {
    if (!localStorage.getItem("token")) return;
    refreshToken();
    if (!partner.partnerId) {
        return fetch(baseUrl + "/", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(partner)
        })
            .then(handleResponse)
            .catch(handleError);
    } else {
        return fetch(baseUrl + "?partnerId=" + partner.partnerId, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(partner)
        })
            .then(handleResponse)
            .catch(handleError);
    }
}

export function getPartnerById(partner_id) {
    if (!localStorage.getItem("token")) return;
    refreshToken();
    return fetch(baseUrl + "?partnerId=" + partner_id, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
        .then(handleResponse)
        .catch(handleError);
}

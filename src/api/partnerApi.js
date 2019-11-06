import { baseUrlPartnerApi } from "../config/config";
import { refreshToken } from "../helper/LoginHelper";
import { handleResponse, handleError } from "../api/apiUtils";

const baseUrl = baseUrlPartnerApi;

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
    const token = JSON.parse(localStorage.getItem("token"));
    if (!partner.partnerId) {
        console.log("token passed ", token)
        return fetch(baseUrl + '/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization' : 'Bearer ' + token
              },
            body: JSON.stringify(partner)
        })
            .then(response => response.json())
            .catch(handleError);
    } else {
        return fetch(baseUrl + "?partnerId=" + partner.partnerId, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                      "Authorization": "Bearer " + token
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

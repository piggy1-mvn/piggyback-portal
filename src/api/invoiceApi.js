import { baseUrlInvoiceApi } from "../config/config";
import { refreshToken } from "../helper/LoginHelper";
import { handleResponse, handleError } from "../api/apiUtils";

const baseUrl = baseUrlInvoiceApi;

export function getAllInvoice() {
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

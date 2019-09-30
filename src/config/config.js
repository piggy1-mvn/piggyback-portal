export const toastDuration = 3000;
export const extendUserSessionMinutes = 10;
export const partnerUserRoles = ["PARTNER_ADMIN", "PARTNER_USER", "PARTNER_API_USER"];
export const authNetApiKey = "7S8fsuXU2zJ8";
export const authNetApiPass = "855NG4q7W6x5fbuH";

const environmentVariable = process.env.REACT_APP_ENV;

export const baseUrlUserApi = (environmentVariable === "dev") ? "http://108.59.87.44:8083/user/" : "http://34.87.47.196:8080/user/";
export const baseUrlPartnerApi = (environmentVariable === "dev") ? "http://108.59.87.44:8085/partner" : "http://35.198.202.184:8080/partner";
export const baseUrlOrderApi = (environmentVariable === "dev") ? "http://108.59.87.44:8088/order" : "http://35.186.149.29:8080/order";
export const baseUrlInvoiceApi = (environmentVariable === "dev") ? "http://108.59.87.44:8084/invoice" : "http://35.198.251.69:8080/invoice";

// export const baseUrlUserApi = "http://localhost:8083/user/";
// export const baseUrlPartnerApi = "http://localhost:8085/partner";
// export const baseUrlOrderApi = "http://localhost:8088/order";
// export const baseUrlInvoiceApi = "http://localhost:8084/invoice";
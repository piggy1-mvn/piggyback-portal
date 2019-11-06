export const toastDuration = 3000;
export const extendUserSessionMinutes = 10;
export const partnerUserRoles = ["PARTNER_ADMIN", "PARTNER_USER", "PARTNER_API_USER"];
export const authNetApiKey = "7S8fsuXU2zJ8";
export const authNetApiPass = "855NG4q7W6x5fbuH";

const environmentVariable = process.env.REACT_APP_ENV;

export const baseUrlUserApi = (environmentVariable === "dev") ? "https://test.piggyback.ga/user/user/" : "http://34.87.47.196:8080/user/";
export const baseUrlPartnerApi = (environmentVariable === "dev") ? "https://test.piggyback.ga/partner/partner" : "http://35.198.202.184:8080/partner";
export const baseUrlOrderApi = (environmentVariable === "dev") ? "https://test.piggyback.ga/order/order" : "http://35.186.149.29:8080/order";
export const baseUrlInvoiceApi = (environmentVariable === "dev") ? "https://test.piggyback.ga/invoice/invoice" : "http://35.198.251.69:8080/invoice";

//  export const baseUrlUserApi = "http://35.223.248.27:8083/user/";
//  export const baseUrlPartnerApi = "http://35.223.248.27:8085/partner";
//  export const baseUrlOrderApi = "http://35.223.248.27:8088/order";
//  export const baseUrlInvoiceApi = "http://35.223.248.27:8084/invoice";
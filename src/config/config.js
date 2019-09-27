export const toastDuration = 3000;
export const extendUserSessionMinutes = 10;
export const partnerUserRoles = ["PARTNER_ADMIN", "PARTNER_USER", "PARTNER_API_USER"];

const environmentVariable = process.env.REACT_APP_ENV;

export const baseUrlUserApi = (environmentVariable === "dev") ? "http://108.59.87.44:8083/user/" : "http://34.87.47.196:8080/user/";
export const baseUrlPartnerApi = (environmentVariable === "dev") ? "http://108.59.87.44:8085/partner" : "http://35.198.202.184:8080/partner";
export const baseUrlOrderApi = (environmentVariable === "dev") ? "http://108.59.87.44:8085/order" : "http://35.198.202.184:8080/order";
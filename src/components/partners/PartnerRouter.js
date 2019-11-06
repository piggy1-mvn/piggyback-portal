import PartnersPage from "./PartnersPage";
import PartnerPage from "./PartnerPage";
import React from "react";
import LoginForm from "../login/LoginForm";

class PartnerRouter extends React.Component {
 
  render() {

        const userRole = JSON.parse(localStorage.getItem("userRole"));
        
        const PIGGY_ADMIN="PIGGY_ADMIN";
        const PARTNER_ADMIN="PARTNER_ADMIN";
        const PARTNER_USER ="PARTNER_USER";
        

        let pageRender;
    
        if (userRole === PIGGY_ADMIN) {
         
          pageRender =  <PartnersPage />;
        } else if(userRole === PARTNER_ADMIN || userRole === PARTNER_USER ) {
          pageRender =  <PartnerPage />;
         
        }else{
          pageRender = <LoginForm />
        };
        return (
            <div className="container-fluid">
             {pageRender}
            </div>
        );
    
       
      }


}
export default PartnerRouter;
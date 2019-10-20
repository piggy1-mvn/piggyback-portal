import InvoicesPage from "./InvoicesPage";
import InvoicePage from "./InvoicesPage";
import React from "react";
import LoginForm from "../login/LoginForm";

class InvoiceRouter extends React.Component {
 
  render() {
       
        const userRole = JSON.parse(localStorage.getItem("userRole"));
      
        const PIGGY_ADMIN="PIGGY_ADMIN";
        const PARTNER_ADMIN="PARTNER_ADMIN";
        const PARTNER_USER ="PARTNER_USER";
        

        let pageRender;
    
        if (userRole === PIGGY_ADMIN) {
          pageRender =  <InvoicesPage />;
        } else if(userRole === PARTNER_ADMIN || userRole === PARTNER_USER ) {
          pageRender =  <InvoicePage />;
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
export default InvoiceRouter;
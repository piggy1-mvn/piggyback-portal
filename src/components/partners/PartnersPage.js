import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import { getPartners } from "../../api/partnerApi";
import { Link } from "react-router-dom";
import PartnerList from "./PartnerList";

function PartnersPage() {

  const [partners, setPartners] = useState([]);

  useEffect(() => {
    getPartners().then(_partners => setPartners(_partners));
  }, []);

  return (
    <div className="container-fluid">
      <Header />
      <div className="body">
        <h2>Partners</h2>
        <Link className="btn btn-primary" style={{ margin: "5px" }} to="/partner/add">
          Add Partner
         </Link>
        <PartnerList partners={partners} />
      </div>
    </div>
  );
}

export default PartnersPage;

import React from "react";
import { Link } from "react-router-dom";

function PartnerList(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
                {props.partners && props.partners.length > 0 &&
                    props.partners.map(partner => {
                        return (
                            <tr key={partner.partnerId}>
                                <td>{partner.partnerName}</td>
                                <td>{partner.partnerDescription}</td>
                                <td>
                                    <Link to={"/partner/" + partner.partnerId}>{partner.partnerId}</Link>
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
}

export default PartnerList;

import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import { Link } from "react-router-dom";
import { baseUrlPartnerApi } from "../../config/config";


class PartnerPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            partnerID : "",
            partnerName : "",
            partnerDesc : ""
        }

    }

    async fetchData() {
     
        const baseUrl = baseUrlPartnerApi;
        const partnerId = JSON.parse(localStorage.getItem("partnerId"));
        const response = await fetch(baseUrl + "?partnerId=" + partnerId, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        });
    
        let clonej = response.json();
        return clonej;
      }

    async componentDidMount(){
        const response = await this.fetchData();
        let setval = response.data;
        this.setState({partnerID : setval.partnerId, partnerName : setval.partnerName, partnerDesc : setval.partnerDescription})
         

    }

    render() {
        return(
        <div className="container-fluid">
        <Header />
        <div className="body">
          <h2>Partners</h2>
          <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
                <tr key={this.state.partnerID}>
                <td>{this.state.partnerName}</td>
                <td>{this.state.partnerDesc}</td>
                <td>
                    <Link to={"/partner/" + this.state.partnerID}>{this.state.partnerID}</Link>
                </td>
                </tr>
            </tbody>
        </table> 
        </div>
      </div>

       )

    }

}

export default PartnerPage;
import React, { useEffect } from "react";
import Header from "../common/Header";
//import getUserRoles from "../../api/userApi";

const HomePage = props => {

  // useEffect(() => {
  //   getUserRoles()
  //     .then(roles => {
  //       localStorage.setItem("roles", JSON.stringify(roles));
  //     })
  // }, []);

  return (
    <div className="container-fluid">
      <Header />
      <div className="jumbotron">
        <div className="body">
          <h1>Home Page</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

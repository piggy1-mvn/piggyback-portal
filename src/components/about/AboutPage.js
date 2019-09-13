import React from "react";
import Header from "../common/Header";

class AboutPage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="body">
          <h2>About</h2>
          <p>This app uses React</p>
        </div>
      </div>
    );
  }
}

export default AboutPage;

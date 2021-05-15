import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Landing.style.css";
import Login from "../../components/Login/Login.comp";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Jumbotron fluid className="landingPage__jumbotron">
        {" "}
        <Login />
      </Jumbotron>
    </div>
  );
};

export default LandingPage;

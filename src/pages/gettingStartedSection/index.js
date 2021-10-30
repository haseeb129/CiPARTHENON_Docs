import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";

export const GettingStarted = () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="heading-padding padding-Top">Getting Started</h1>
      <p className="div-font-size">
        Our Support Center contains a complete set of documentation which will
        guide you along the ciPARTHENON experience. Learn more about ciPARTHENON
        features, benefits and technical details so that you can make the most
        out of your dashboards. <br /> The online help is divided in different
        sections, as follows:
      </p>
      <div className="list-div">
        <ui>
          <p>
        <li className="pageLink" onClick={() => history.push("/GettingStarted")}>
            Getting Started -
          </li>
          what is ClicData and how does it work.</p>
          <p>
        <li className="pageLink" onClick={() => history.push("/PreparingYourData")}>
            Preparing Your Data -
          </li>
          connect your data, schedule its refresh and perform transformations.</p>
          <p>
        <li className="pageLink" onClick={() => history.push("/BuildingADashboard")}>
            Building a Dashboard -
          </li>
          learn how to build graphs, filters and other widgets in a few clicks.</p>
                    
        </ui>
      </div>
      <h2 className="second-heading">In This Section</h2>
      <div className="list-div">
        <ui>
          <li className="pageLink" onClick={() => history.push("/ciPARTHENON")}>
            What is ciPARTHENON.
          </li>
        </ui>
      </div>
    </div>
  );
};

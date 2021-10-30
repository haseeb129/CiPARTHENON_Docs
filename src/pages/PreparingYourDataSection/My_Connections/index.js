import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import { useHistory } from "react-router-dom";

export const MyConnections = () => {
  let history = useHistory();
  return (
    <div className="mainPage">
      <h1 className="padding-Top">My Connections</h1>
      <p>
      Connecting data to ciPARTHENON is simple and intuitive! You have to click on Connect Data and choose to import an Excel file (a flat file) from your <span className="bold-text">Local system (PC or Laptop</span> or to create a new connection.
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      If you have already created some connections, in this section you can see all the connectors used to import data in ciPARTHENON.
      In the below example, the user used 1 connector: Dropbox. 

      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
      In case the user does not have a connection, he has to click on Create a Connection:
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
      A screen with all the connections is opened. You can filter them by category (Files, Services and Systems) or he can type the name of the connector in the search bar. 
      </p>
      <br />
      <img src={image4} className="imageClass" />
      <br />
      <p>
      The availability of certain connectors depends on your subscription plan. You can check the box “Only connections I have access to” to only view the connectors that are included in your current plan. If you would like to use a connector that is not included in your current plan, check out the bottom right icon on the given connector which will indicate which plan you need to upgrade to.
      </p>
      <br />
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/ConnectionBroker")}
          >
          Connection Broker
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/ConnectionProperties")}
          >
          Connection Properties
          </span>
        </li>
        
      </div>

      
    </div>
  );
};

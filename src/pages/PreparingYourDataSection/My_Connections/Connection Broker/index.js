import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";
import image7 from "./images/Picture7.PNG";
import { useHistory } from "react-router-dom";

export const ConnectionBroker = () => {
  let history = useHistory();
  return (
    <div className="mainPage">
      <h1 className="padding-Top">Connection Broker</h1>
      <p>
      The Connection Broker groups multiple connectors into a single connection, hence making it easier to bind one data set to multiple identical (or similar) data sources.
      For example, if you have multiple locations, each with their own copy of a database or an application, you can now create a connection broker to point to those locations and act as a single connection.

      If you are familiar with <span className="bold-text">Fusions, </span>think of the broker as a Fusion at the connections level.

      Set up all your data connections first, and then create the Connection Broker to handle them all in one go.

      <span className="bold-text">Step 1 : Create the Connection broker</span>

      In the Connectors explorer, open the Add New dropdown and select Connection Broker.
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      This will open the following window, from where you can select all the data connections you previously created and that you wish to include in the Connection Broker.



      Click Add New to add them.
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
      Hit Save to get to the setup of the dataset.



     In the General tab of your new datasets properties you can choose a name for it and determine if an additional columns should be added to the dataset, displaying the name of the connection it came from and date & time stamp column.
      </p>
      <br />
      <img src={image4} className="imageClass" />
      <br />
      <p>
      In the Query tab, write your query that will apply to all connections. In our example we are querying multiple databases with the same data schema.
      </p>
      <br />
      <img src={image5} className="imageClass" />
      <br />
      <p>
      In the schema tab, you will notice the added column containing the connection name, if you haver chosen to add it.
      </p>
      <br />
      <img src={image6} className="imageClass" />
      <br />
      <p>
      Preview your data...
      </p>
      <br />
      <img src={image7} className="imageClass" />
      <br />
      <p>
      If everything looks good, you can hit Next and start loading the data.



      You are now ready to use this dataset in your ETL processes and or dashboards.

      You can set up a schedule to automate the refresh of the data.
      </p>
      <br />
      <h2 className="second-heading">See more</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/CreateNewSchedule")}
          >
            Create New Schedule
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/BuildingADashboard")}
          >
            Building a Dashboard
          </span>
        </li>
      </div>

      
    </div>
  );
};

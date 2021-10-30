import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import "./index.css";
export const RebindYourDashboards = () => {
  return (
    <div className="RebindYourDashboards">
      <h1 className="padding-Top">Rebind your dashboards</h1>
      <p>
      With the help of the Rebind data feature you can link the dashboards easily with another data set without the need to build them from scratch.
      This feature allows you to replace one or more data-sets associated with the dashboard with the new data-sets. </p>
      <br />
      <p>In order to use this feature the first step is to access the Properties of the Dashboard - Actions - Rebind Data.</p>

      <img src={image1} className="imageClass" />
      <br />
      <p>When you click the rebind data option it will take you to the next screen where you could see all the data-sets associated with the dashboards.</p>

      <img src={image2} className="imageClass" />

      <br />
      <p>
      Click the data-set name on the left side panel of the screen. This will display all the columns names of the data-set associated with the dashboard on the right side panel. You can now replace it with a different data-set and select the column names from the drop down accordingly.</p>
      <br />
      <img src={image3} className="imageClass" />
      <br />

      <p>
      Save the changes once you have replaced the data-set and the respective column names . The dashboard will reflect the changes and all the widgets data bindings will be replaced with the new data bindings automatically.
      </p>

    </div>
  );
};

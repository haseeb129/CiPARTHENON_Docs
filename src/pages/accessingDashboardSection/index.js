import React from "react";
import { useHistory } from "react-router-dom";

export const AccessingDashboards = () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="padding-Top padding-bottom">Accessing Your Dashboards</h1>

      <p>The <span className="bold-text">Dashboard</span> menu allows to visualize all the dashboards you have created or the ones that have been shared with you, make changes on the properties, schedules, security or other actions. Via the <span className="bold-text">Dashboard</span> menue,you can also access the dashboards in the edit mode or create a new one.
      </p>
      <br />
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/OrganizeYourDashboards")}>
          
            Organize your dashboards
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/RebindYourDashboards")}>
          
            Rebind your dashboards
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/MobileApp")}>
          
            Mobile App
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/VisualizeAndShareYourDashboards")}>
          
            Visualize and Share Your Dashboards 
          </span>
        </li>
      </div>
    </div>
  );
};

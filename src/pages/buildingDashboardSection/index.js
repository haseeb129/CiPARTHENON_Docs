import React from "react";
import { useHistory } from "react-router-dom";

export const BuildingADashboard = () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="padding-Top padding-bottom">Building A Dashboard</h1>
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
      <li>
          <span
            className="pageLink"
            onClick={() => history.push("/CreateYourFirstDashboard")}
          >
            Create Your First Dashboard
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/dashboardBinders")}
          >
            Dashboard Binders
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/WorkingWithWidgets")}
          >
            Working with widgets
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/FilterYourWidgets")}
          >
            Filter your widgets
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/CustomColorPalette")}
          >
            Custom Color-Palette
          </span>
        </li>
      </div>
    </div>
  );
};

import React from "react";
import { useHistory } from "react-router-dom";

export const PreparingYourData = () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="padding-Top padding-bottom">Preparing Your Data</h1>
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span className="pageLink" onClick={() => history.push("/BeforeImportingTheData")}>
            Before importing the data
            </span>
        </li>

        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/MyData")}>
          
            My Data
          </span>
        </li>
        <li>
          <span className="pageLink" onClick={() => history.push("/CreateData")}>
            Create Data
            </span>
        </li>
        <li>
          <span className="pageLink" onClick={() => history.push("/CreateView")}>
            Create view
            </span>
        </li>
        <li>
          <span className="pageLink" onClick={() => history.push("/MergeData")}>
            Merge data
            </span>
        </li>
        <li>
          <span className="pageLink" onClick={() => history.push("/DataRefreshMethods")}>
            Data Refresh Methods
            </span>
        </li>
      </div>
    </div>
  );
};

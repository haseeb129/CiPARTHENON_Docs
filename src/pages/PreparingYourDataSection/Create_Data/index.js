import React from "react";
import { useHistory } from "react-router-dom";

export const CreateData = () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="padding-Top padding-bottom">Create Data</h1>

      <p>Create Data feature allows you to create a new set of data which you can use later on the data merges or in the dashboards section, to build the widgets.</p>
      <br />
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span className="pageLink" onClick={() => history.push("/StepsNeedToFollow")}>
            Steps need to follow
            </span>
        </li>
        
      </div>
    </div>
  );
};

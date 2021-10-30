import React from "react";
import { useHistory } from "react-router-dom";

export const  FilterYourWidgets= () => {
  let history = useHistory();

  return (
    <div className="mainPage">
      <h1 className="padding-Top padding-bottom">Filter your Widgets</h1>
      <p>
      In this section you will learn how to apply filters on your visual representations and how to link 2 or multiple widgtes.
      </p>
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/UsingLists")}
          >
            Using Lists
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/UsingDataSelectors")}
          >
            Using Data Selectors
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/UsingInputs")}
          >
            Using Inputs
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/GlobalFilters")}
          >
            Global Filters
          </span>
        </li>
        
      </div>
    </div>
  );
};

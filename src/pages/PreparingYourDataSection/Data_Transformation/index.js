import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import { useHistory } from "react-router-dom";
import "./index.css";

export const DataTransformation = () => {
  let history = useHistory();
  return (
    <div className="mainPage">
      <h1 className="padding-Top">Data Transformation</h1>
      <p>
      Use familiar functions and formulas to transform your data any way you want, like adding calculated columns, filtering, grouping and changing the data structure. You won't need to create any formulas on your raw data source anymore.
      </p>
      <br />
      <p>
      The data transform feature in ciPARTHENON allows you to <span className="bold-text">add a new column </span>to your data source, <span className="bold-text">to filter the data , group it </span> or change it's structure by <span className="bold-text">pivoting </span>it.
      </p>
      <br />
      <p>
      Once you have mastered the art of using data transformations you will not need to create any formulas on your raw data source. You can create all your key ratios and calculations directly from within ciPARTHENON.
      </p>
      <br />
      <p>
      You can use <span className="bold-text">Transact - SQL </span> to perform operations on your Data in ciPARTHENON.
      </p>
      <br/>
      <p>
      You have to build the transformations only once, after that ciPARTHENON will take care of the transformations every time you import your data.
      </p>
      <p>
      In order to access the data transformation feature, you need to go to your <span className="bold-text">Data</span> tab and create a <span className="bold-text">View</span> of the data set you are working with. 
      </p>
      <br />
      <img src={image1} className="imageClass" />

      <p>
      Once a <span className="bold-text">View </span>has been created, you will automatically be taken to the <span className="bold-text">Data Transformation </span>window, where <span className="bold-text">Transact - SQL</span> is used to perform calculations.
        </p>
        <img src={image2} className="imageClass" />
        <br />
        <h2 className="second-heading">In This Section</h2>
        <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/CalculatedColumn")}>
            Calculated Column
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/AggregatedColumn")}>
            Aggregated Column
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/TextSplitter")}>
            Text Splitter
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/FindAndReplace")}>
            Find and Replace
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Normalize")}>
            Normalize
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Grouping")}>
            Grouping
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/PivotData")}>
            Pivot Data
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Standardize")}>
            Standardize
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/Update")}>
            Update
          </span>
        </li>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/UnPivoteData")}>
            Unpivot Data
          </span>
        </li>
        </div>
    </div>
  );
};

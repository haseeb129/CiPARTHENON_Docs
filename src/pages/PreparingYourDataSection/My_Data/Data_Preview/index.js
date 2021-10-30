import React from "react";
import image1 from "./images/Picture1.png";


export const DataPreview = () => {
  return (
    <div className="DataPreview">
      <h1 className="padding-Top">Data Preview</h1>
      <p>
        The <span className="bold-text">Data Preview</span> window allows users to previews their data (shows 200 rows by default, can expand) in addition the column headers and their format.
      </p>
      <br />
      <img src={image1} className="imageClass" />

      
      
    </div>
  );
};

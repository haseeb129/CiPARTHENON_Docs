import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";


export const PivotData = () => {
  return (
    <div className="PivotData">
      <h1 className="padding-Top">Pivot Data</h1>
      <p>
      In order to pivot your data set, you should drag and drop the <span className="bold-text">Pivot Data </span>option from the left side of the screen. A new window will open containing the rows and the column you can aggregate your values on. </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      Click <span className="bold-text">Save </span>and a new data set will be generated at the bottom of the screen. if you want too modify your Data Transformation, click on it and then access the <span className="bold-text">Properties.</span>   
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      
    </div>
  );
};

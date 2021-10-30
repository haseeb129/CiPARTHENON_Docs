import React from "react";
import image1 from "./images/Picture1.PNG";


export const Filter = () => {
  return (
    <div className="Filter">
      <h1 className="padding-Top">Filter</h1>
      <p>
      In order to filter your data set, you should drag and drop the <span className="bold-text">Filter </span>option from the left side of the screen. A new window will open containing the filter editor, here you can use the drop down lists to select multiple filter conditions.
      </p>
      <br />
      <img src={image1} className="imageClass" />

      <p>Click <span className="bold-text">Save </span>and the data set will be filtered upon the condition you just created.</p>
      <br />
      <p><span className="italic">(If you would like to use SQL syntax in filtering you can select "No Column Selected" which will allow you to type an SQL statement)</span></p>
    </div>
  );
};

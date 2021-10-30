import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";

import "./index.css";
export const FindAndReplace = () => {
  return (
    <div className="FindAndReplace">
      <h1 className="padding-Top">Find and Replace</h1>
      <p>
      To find and replace certain values in your data set, drag and drop the Find and Replace option from the left side of the screen. A new window will open allowing you to select the column you want to find and replace.
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      Once you have selected the column you want to find and replace you can apply the changes by entering values in the "find this" and replace with fields based on your requirements. 

      You can find and replace both text and numeric values in your data set.
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
      In the below example, I would like to select the column year of delivery and find and replace certain values. You can find text values and replace them with numeric values and vice versa.

      You can see the changes applied in the transformation preview on the right side panel.
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
        Click <span className="bold-text">Save </span>and the newly changed data set will replace the old one. You can see the original data set on top of  the screen and the new data set at the bottom. If you want to edit the data transformation, you click on it and access the <span className="bold-text">Properties</span> button at the bottom of the screen. 
      </p>
      <br />
      <img src={image4} className="imageClass" />

      
    </div>
  );
};

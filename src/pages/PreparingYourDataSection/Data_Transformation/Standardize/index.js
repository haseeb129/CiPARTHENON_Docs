import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.png";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";

export const Standardize = () => {
  return (
    <div className="Standardize">
      <h1 className="padding-Top">Standardize</h1>
      <p>
      This feature ensures that your data is consistent and that you can account for variations due to human nature or bad configuration.
      For example, ensure that if you have a Country column that contains data such as “UK”, “U.K.”, “uk” it all gets converted to “United Kingdom”.

      To standardize your data set, drag and drop the standardize option from the left side of the screen. A new window will open allowing you to select the column you want to standardize.</p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      Once you have selected the column you want to standardize, you can apply the method based on your requirements for standardization. You can chose the method by selecting from the drop down.    
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
      In the below example, I would like to select the column <span className="bold-text">"Date" </span>, find a value in that column and replace it with another value.

      You will see the changes applied in the transformation preview on the right side panel.
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
      Click <span className="bold-text">Save </span>and the new Standardized data set will replace the old one. You can see the original data set on top of  the screen and the one after the data transformation at the bottom. If you want to edit the data transformation, you click on it and access the <span className="bold-text">Properties</span> button at the bottom of the screen. 
      </p>
      <br />
      <img src={image4} className="imageClass" />
      <br />
      
      
    </div>
  );
};

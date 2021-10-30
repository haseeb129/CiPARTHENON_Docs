import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";

export const Normalize = () => {
  return (
    <div className="Normalize">
      <h1 className="padding-Top">Normalize</h1>
      <p>
      The feature ensures that your data is within certain limits by re-aligning data within certain ranges, date periods and values.  
      For example ensure that date fields that are empty or have very old dates or dates in future are set to specific better dates.

      To normalize your data set, drag and drop the Normalize option from the left side of the screen. A new window will open allowing you to select the column you want to Normalize.</p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      Once you have selected the column you want to Normalize, you can apply the fix based on your requirements for normalization. You can fix invalid/empty values, fix low values and fix high values.

      When the column selected is a text you could change cases, trim spaces and remove spaces.
    
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
      In the below example, I would like to select the column CarId and apply fixes for low values and high values.

      You can see the changes applied in the transformation preview on the right side panel.
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
      Click <span className="bold-text">Save </span>and the new normalized data set will replace the old one. You can see the original data set on top of  the screen and the one after the data transformation at the bottom. If you want to edit the data transformation, you click on it and access the <span className="bold-text">Properties</span> button at the bottom of the screen. 
      </p>
      <br />
      <img src={image4} className="imageClass" />
      <br />
      
      
    </div>
  );
};

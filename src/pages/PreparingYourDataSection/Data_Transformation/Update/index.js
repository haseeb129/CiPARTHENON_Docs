import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";

export const Update = () => {
  return (
    <div className="Update">
      <h1 className="padding-Top">Update</h1>
      <p>
      To Update your data set, drag and drop the Update option from the left side of the screen. A new window will open allowing you to select the column you want to Update.</p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      Once you have selected the column you want to Update, you can write the queries to update the new values for that column. You can choose <span className="bold-text">Formula editor </span>and  write the syntax by clicking on Q(x).The language used in the query editor is Transact SQL language.   
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
      In the below example, I would like to select the column Date and extract only the year for the dates available and update the same in the column.

      You can see the changes applied in the transformation preview on the right side panel.
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
      Click <span className="bold-text">Save </span>and the new updated data set will replace the old one. You can see the original data set on top of  the screen and the one after the data transformation at the bottom. If you want to edit the data transformation, you click on it and access the <span className="bold-text">Properties</span> button at the bottom of the screen. 
      </p>
      <br />
      <img src={image4} className="imageClass" />
      <br />
      
      
    </div>
  );
};

import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";

export const CreateView = () => {
  return (
    <div className="CreateView">
      <h1 className="padding-Top">Create View</h1>
      <p>
      The <span className="bold-text">Create View</span> feature allows you to build a new set of data which can be used for <span className="bold-text">Data Transformations.</span>
      </p>
      <br />
      <p>
        <span className="bold-text">Advantages:</span>
      </p>
      <p>
      Creating a view is similar to the SQL views.
      </p>
      <br />
      <p>
      1. A view is designed in such a way that  you can apply transformations to the original data set.
      </p>

      <p>
      Example:   
      <br />
      <br />
      <p><li>To pivot the columns in order to use it them a drill down table widget.</li></p> 
      <p><li>To group data by certain columns or standardize the data set.</li></p>    
      </p> 
      <p>2. Any transformations applied to a <span className="bold-text">View </span>will not affect the original data source.</p>

      <p>You can create a <span className="bold-text">View </span>either by selecting a data source in the data tab, followed by <span className="bold-text">Actions, </span>then <span className="bold-text">Create View, </span>or by clicking the arrow beside <span className="bold-text">Add New </span>in the data tab.</p>
      <br />
      <p>If you perform the former, the <span className="bold-text">View </span>will be configured automatically, requiring you to click <span className="bold-text">Create! </span>in which you will be taken to the <span className="bold-text">Data Transformation </span>window immediately after.</p>
      
      <p>However, if you perform the latter, you must configure the <span className="bold-text">View </span>by navigating to an original data source, then setting up your <span className="bold-text">View</span> accordingly.Below are the proper steps in manually creating a <span className="bold-text"> View:</span></p>
      <br />

      <p><span className="bold-text">Step 1: </span>Enter the Name for the view</p>

      <img src={image1} className="imageClass" />

      <p><span className="bold-text">Step 2: </span>Select the data set for which you want to create a view.</p>
      <p>A window will appear displaying your data sets. Choose your data set and click <span className="bold-text">Select.</span></p>

      <img src={image2} className="imageClass" />

      <p><span className="bold-text">Step 3: </span>Enter a description for your reference (optional)</p>
      <br />
      <img src={image3} className="imageClass" />

      <p><span className="bold-text">Step 4: </span>Once you have finalized your selection click the <span className="bold-text">Create </span>button . You will be directly taken to the data transformation screen where you can chose from different transformations available.</p>

      <img src={image4} className="imageClass" />
    </div>
  );
};

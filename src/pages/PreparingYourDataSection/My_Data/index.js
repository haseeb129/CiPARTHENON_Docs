import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import { useHistory } from "react-router-dom";


export const MyData = () => {
  let history = useHistory();
  return (
    <div className="mainPage">
      <h1 className="padding-Top">My Data</h1>
      <p>
      In the Main screen you will see the list of all data sources you previously imported and the date of the latest update. You can access the transformation, the scheduling and the sharing options in the Actions column. 
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />

      <p>
      In order to keep your sets of data organized, you can create different folders, rename, and move or delete them. You have to access My Data and click on the right Arrow. Specify a name for the new folder. 
      </p>  
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <br />
      <p>
      When a data set selected in the Data Tab, a menu bar will appear at the bottom, granting the user access to several options. The options can be seen below: </p>
      
      <p>
        <li><span className="bold-text">Properties</span></li>
        <li><span className="bold-text">Schedule</span></li>
        <li><span className="bold-text">Security</span></li>
        <li><span className="bold-text">Refresh</span></li>
      </p>
      <br />
      <p><li>1. <span className="bold-text">Recreate - </span>If the data set was imported non-locally, you can <span className="bold-text">Recreate </span>the data set from scratch (will inherit new columns and rows) based on the data on your application</li></p>
      <p><li>2. <span className="bold-text">Reload - </span>Reloads all rows of data based on the data on your application but will not inherit new columns</li></p>
     <p><li>3. <span className="bold-text">Append - </span>Adds new data onto the selected data source</li></p>
     <p><li>4. <span className="bold-text">Update - </span>Updates current rows of data based on a Primary Key (must be set manually)</li></p>
      <p><li>5. <span className="bold-text">Update & Append - </span>Similar to <span className="bold-text">Update </span>however will also append new rows based on a Primary Key (must be set manually)</li></p>
      <br />
      <br />
      <p>
        <li><span className="bold-text">Actions</span></li>
      </p>
      <p><li>1. <span className="bold-text">View Task Log - </span>describes the step-by-step process of importing your data.</li></p>
      <p><li>2. <span className="bold-text">Export - </span>export the corresponding data in either an Excel or CSV format.</li></p>
      <p><li>3. <span className="bold-text">Change Connection - </span>can inherit data from another data source</li></p>
      <p><li>4. <span className="bold-text">Duplicate - </span>Duplicates the data source</li></p>
      <p><li>5. <span className="bold-text">Move - </span>Moves the data set to another folder</li></p>
      <p><li>6. <span className="bold-text">Delete - </span>Moves the data set to the <span className="bold-text">Trash Bin</span> </li></p>

      <img src={image3} className="imageClass" />
      <br />

      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/DataPreview")}
          >
            Data Preview
          </span>
        </li>
      </div>
    
    <div>
        <li>
          <span
            className="pageLink"
            onClick={() => history.push("/DataProperties")}
          >
            Data Properties
          </span>
        </li>
      </div>
     
        
    </div>
  );
};

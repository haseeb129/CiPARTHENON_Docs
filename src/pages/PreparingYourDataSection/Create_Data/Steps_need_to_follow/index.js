import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.png";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";
import image7 from "./images/Picture7.PNG";
import image8 from "./images/Picture8.PNG";

export const StepsNeedToFollow = () => {
  return (
    <div className="StepsNeedToFollow">
      <h1 className="padding-Top">Steps need to follows</h1>
      <p>
      After choosing to add custom data:
      </p>
      <br />
      <img src={image1} className="imageClass" />

      <p>
          <span className="bold-text">Step 1:Choose the column</span>
          On the left hand side of the screen you will see all the column types that you can choose from to create your new data set. You can drag and drop them into the main screen area.      
      </p>
      <br />
      <img src={image2} className="imageClass" />

      <p>In the example below, we have added multiple columns of various data types:</p>
      <p><ol className="number list">
      <li>1. Text</li>
      <li>2. Number</li>
      <li>3. Currency</li>
      <li>4. Date</li>
      <li>5. Time</li>
      <li>6.Percentage</li>      
      </ol></p>

      <img src={image3} className="imageClass" />
      <br />

      <p><span className="bold-text">Step 2: Name the columns</span></p>
      <p>Name the columns that you have just created.</p>
      <br />

      <p><span className="bold-text">Step 3: Change the data type of the column</span></p>
      <p>To format a “numeric data type column”, you have various possibilities.

         - Format the numbers</p>
      <img src={image4} className="imageClass" />

      <p><span className="bold-text">Step 4: Other otions:</span></p>
      <p>Sort the column ascending/descending</p>

      <img src={image5} className="imageClass" />

      <p>Duplicate/delete the column, options that can be found under the Actions menu</p>
      <br />
      <img src={image6} className="imageClass" />

      <p>A new pop-up window will appear to confirm that the column will be deleted. The “date data type columns” can be formatted and sorted visually as follows:</p>

      <img src={image7} className="imageClass" />

      <p><span className="bold-text">Additional Actions</span></p>

      <img src={image8} className="imageClass" />
      
    </div>
  );
};

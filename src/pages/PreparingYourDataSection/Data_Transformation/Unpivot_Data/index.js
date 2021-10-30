import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";

export const UnpivotData = () => {
  return (
    <div className="UnpivotData">
      <h1 className="padding-Top">Unpivot Data</h1>
      <p>
      If the user has pivoted data that is imported into ciPARTHENON, we now have the ability to unpivot it. Unpivot data allows a better way of visualization. In the data transformation we have a new option called “Unpivot Data”.
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      If the user selects this option he will get to the properties wizard in which he can combine multiple columns into one, normally this represents dates.

      Step 1: Select the columns that will be combined into one, choose the name for the pivoted column and a name for the values.  
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
      Step 2: After this step the user can preview the data to check if it is correctly displayed.
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
      Step 3: The user can see the result of the unpivoted columns. He can do additional operations after this one, such as new calculated columns. 
      </p>
      <br />
      <img src={image4} className="imageClass" />
      <br />
      
      
    </div>
  );
};

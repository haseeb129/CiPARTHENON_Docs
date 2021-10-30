import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
export const CalculatedColumn = () => {

  return (
    <div className="CalculatedColumn">
      <h1 className="padding-Top padding-bottom">Calculated Column</h1>
      <p>
      In order to add a new calculated column to your data set, you should drag and drop the <span className="bold-text">"Calculated Column" </span>option from the left side of the screen. A new window will open containing the new column's properties. 
      </p>
      <br />
      <p>
      Type the name you wish to give to your new column and its position related to other columns.
      </p>
      <p>
      Then you can work on the data you want to display on this column through the Query Editor and by using <span className="bold-text">Transact SQL </span>Language.
      </p>
      <br />
      <p>
      For example, on the screen below, I want to calculate sales units over target units for each row and add a new column 'Test_1'
      </p>
      <img src={image1} className="imageClass" />
      <br />
      <p>
        Click <span className="bold-text">Save </span>and the new column will be added to your data set: 
      </p>
      <img src={image2} className="imageClass" />
      <br />
      <p>
      If you want to add a new column, you follow the same steps, beginning with dragging and dropping the Calculated Column into the data Editor.
      In the below example I extract the month number from my Date column: 
      </p>

      <img src={image3} className="imageClass" />
      <br />
      <p>
      In the end the data set will contain 2 more columns. You can add as many calculated columns as you need. You can modify the added columns if you click on them and access the <span className="bold-text">Properties </span> at the bottom of the screen. 
      </p>
      <br/>
      <img src={image4} className="imageClass" />
      <br />
      <p>
      The data transform feature will transform your data every time your data is updated.
      For example, if you schedule a data source to update itself every day at 11 am, once you have set up the data transform to modify your source the way you want, it will automatically transform the new source that has been uploaded. Remember that you can add multiple transformation steps to a data source and that they will be executed chronologically according to their step number.
      </p>


      
    </div>
  );
};

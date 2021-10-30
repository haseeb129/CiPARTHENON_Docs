import React from "react";
import image1 from "./images/Picture1.PNG";


export const AggregatedColumn = () => {
  
  return (
    <div className="AggregatedColumn">
      <h1 className="padding-Top padding-bottom">Aggregated Column</h1>
      <p>
      Aggregated columns give users the ability to insert aggregated information from one table into another table.
      </p>
      <br />
      <p>
      In order to add a new aggregated column to your data set, you should drag and drop the <span className="bold-text">"Aggregation"</span> option from the left side of the screen. A new window "Add Aggregation" will open containing the new column's properties and options for aggregation.
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      Type the name you wish to give to your new column and select its position related to other columns. Select the table name of the aggregated data source. Select the column to be aggregated. Select the type of aggregation (max/min/sum...). In the add filters section, select the columns for comparison in both tables and the condition ( = ,   ...)
      Click save and the new aggregated column will be added to the table.
      </p>
      <br/>
      <p>
      The data transform feature will transform your data every time your data is updated.
      For example, if you schedule a data source to update itself every day at 11 am, once you have set up the data transform to modify your source the way you want, it will automatically transform the new source that has been uploaded. Remember that you can add multiple transformation steps to a data source and that they will be executed chronologically according to their step number.      
      </p>

    </div>
  );
};

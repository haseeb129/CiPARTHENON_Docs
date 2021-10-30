import React from "react";
import image1 from "./images/Picture1.PNG";


export const DataRefreshMethods = () => {
  return (
    <div className="DataRefreshMethods">
      <h1 className="padding-Top">Data refresh methods</h1>
      <p><li><span className="bold-text">Recreate - </span>When you have changed the schema of the data set by modifying a query. This option will recreate all data from the source specified.</li></p>
      <p><li><span className="bold-text">Reload - </span>When you <span className="bold-text">Reload</span>the data it means that you re-import it from scratch. This option is useful when your data of previous months was modified or if you are adding the new month’s data on the same data source. Each time you <span className="bold-text">Reload</span> your data source on ClicData, the existing data is overwritten with the new data source.</li></p>
      <p><li><span className="bold-text">Append - </span>When you <span className="bold-text">Append</span>the data it means that you bring in the new data to your existing data source on ciPARTHENON. Appending a data source will keep your existing data source on ciPARTHENON intact and add the new rows for the new data.</li></p>
      <p><li><span className="bold-text">Update - </span>When you <span className="bold-text">Update</span> the data it means that you are specifying unique keys for your data source and based on the specified unique keys the changes will be performed. For instance, if your data source has unique GUID's or primary keys then selecting <span className="bold-text">Update</span>for your schedule would be the best option.</li></p>
      <p><li><span className="bold-text">Update & Append - </span>When you <span className="bold-text">Update &Append</span> the data it means that you are specifying unique keys for your data source and based on the specified unique keys the existing rows will be updated and new rows containing unique keys will be added. </li></p>
      <br />
      <img src={image1} className="imageClass" />

      
    </div>
  );
};

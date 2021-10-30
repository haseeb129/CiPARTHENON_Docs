import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture2 - Copy.PNG";

export const StepsToFollow = () => {
  return (
    <div className="StepsToFollow">
      <h1 className="padding-Top">Steps to follow</h1>
      <p>
        <span className="bold-text">Step 1: Access the imported data</span>
      </p>
      <p>Access the data you previously uploaded</p>
      <br />

      <img src={image1} className="imageClass" />

      <p>
        <span className="bold-text">Step 2: Select the Data Sources</span>
      </p>
      <p>Start by dragging the Data Sources you want to link, one by one, and dropping them on the right area of your screen. You can hide the lines of the columns by clicking on the column header which has the name of the data.</p>

      <img src={image2} className="imageClass" />

      <p>You should have at least 2 tables added. For example, as you can see on the below screenshot, there are 2 tables(data sources) added: Daily Calender [Sheet 1] and Monthly Calender[Sheet 1].
      </p>
      <img src={image6} className="imageClass" />

      <p><span className="bold-text">Step 3: Link the Data Sources</span></p>
      <p>In order to combine the information from both data sources, you need to link them through a common column. To link two Data Sources together, simply drag a column from one and drop it on a column of the other. This will create a join between the two Data Sources on the two columns you selected. In the examples below, you can see the Dealership ID column that is dragged and dropped on the Car ID column.

      A new link is created: 
      </p>

      <img src={image3} className="imageClass" />
      <p>If you click on the link between the 2 tables, you can visualize the Link Properties. It gives you information on the type of join built, what columns were linked, and the ability to just delete the link.
      </p>

      <br/>
      <p>While creating a link you have the possibility to link between 3 types of join:</p>
      <p><li><span className="bold-text">Inner Join</span> - It creates a new result table by combining ONLY column values from the two tables</li></p>
      <p><li><span className="bold-text">Left Outer Join</span> – It creates a new result table that contains all records of the "left" table, even if the join-condition does not find any matching record in the "right" table</li></p>
      <p><li><span className="bold-text">Right Outer Join</span> – It creates a new result table that contains all records of the "Right" table, even if the join-condition does not find any matching record in the "left" table</li></p>

      <img src={image4} className="imageClass" />

      <p><span className="bold-text">Step 4: Select the columns for the new data source</span></p>
      <p>Furthermore, you have to click the check-boxes for the column names in order to determine which columns you want to include in your new data source. In the preview you can see that "Dealershipid" and "Carid" match. I have chosen the two to provide the example in the preview, in a real life example, selecting one is sufficient, otherwise you end up with repeated column.
      </p>
      <br />
      <img src={image5} className="imageClass" />
    </div>
  );
};

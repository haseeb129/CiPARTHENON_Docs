import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";


export const Grouping = () => {
  return (
    <div className="Grouping">
      <h1 className="padding-Top">Grouping</h1>
      <p>
      In order to aggregate your data set, you should drag and drop the <span className="bold-text">Grouping </span>option from the left side of the screen. A new window will open containing the columns you can group and the measures (the aggregations). 
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      In the below example, I would like to see the average total cases by Continent and also the maximum New cases by Date. I choose as a <span className="bold-text">group column</span> the Type and the <span className="bold-text">Total cases</span> indicator. Then I choose the type of aggregation: Sum, Minimum, Maximum, Average etc. Here I choose Average, then Maximum.



      If I want to add one more levels of aggregations, I can add another column in the <span className="bold-text">Group</span> section.For example, I want to see for every continent, as per date, the average total cases and maximum new cases , so I add the
      <span className="bold-text">Continent</span> and <span className="bold-text">Date </span>as <span className="bold-text">Group column</span>:      
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
      If you want to rename the new aggregated columns, click on the pen on the right of the name as shown below:
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
      If the aggregated column is a text column, it's the same procedure. To fetch a text value, you can use Minimum or Maximum to gather the value. Min and Max refer to the alphabetical order. Max of Area will display North America, whereas Min will display South America, for example.

      If I want to count the number of instances of Colors by Type, I need to use the <span classname="bold-text">Count</span> Aggregation.
      </p>
      <br />
      <img src={image4} className="imageClass" />
      <br />
      <p>
      In this example, there are 28633 cases with the Africa. But if I want to count the number of distinct instances of cases by Continent, I need to use the Distinct Count aggregation :
      </p>
      <br />
      <img src={image5} className="imageClass" />
      <br />
      <p>
      Click <span className="bold-text">Save</span> and the new aggregated data set will replace the old one. You can see the original data set on top of the screen and the one after the data transformation at the bottom.

      If you want to edit the data transformation, you can click on it and access the <span className="bold-text">Properties </span>button at the bottom of the screen or just double-click on it. 

      You can also rename the data transformation by clicking on it's name and typing the new name.
      </p>
      
    </div>
  );
};

import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";
import image7 from "./images/Picture7.PNG";


export const DataFusion = () => {
  return (
    <div className="DataFusion">
      <h1 className="padding-Top">Data Fusion</h1>
      <p>
      Data fusion is a helpful tool to amalgamate two or more data sources. This can be utilized in cases where the different sources do not contain interlinked fields.



      In the 'Tables & Views' under data tab of ciPARTHENON select 'Fusion' after clicking the down arrow beside the Add New button.


      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      In the following window input a name for the fusion and any details which may be helpful or relevant, click create.
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
      In the next window drag and drop the relevant data sources from the left side, this will populate the window with the columns of the selected data sources.
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
      Columns which match between the datasets will automatically display a tick mark, if columns do not match automatically the unmatched columns will display an exclamation mark. To choose what should be done with the unmatched columns select the properties icon beside the exclamation mark.
      </p>
      <br />
      <img src={image4} className="imageClass" />
      <br />
      <p>
      By selecting the behavior drop down menu columns can be included or excluded from the resulting data fusion. If unmatched columns are included, rows from other data sets will populate blanks in the included column in the new fused data set.



      Once your Fusion has been configured, you can preview it by clicking the <span className="bold-text">Preview icon </span>on the Toolbar.
      </p>
      <br />
      <img src={image5} className="imageClass" />
      <img src={image6} className="imageClass" />
      <br />
      <p>
      In the options you can also add the name of the data sources to know which data come from which files:
      </p>
      <br />
      <img src={image7} className="imageClass" />
      <br />
      <p>
      Select save in the header tool bar when properties have been decided upon. The fused data set will now be available to use in dashboards.
      </p>
      <br />


      
    </div>
  );
};

import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";


export const TextSplitter = () => {
  return (
    <div className="TextSplitter">
      <h1 className="padding-Top">Text Splitter</h1>
      <p>
      Use this feature to convert a single row into multiple rows, one for each value in a column separated by a character.



    To use this transformation you should drag and drop the Text splitter option from the left side of the screen. A new window will open containing the <span className="bold-text">Column to Split </span>and the <span className="bold-text">Delimiter.</span>
      </p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      Choose a Name for the new column, from the dropdown list select the column to split and the delimeter used to seperate the values. Then click preview to display the result.
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
      Click Save and a new data set will be generated at the bottom of the screen. if you want too modify your Data Transformation, click on it and then access the Properties.
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />      

      
    </div>
  );
};

import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import { useHistory } from "react-router-dom";


export const MergeData = () => {
  let history = useHistory();
  return (
    <div className="mainPage">
      <h1 className="padding-Top">Merge Data</h1>
      <p>
      The Data Merger feature allows you to join multiple Data Sources into one single Data Source. 
      </p>
      <p><span className="bold-text">Case:</span></p>
      <p>You can combine rows from two or more data sources, based on a <span className="bold-text">common field between them,</span>as in the example below:
      </p>
      <img src={image1} className="imageClass" />

      <p>One table with the amount spended and one other with the target by account. We want to merge by the <span className="bold-text">'IdAccount'</span> and the <span className="bold-text">'Month'</span> to get a final table that looks like :</p>
      <br />
      <img src={image2} className="imageClass" />

      <p><li>If we want <span className="italic">only full rows, </span>we will use an Inner Join</li></p>
      <p><li>If we don't want any row where Target <span className="italic">is empty, </span>we will use Left Outer Join</li></p>
      <p><li>If we don't want any row where Amount <span className="italic">is empty, </span>we will use Right Outer Join</li></p>
      <br />
      <p><span className="bold-text">Tips:</span></p>

      <p>While creating a link you have the possibility to link between 3 types of join: </p>

      <p><li><span className="bold-text">Inner join- </span> It creates a new result table by combining ONLY column values from the two tables.</li></p>
      <p><li><span className="bold-text , red">Left Outer Join</span> – It creates a new result table that contains all records of the "left" table, even if the join-condition does not find any matching record in the "right" table </li></p>
      <p><li><span className="bold-text , blue">Right Outer Join</span> – It creates a new result table that contains all records of the "right" table, even if the join-condition does not find any matching record in the "left" table </li></p>
      <br />

      <img src={image3} className="imageClass" />

      <p>With the previous example:</p>

      <img src={image4} className="imageClass" />

      <h2 className="second-heading">In This Section</h2>

      <div>


      <li>
          <span
            className="pageLink"
            onClick={() => history.push("/StepsToFollow")}
          >
            Steps to follow 
          </span>
        </li>
      </div>
    </div>
  );
};

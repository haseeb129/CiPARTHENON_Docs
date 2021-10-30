import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";


export const ConnectionProperties = () => {
  return (
    <div className="ConnectionProperties">
      <h1 className="padding-Top">Connection properties</h1>
      <p>
      When selecting a created connection, an array of options will appear at the bottom of the screen. You can access the connection properties also by accessing the Edit button in the right side of the screen. The following screenshots are taken using a Facebook connection.
      </p>
      <br />
      <img src={image1} className="imageClass" />

      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        <br />
        In this tab, you can edit the name and/or description of your connection or delete it. In addition, you can test the connection or re-authorize it by clicking <span className="bold-text">Test Connection </span>or <span className="bold-text">Re-Authorize </span>
      </p>

      <img src={image2} className="imageClass" />
      <br />
      <p>
      In the Authentication tab, you can see the email associated with the facebook account.
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
        <li>
          <span className="bold-text">Connected Data</span>
        </li>
        </p>
        <br />
        <p>
        In this tab, you can see all the data files you have imported using the selected connection. You can perform <span className="bold-text">quick actions </span>to your data set or click the <span className="bold-text">Gearbox</span> to the right to access the <span className="bold-text">Data properties</span>.
        </p>
        <br />
        <img src={image4} className="imageClass" />
        <br />
        <p>
        <li>
          <span className="bold-text">Security</span>
        </li>
        <br />
        In this tab, you can see the users or the teams who have access to the connection. If you add them here, they will automatically have access to the connection.
        </p>
        <br />
        <img src={image5} className="imageClass" />
      
    </div>
  );
};

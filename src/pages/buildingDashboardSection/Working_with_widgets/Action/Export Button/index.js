import React from "react";
import image1 from "./images/Picture1.png";
import image2 from "./images/Picture2.png";
import image3 from "./images/Picture3.png";
import image4 from "./images/Picture4.png";
import "./index.css";
export const WhatIsciPARTHENON = () => {
  return (
    <div className="What is ciPARTHENON">
      <h1 className="padding-Top">What is ciPARTHENON</h1>
      <p>
        CiPARTHENON is a data management and visualization tool which allows you to manage and track all your data in one place. If you are looking into making informed decisions faster, you are at the right place. CiPARTHENON helps you turn data into information quickly with our live and interactive dashboards, self-updating reports and shared work spaces. </p>

      <p>
        <li>
          <span className="bold-text">ciPARTHENON helps you to react faster</span>
        </li>
        <br />
        CiPARTHENON always shows you the latest data.You are able to navigate through your information easily: dashboards favorites, drill downs etc. You will have a better look at your data with the right visualization.
      </p>

      <img src={image1} className="imageClass" />
      <br />
      <br />
      <br />
      <br />
      <p>
        <br />
        <br />
        <span className="bold-text"> You will stay focused! </span>
        <br />
        <br />
        CiPARTHENON takes care of business for you: automatic updates, automatic publications. Set up a schedule once and you never lose sight of your data history
      </p>
      <br />
      <br />

      <img src={image2} className="imageClass" />

      <p>
        <br />
        <br />


        <span className="bold-text"> Anytime, anywhere, you will be alerted! </span>
        <br />
        Any critical changes, you will be notified immediately.You can set up your team members to be alerted too.
        <br />
        <br />
        <br />
        Firstly, import all your data (desktop, web service, large databases). Connect to a large number of systems and databases such as Google Analytics, Facebook, Salesforce, Oracle, MySQL and files on Dropbox, Google Drive and many many more.Check <span className="bold-text">here</span> all our direct connectors!
        <br />
        <br />
      </p>
      <br />
      <img src={image3} clasNAme="imageClass" />

      <p>
      Schedule your refresh dates and times and CiPARTHENON takes care of the rest.
      Then mix it up the way you want: you can create multiple point merges and data transformations, you can design your data warehouse yourself.
      </p>
      <br />
      <img src={image4} className="imageClass" />


      <p>
      The next step is to set up the dashboards the way the users need to see them. Regroup all your users under your account and give them different access rights. Sharing the analyses with them is simple and intuitive. You can add comments to your live dashboards and share them with your colleagues or clients in a few clicks.
      </p>
      <br />
      <br />
      <p className="bold-text center Allign">Happy Dashboarding </p>

      
    </div>
  );
};

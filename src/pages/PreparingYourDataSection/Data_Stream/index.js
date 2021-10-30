import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";



export const DataStream = () => {
  return (
    <div className="DataStream">
      <h1 className="padding-Top">Data Stream</h1>
      <p>
      Data Stream allows you to move data out of ciPARTHENON into other destinations such as FTP/SFTP servers, Dropbox, Databases and Web Clients.

      Data Stream is available on Team and Enterprise only and target systems are tiered as well.



    A data stream is created based on a dataset, so you first need to prepare the data you want to send out.


      </p>
      <br />
      <p>
        <span className="bold-text">Create a Data Stream </span>
        <br />
        
        Once your data is ready, head over to the Main Menu - Data & Views - Data Streams
      </p>
      <br />
      <p>
        <span className="bold-text">Step 1 : Ad a new Data Stream</span>
        <br />
        Click the <span className="bold-text">'Add New'</span> button.
        <br />
        Choose a name, and add a description and tags if you wish.

      </p>
      <img src={image1} className="imageClass" />
      <br />
      <p>
      <span className="bold-text">Step 2 : Choose a Destination</span>
      <br />
      On the Destination tab, choose whether the data will be sent to FTP or via a web url.
      <br />
      <span className="bold-text">Option 1: Web Stream</span>
      <br />
      If working with a <span className="bold-text">Web stream</span>, you choose to customize the url and add an authentication method to it.

      This will provide protection for your Data Stream, as only users knowing the authentication code will be able to use it. You can pass Authentication through Header or Url.
      </p>
      <br />
      <img src={image2} className="imageClass" />
      <br />
      <p>
      This url can be used to pull data into an Excel file for example, or any other tool able to read data from a web url.

      From there, you can then update the data directly through the web stream.


      </p>
      
      <br />
      <p>
      <span className="bold-text">Option 2: SFTP / FTP</span>      
      <br />
      In order to send data to an FTP server, choose the according destination option.

      Choose the FTP connection through which to send data to from the list of <span className="bold-text">FTP connections </span>that you have created in your account.
      <br />
      You can choose the folder location, filename (using a formula like in the example below) and what to do with any duplicate files that might already exist in the location.
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
      <span className="bold-text">Step 3 : Choose a Format </span>
      <br />
      Data can be stream in one of the following formats: JSON, XML, Excel or CSV.
      </p>
      <br />
      <img src={image4} className="imageClass" />
      <br />
      <p>
        <span className="bold-text">Step 4 : Select the dataset to stream</span>
        <br />
        Head to the Data tab and choose the data to stream.
        You can stream any type of data: sources, views, merges, fusions.
        <br />
        Select which columns to add to the stream.
      </p>
      <img src={image5} className="imageClass" />
      <br />
      <p>
      Save, and you Data Stream is ready!



      To run the stream, simply head to the properties dropdown in the explorer and hit the 'Run' button.
      </p>
      <br />
      <img src={image6} className="imageClass" />
      

      
    </div>
  );
};

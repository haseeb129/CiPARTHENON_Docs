import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";
import image7 from "./images/Picture7.PNG";
export const VisualizeAndShareYourDashboards = () => {
  return (
    <div className="VisualizeAndShareYourDashboards">
      <h1 className="padding-Top">Visualize and Share Your Dashboard</h1>
      <p>
      Once your dashboard has been built, you can view and/or share your dashboard in several ways.
      </p>
       <p>
        <ol className="number list">
          <li><span className="bold-text">1)Within ciPARTHENON</span></li>
        </ol>
        </p>
        <p>To view a dashboard within the application, head into the <span className="bold-text">Dashboard Tab,</span> then click <span className="bold-text">View</span> beside the dashboard you want to view. To save a fixed state of the dashboard, you can opt to export the dashboard as an <span className="bold-text">Image</span> or <span className="bold-text">PDF</span>.</p>

        <img src={image1} className="imageClass" />
        <br/>
        <img src={image2} className="imageClass" />

        <p>
        Alternatively, if you wish to view the dashboard while in the <span className="bold-text">Dashboard Editor,</span> you can click the View icon found on the top black toolbar, then select the corresponding platform you wish to theoretically view the dashboards from (e.g. Laptop, Desktop, Tablet, etc.).
        </p>
        <br />
        <p>
        <span className="italic-text">Note that you can also choose export the dashboard from the <span className="bold-text italic-text">Dashboard Editor,</span> as well</span>
        </p>
        <img src={image3} className="imageClass" />

        <img src={image4} className="imageClass" />
        <br />

        <p>
        <ol className="number list">
          <li><span className="bold-text">2)Live Link</span></li>
        </ol>
        </p>
        <br />
        <p>
        Each dashboard has a unique HTML standalone URL once the setting is enabled. The LiveLink loads the dashboard when opened in another browser tab or window. As the owner of the dashboard, you can opt to send this URL to your colleagues/clients for easy accessibility.
        </p>

        <img src={image5} className="imageClass" />

        <p>
        Furthermore, if the LiveLink toolbar is enabled, you can also export the dashboard as an Image/PDF, send a copy via e-mail, or share through social medias such as <span className="bold-text">Facebook </span>and <span className="bold-text">Twitter</span>
        </p>
        <br />
        <img src={image6} className="imageClass" />

        <p>
        <ol className="number list">
          <li><span className="bold-text">3)Schedule</span></li>
        </ol>
        </p>
        <br />
        <p>
        If you wish to share the dashboard on a regular basis, it is best practice to create a <span className="bold-text">Publish Dashboard</span> task which sends the dashboard (either as an Image/PDF, or a LiveLink) to your respective colleagues/clients via e-mail.
         </p>

         <img src={image7} className="imageClass" />



      
     
      <p className="bold-text center Allign">Happy Dashboarding </p>

      
    </div>
  );
};

import React from "react";
import image1 from "./images/Picture1.PNG"
import "./index.css";
export const OrganizeYourDashboards = () => {
  return (
    <div className="OrganizeYourDashboards">
      <h1 className="padding-Top">Organize your dashboards</h1>
      <p>
      <span className="bold-text">Folder Organization</span>
      </p>
      <p>
      You can create sub-folders within your dashboard screen to help organize your dashboards into their respective groups. These sub-folders can be edited, moved, deleted and renamed as the need arises:
      </p>
      <br />

      <img src={image1} className="imageClass" />
      <br />

      <p>
      <span className="bold-text">Expand Navigation Panel</span>
      </p>
      <p>
      The navigation panel can be expanded by hovering the mouse icon over the top right corner of the navigation panel and clicking the expand icon
      </p>
      <br />
      <p>
      <span className="bold-text">Home Screen Dashboards</span>
      </p>
      <p>Specific dashboards can be chosen to  display in the home screen, by clicking the favourites star beside the dashboard name:
      </p>
      <br />

      
        
      


      
        
      <p className="bold-text center Allign">Happy Dashboarding </p>

      
    </div>
  );
};

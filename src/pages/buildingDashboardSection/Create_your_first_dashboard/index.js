import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import { useHistory } from "react-router-dom";

//import "./index.css";
export const CreateYourFirstDashboard = () => {
  let history = useHistory();
  return (
    <div className="mainPage">
      <h1 className="padding-Top">Create your first Dashboard</h1>
      <p>
      If you want to create a new dashboard, you have to access the Dashboards tab and click on the <span className="bold-text">Add New</span> button just below the menu bar. A new window will appear and you can start defining the first parameters of your dashboard: <span className="bold-text">name , description </span>and <span className="bold-text">tag.</span> You can choose the <span className="bold-text">theme, color scheme</span> a <span className="bold-text">background or image</span> the <span className="bold-text">Size </span>the <span className="bold-text">type of layout</span>  Click Create! and you will navigate to the dashboard work space.</p>
      <br />
      <img src={image1} className="imageClass" />
      <br />
      <p>
      n the left hand side of the screen you have all the widgets you can drag and drop in the dashboard area. 
      On top of the list, you have a search bar to quickly find a widget by its name. You also have a filter button to search a widget by category. 
      </p>
      <img src={image2} className="imageClass" />
      <br />
      <p>
      On the top right side of your screen, you have a toolbar from where you can access the dashboard properties. 
      </p>
      <br />
      <img src={image3} className="imageClass" />
      <br />
      <p>
      You can perform the following actions: 
      <br />
      - Zoom in/out
      <br/>
      - Preview dashboard
      <br/>
      - Work in the full screen mode
      <br />
      - Undo/Redo
      <br />
      -Paste
      <br/>
      - Custom color palette
      <br/>
      - Hide invisible object
      <br/>
      - Show grid and header in order to arrange the widgets easily 
      <br/>
      - Access the <div>
      <li>
          <span
            className="pageLink"
            onClick={() => history.push("/DashboardProperties")}
          >
            Dashboard Properties
          </span>
        </li>
        </div>
        <br/>
        - Print, Export, Save
      </p>


      
    </div>
  );
};

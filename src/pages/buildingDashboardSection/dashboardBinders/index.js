import React from "react";
import image1 from "./images/Picture1.png";
import image2 from "./images/Picture2.png";
import image3 from "./images/Picture3.png";
import image4 from "./images/Picture4.gif";
import image5 from "./images/Picture5.png";
import image6 from "./images/Picture6.gif";
import image7 from "./images/Picture7.png";
import "./index.css";
export const DashboardBinders = () => {
  return (
    <div className="dashboardBinders">
      <h1 className="padding-Top">Dashboard Binders</h1>
      <p>
        Dashboard Binders allow you to “bind” multiple dashboards together to
        keep you organized on a daily basis. With Dashboard Binders, you can
        view multiple dashboards simultaneously given its navigation
        capabilities.
      </p>

      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        <br />
        You can create a Dashboard Binder by heading into the
        <span className="bold-text"> Dashboard </span>
        tab, clicking the down arrow beside{" "}
        <span className="bold-text"> Add New </span>, followed by{" "}
        <span className="bold-text"> Create Binder. </span>.
        <br />
        <br />
        In the
        <span className="bold-text"> General </span>. setup, assign a name to
        the Dashboard Binder, then write a description and/or tags if needed.
      </p>

      <img src={image1} className="imageClass" />

      <p>
        <br />
        Afterwards, head into the
        <span className="bold-text"> Dashboards </span>section where you are
        required to select the dashboards to be included in the binder. It is
        important to note that dashboards can only be added one at a time.
      </p>

      <img src={image2} className="imageClass" />

      <p>
        <br />
        You may also adjust the aesthetics of your binder from the
        <span className="bold-text"> Tab Style </span>
        window.
      </p>

      <img src={image3} className="imageClass" />

      <p>
        <li>
          <span className="bold-text">Schedules & Alerts</span>
        </li>
        <br />
        In addition to publishing
        <span className="bold-text"> dashboards, </span>
        you can also publish
        <span className="bold-text"> dashboard binders </span>
        in addition to creating alerts for them. Feel free to view our
        <span className="bold-text"> Automation </span>
        section to learn more about
        <span className="bold-text"> Schedules & Alerts. </span>
      </p>

      <img src={image4} className="imageClass" />

      <p>
        <li>
          <span className="bold-text">Security:</span>
        </li>
        <br />
        Dashboard Binders follow security procedures that are similar to
        Dashboards themselves. You may add users/teams to the security list in
        order to give permission to edit, or restrict unauthorized users from
        viewing your content.
      </p>

      <img src={image5} className="imageClass" />

      <p>
        You can add users or teams to the two security lists. The right one
        allows the user to modify the visuals and other aspects of the Binder
        through Properties. The security list on the right grants the user the
        ability to view the binder.
        <br />
        <br />
        The binder security will overwrite any security settings that were
        previously set on the individual dashboards. This means that despite
        some dashboards are not shared with a user, as long as binder security
        is in use, then the Viewer users will have the ability to see those
        dashboards.
        <br />
        <br />
        However, Editors and Admins have the ability to select ‘Use security
        from Dashboards’, this maintains the permissions that were granted to
        the users in each individual dashboards inside the dashboard. This means
        that some users might not be able to see every single dashboards inside
        the binder.
      </p>
      <p>
        <li>
          <span className="bold-text">LiveLink:</span>
        </li>
        <br />
        Dashboard Binders may also be shared via the
        <span className="bold-text"> LiveLink </span>
        so that viewers can see multiple dashboards in real-time. After enabling
        the
        <span className="bold-text"> LiveLink </span>
        toggle, feel free to adjust the Format, Security, Toolbar, and Other
        Settings before sharing it with your viewers (do not forget to Save
      </p>

      <img src={image6} className="imageClass" />

      <p>
        <br />
        Once your settings are complete, feel free to use the LiveLink to see
        your first Dashboard Binder!
      </p>

      <img src={image7} className="imageClass" />

      <p className="bold-text centerAllign">Happy Dashboarding!</p>
    </div>
  );
};

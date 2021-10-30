import React from "react";
import image1 from "./images/Picture1.png";
import image2 from "./images/Picture2.png";
import image3 from "./images/Picture3.png";
import image4 from "./images/Picture4.png";
import image5 from "./images/Picture5.png";
import image6 from "./images/Picture6.png";
import image7 from "./images/Picture7.gif";
import image8 from "./images/Picture8.png";
import "./index.css";
export const DashboardProperties = () => {
  return (
    <div className="DashboardProperties">
      <h1 className="padding-Top">Dashboard Properties</h1>
      <p>
        When you select a dashboard, an array of options will appear at the
        bottom of the screen. Click on
        <span className="bold-text"> Properties </span>
        to adjust the settings for your
        <span className="bold-text"> Dashboard </span>
      </p>

      <p>
        <br />
        <li>
          <span className="bold-text">Properties</span>
        </li>
        <br />
        In this tab, you can perform the following actions:
        <ol className="numberedList">
          <li>1. Rename the Dashboard</li>
          <li>2. Write a Dashboard description</li>
          <li>3. Add a Tag</li>
          <li>
            4. Customize the Size (predefined/custom) and the Layout
            (Landscape/Portrait)
          </li>
          <li>5. Select the Theme</li>
          <li>6. Select the Background color/image</li>
        </ol>
        Click
        <span className="bold-text"> Save </span>
        to apply the changes.
      </p>

      <img src={image1} className="imageClass" />

      <p>
        <li>
          <span className="bold-text">Loading Panel</span>
        </li>
        <br />
        The
        <span className="bold-text"> Loading Panel </span>
        allows you to display a personalized message and icon while the widgets
        on your dashboard load. You can even upload your own gif to use in place
        of the loading icon.
        <br />
        Once all the widgets on the dashboard have loaded, the panel will remove
        itself and reveal your dashboard.
      </p>

      <img src={image2} className="imageClass" />

      <p>
        <li>
          <span className="bold-text">Schedules</span>
        </li>
        <br />
        You can view the
        <span className="bold-text"> schedules </span>
        and
        <span className="bold-text"> tasks </span>for the selected
        <span className="bold-text"> dashboard. </span>
        In case you do not have any schedules, you should go to the
        <span className="bold-text"> Schedules </span>
        page and
        <span className="bold-text"> Create a new Schedule. </span>
      </p>

      <img src={image3} className="imageClass" />

      <p>
        <li>
          <span className="bold-text">Alerts</span>
        </li>
        <br />
        The
        <span className="bold-text"> Alerts </span>
        option allows you to
        <span className="bold-text"> create an alert </span>
        in order to send a customized message to a user/group of users.
        <br />
        For example, if the
        <span className="italic-text"> expenses </span>
        exceed a<span className="italic-text"> budget </span>, a message can be
        sent to the manager alerting them by email.
      </p>

      <img src={image4} className="imageClass" />

      <p>
        <li>
          <span className="bold-text">History</span>
        </li>
        <br />
        In the
        <span className="bold-text"> history </span>
        section, you will be able to view all the previous versions of your
        dashboard. This is allowed via{" "}
        <span className="bold-text"> Enable History </span>
        option, by which version(s) of your dashboard will be stored each time
        you save it.
      </p>

      <img src={image5} className="imageClass" />

      <p>
        <li>
          <span className="bold-text">Security</span>
        </li>
        <br />
        In the
        <span className="bold-text"> security </span>
        section, you will be able to see all the users who have access to the
        selected dashboard.
        <br />
        In case you want to add other users and share the dashboard with them,
        simply type their name(s) in the
        <span className="bold-text"> Search bar, </span>
        select them and
        <span className="bold-text"> save </span>
        the changes .
      </p>

      <img src={image6} className="imageClass" />

      <p>
        <li>
          <span className="bold-text">Live Link</span>
        </li>
        <br />
        The
        <span className="bold-text"> Live Link </span>
        is an easy way to share the dashboard. You can generate an
        <span className="bold-text"> HTML link or an image </span>
        that can be automatically sent to multiple users simultaneously.
        <br />
        <br />
        Unlike the image display, the HTML version is interactive, which means
        your analysis responds to filters and can be refreshed every time your
        data set is updated.
        <br />
        <br />
        Two links will be generated – a
        <span className="bold-text"> Live Link </span>
        and an
        <span className="bold-text"> Iframe </span>
        <ol className="numberedList">
          <li>
            1. The <span className="bold-text"> Live Link </span>is useful if
            you want to share the dashboard with another person only by sending
            the link. Depending on the security permissions, the user can open
            the dashboard into a browser tab and interact with the dashboard.
          </li>
          <li>
            2. The <span className="bold-text"> Iframe </span>is useful if you
            need to integrate the dashboard directly into a website.
          </li>
        </ol>
        There are also security settings for your Live Link which can restrict
        unauthorized users from accessing your dashboard, the settings are as
        follows:
        <ol className="numberedList">
          <li>
            1. <span className="bold-text"> Public : </span>Anyone with the
            <span className="bold-text"> Live Link </span>
            can view the dashboard and data
          </li>
          <li>
            2. <span className="bold-text"> Password : </span>Users with your
            password can view the dashboard and data.
          </li>
          <li>
            3. <span className="bold-text"> Private : </span>Users enlisted on
            the Dashboard's security settings can view the dashboard and data
          </li>
        </ol>
        The
        <span className="bold-text"> Live Link </span>
        feature also comes with a<span className="bold-text"> Toolbar </span>to
        conveniently comment, export, share, e-mail, or print your
        <span className="bold-text"> dashboard </span>
      </p>

      <img src={image7} className="imageClass" />

      <p>
        <li>
          <span className="bold-text">Action</span>
        </li>
        <br />
        If you want to export, print, duplicate, add to binder, move, delete, or
        rebind the dashboard, you have to access the
        <span className="bold-text">Actions</span>
        menu to the right of the dashboard. To access it click on the
        <span className="bold-text">down arrow </span>beside the
        <span className="bold-text">gear </span>icon.
      </p>

      <img src={image8} className="imageClass" />
    </div>
  );
};

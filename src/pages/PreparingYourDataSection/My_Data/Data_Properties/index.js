import React from "react";
import image1 from "./images/Picture1.png";
import image2 from "./images/Picture2.png";
import image3 from "./images/Picture3.png";
import image4 from "./images/Picture4.png";
import image5 from "./images/Picture5.png";
import image6 from "./images/Picture6.png";
import image7 from "./images/Picture7.png";
import image8 from "./images/Picture8.png";
import image9 from "./images/Picture9.gif";
import image10 from "./images/Picture10.png";

export const DataProperties = () => {
  return (
    <div className="dataProperties">
      <h1 className="padding-Top">Data properties</h1>
      <p>
        To the right of a data table you can find a dropdown menu for all the
        actions you can do with the data table.
      </p>
      <br />
      <img src={image1} className="imageClass" />

      <p>
        <li>
          <span className="bold-text">Properties</span>
        </li>
        <br />
        In this section, you will be able to visualize the columns and the data
        values. You can change the
        <span className="bold-text"> Name </span>
        of your data set, add a<span className="bold-text"> description </span>
        or a<span className="bold-text"> tag </span>. The tag is useful for the
        purpose of a quick identification of your data set when searching for it
        in the
        <span className="bold-text"> Search Bar </span>. You can search by
        <span className="bold-text"> name, description, or tag. </span>
      </p>

      <p>
        You can also see details about the user who imported the data and the
        timelines.
      </p>
      <img src={image2} className="imageClass" />

      <p>
        <li>
          <span className="bold-text">Schema</span>
        </li>
        <br />
        In this section, your will be able to change the
        <span className="bold-text"> display name </span>
        of each column or hide some
        <span className="bold-text"> columns. </span>
        You will also be able to choose the
        <span className="bold-text"> primary key </span>in your data in order to
        use the
        <span className="bold-text"> Update </span>option in the
        <span className="bold-text"> Schedules. </span>
      </p>

      <img src={image3} className="imageClass" />

      <p>
        <li>
          <span className="bold-text">Usage</span>
        </li>
        <br />
        In this section, you can see a list of related data sets (i.e. Views,
        Merges, Fusions), dashboards, and any schedules or alerts that
        incorporate this data set.
      </p>

      <img src={image4} className="imageClass" />

      <p>
        <li>
          <span className="bold-text">Schedules</span>
        </li>
        <br />- If your data source was uploaded through a data connection, you
        can see the
        <span className="bold-text"> schedules </span>
        you created for this data source. You can change the schedules in the
        <span className="bold-text"> Manage Schedules </span>
        section.
      </p>

      <img src={image5} className="imageClass" />

      <p>
        <li>
          <span className="bold-text">History</span>
        </li>
        <br />
        In this section, you can see the
        <span className="bold-text"> history </span>
        of your data source, <span className="bold-text"> enable </span>
        or <span className="bold-text"> disable </span>the history and choose
        the
        <span className="bold-text"> number of versions </span>you want to keep.
        You can also clear the storage space used by these versions by clicking
        in the
        <span className="bold-text"> Clear All Except Latest Version </span>
        button.
      </p>

      <img src={image6} className="imageClass" />

      <p>
        <li>
          <span className="bold-text">Security</span>
        </li>
        <br />
        In the
        <span className="bold-text"> security </span>
        section, you will be able to see all the users who have access to the
        data set.
        <br />
        In case you want to add other users and share the data with them, simply
        type their name, select them, then
        <span className="bold-text"> save </span>the changes.
      </p>

      <p>
        As the owner of the data set, you can
        <span className="bold-text"> Enable/Disable </span>the
        <span className="bold-text"> Editing </span>
        option so that the user can only see the data set or do further
        transformations on it.
      </p>

      <img src={image7} className="imageClass" />

      <p>
        <li>
          <span className="bold-text">Cache</span>
        </li>
        <br />
        In the cache tab, you can decide to cache your data source to ensure
        optimal performance on your dashboard.
      </p>
      <p>Note: Only Views, Merges, and Fusions can be cached</p>
      <a>You can learn more about data caching here.</a>
      <p>
        <br />
      </p>
      <img src={image8} className="imageClass" />

      <p>
        <li>
          <span className="bold-text">Live Link</span>
        </li>
        <br />
        The
        <span className="bold-text"> Live Link </span>
        is an easy way to share the data. It is useful if you want to share the
        data set with another person only by sending a link.
        <br />
        You can generate an HTML link for the data you are sharing or a link to
        download the data as a CSV.
        <br />
        Depending on the security permissions, the user can open the data into a
        browser tab. Furthermore, the user can Copy – Paste it (CTRL+A, CTRL+C,
        CTRL+V) into an Excel file if needed.
        <br />
        You have 3 types of permissions you need to choose from in order to
        share the data in a secured way:
        <br />
        <ol className="numberedList">
          <li>
            1. <span className="bold-text"> Public : </span>Anyone can access
            the link
          </li>
          <li>
            2. <span className="bold-text"> Password : </span>Anyone can access
            the link, but they will be asked for a password.
          </li>
          <li>
            3. <span className="bold-text"> Private : </span>Only the owner of
            the data and the people in the security list have access to the link
          </li>
        </ol>
        It can also be scheduled to refreshed every time when the data changes
        or during specific time intervals.
      </p>

      <img src={image9} className="imageClass" />

      <p>
        <li>
          <span className="bold-text">Tasks</span>
        </li>
        <br />
        In the Tasks Tab you can see the logs of all tasks associated with the
        data table.
      </p>

      <img src={image10} className="imageClass" />
    </div>
  );
};

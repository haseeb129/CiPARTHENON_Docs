import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { stylSelected } from "../../../helper/sidebar/Documentation";

const SideBar = (props) => {
  const [selectedMenutitle, setSelectedMenutitle] = useState(
    props.selectedMenu
  );

  useEffect(() => {
    setSelectedMenutitle(props.selectedMenu);
  }, [props.selectedMenu]);

  useEffect(() => {
    props.scrollTop();
  }, [selectedMenutitle]);

  const handleSelection = (title) => {
    setSelectedMenutitle(title);
  };

  return (
    <div className="sidebar-wrapper">
      {props?.sideBarMenu &&
        props?.sideBarMenu?.map((element, index) => {
          return (
            <MenuItem
              style={stylSelected}
              selectedMenutitle={selectedMenutitle}
              handleSelection={handleSelection}
              key={`${element.title}${index}`}
              title={element.title}
              child={element.child}
              link={element.link}
              isMenuExpanded={element.isMenuExpanded}
            />
          );
        })}
    </div>
  );
};

export default SideBar;

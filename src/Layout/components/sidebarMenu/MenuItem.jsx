import React, { useState } from "react";
import View from "./View";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import { useHistory } from "react-router-dom";

const MenuItem = (props) => {
  let history = useHistory();

  const [isExpanded, setIsExpand] = useState(props.isMenuExpanded);
  const handleExpand = () => {
    setIsExpand(!isExpanded);
  };

  const changePage = (url) => {
    props.handleSelection(props.title);
    history.push(url);
  };

  return (
    <div style={{ paddingLeft: "10px" }}>
      {props.child.length > 0 && (
        <>
          <div
            onClick={handleExpand}
            className={props.selectedMenutitle == props.title ? "selected" : ""}
          >
            <View
              title={props.title}
              icon={
                isExpanded ? (
                  <RemoveCircleOutlineIcon
                    fontSize="small"
                    className={
                      props.selectedMenutitle == props.title
                        ? "selected"
                        : "silver-color fullHover"
                    }
                  />
                ) : (
                  <AddCircleOutlineIcon
                    fontSize="small"
                    className={
                      props.selectedMenutitle == props.title
                        ? "selected"
                        : "silver-color fullHover"
                    }
                  />
                )
              }
              link={props.link}
              changePage={changePage}
            />
          </div>
          {isExpanded &&
            props.child.map((element, index) => {
              return (
                <span key={`${element.title}${index}`}>
                  <MenuItem
                    title={element.title}
                    child={element.child}
                    link={element.link}
                    isMenuExpanded={element.isMenuExpanded}
                    selectedMenutitle={props.selectedMenutitle}
                    handleSelection={props.handleSelection}
                  />
                </span>
              );
            })}
        </>
      )}

      {props.child.length == 0 && (
        <div
          className={props.selectedMenutitle == props.title ? "selected" : ""}
        >
          <View
            title={props.title}
            icon={
              <InsertDriveFileIcon
                fontSize="small"
                className={
                  props.selectedMenutitle == props.title
                    ? "selected"
                    : "silver-color fullHover"
                }
              />
            }
            link={props.link}
            changePage={changePage}
          />
        </div>
      )}
    </div>
  );
};

export default MenuItem;

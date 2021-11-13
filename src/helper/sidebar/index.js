import _ from "lodash";

export const stylSelected = {
  color: "red",
};

export var selectedMenuTitle = "Getting Started";

export const fetchListOfMenu = (sideBarMenuList, pathname) => {
  var ans = [];

  for (const element of sideBarMenuList) {
    ans = getParent(element, pathname);
    if (_.isEmpty(ans)) continue;
    break;
  }
  return { updatedList: sideBarMenuList, selectedMenuTitle };
};

function getParent(model, title) {
  var path,
    item = model;

  if (!model || typeof model !== "object") {
    return;
  }

  if (model.link === title) {
    model.isMenuExpanded = true;
    selectedMenuTitle = model.title;
    return [item];
  }

  (model.child || []).some((child) => {
    path = getParent(child, title);
    return path;
  });

  if (path) {
    model.isMenuExpanded = true;
    return [{ ...item, isMenuExpanded: true }, ...path];
  }
}

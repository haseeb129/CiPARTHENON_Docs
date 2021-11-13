import { sideBarMenu as sideBarDocumentation } from "../sidebar/Documentation/sidebarContent";
import { sideBarMenu as sideBarFAQ } from "../sidebar/FAQ/sidebarContent";

export const getSearchBarSuggestions = () => {
  const allElements = [];

  flattenArray(sideBarDocumentation, allElements);
  flattenArray(sideBarFAQ, allElements);
  return allElements;
};

const flattenArray = function (data, allElements) {
  data.reduce(function iter(r, a) {
    if (a === null) {
      return r;
    }
    if (Array.isArray(a)) {
      return a.reduce(iter, r);
    }
    if (typeof a === "object") {
      allElements.push(a);
      return Object.keys(a)
        .map((k) => a[k])
        .reduce(iter, r);
    }
  }, []);
};

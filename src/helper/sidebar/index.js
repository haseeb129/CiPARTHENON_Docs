const _ = require("lodash");

export const sideBarMenu = [
  {
    title: "Getting Started",
    link: "/GettingStarted",
    isMenuExpanded: false,

    child: [
      {
        title: "What is ciPARTHENON",
        link: "/CIPARTHENON",
        isMenuExpanded: false,
        child: [],
      },
    ],
  },

  {
    title: "Accessing your Dashboards",
    link: "/AccessingDashboards",
    isMenuExpanded: false,
    child: [
      {
        title: "Organize your dashboards",
        link: "/OrganizeYourDashboards",
        isMenuExpanded: false,
        child: [
          {
            title: "Dasboard Properties",
            link: "/DashboardProperties",
            isMenuExpanded: false,
            child: [],
          },
        ],
      },

      {
        title: "Rebind your dashboards",
        link: "/RebindYourDashboards",
        isMenuExpanded: false,
        child: [],
      },

      {
        title: "Visualize and Share your dashboards",
        link: "/VisualizeAndShareYourDashboards",
        isMenuExpanded: false,
        child: [],
      },
    ],
  },
  {
    title: "Preparing your Data",
    link: "/PreparingYourData",
    isMenuExpanded: false,
    child: [
      {
        title: "Before Importing the data",
        link: "/BeforeImportingTheData",
        isMenuExpanded: false,
        child: [],
      },

      {
        title: "My Data",
        link: "/MyData",
        isMenuExpanded: false,
        child: [
          {
            title: "Data Preview",
            link: "/DataPreview",
            isMenuExpanded: false,
            child: [],
          },
          {
            title: "Data Properties",
            link: "/DataProperties",
            isMenuExpanded: false,
            child: [],
          },
        ],
      },
      {
        title: "Create Data",
        link: "/CreateData",
        isMenuExpanded: false,
        child: [
          {
            title: "Steps need to follow",
            link: "/stepsToFollow",
            isMenuExpanded: false,
            child: [],
          },
        ],
      },
      {
        title: "Create View",
        link: "/CreateView",
        isMenuExpanded: false,
        child: [],
      },
      {
        title: "Merge Data",
        link: "/MergeData",
        isMenuExpanded: false,
        child: [
          {
            title: "Steps to follow",
            link: "/StepsToFollow",
            isMenuExpanded: false,
            child: [],
          },
        ],
      },
      {
        title: "Data refresh methods",
        link: "/DataRefreshMethods",
        isMenuExpanded: false,
        child: [],
      },
      {
        title: "Data Transformation",
        link: "/DataTransformation",
        isMenuExpanded: false,
        child: [
          {
            title: "Aggregated Column",
            link: "/AggregatedColumn",
            isMenuExpanded: false,
            child: [],
          },
          {
            title: "Calculated Column",
            link: "/CalculatedColumn",
            isMenuExpanded: false,
            child: [],
          },
          {
            title: "Text splitter",
            link: "/TextSplitter",
            isMenuExpanded: false,
            child: [],
          },
          {
            title: "Filer",
            link: "/Filter",
            isMenuExpanded: false,
            child: [],
          },
          {
            title: "Find and replace",
            link: "/FindAndReplace",
            isMenuExpanded: false,
            child: [],
          },
          {
            title: "Grouping",
            link: "/Grouping",
            isMenuExpanded: false,
            child: [],
          },
          {
            title: "Normalize",
            link: "/Normalize",
            isMenuExpanded: false,
            child: [],
          },
          {
            title: "PivotData",
            link: "/PivotData",
            isMenuExpanded: false,
            child: [],
          },
          {
            title: "Standardize",
            link: "/Standardize",
            isMenuExpanded: false,
            child: [],
          },
          {
            title: "Update",
            link: "/Update",
            isMenuExpanded: false,
            child: [],
          },
          {
            title: "UnpivotData",
            link: "/UnpivotData",
            isMenuExpanded: false,
            child: [],
          },
        ],
      },
      {
        title: "My Connections",
        link: "/MyConnections",
        isMenuExpanded: false,
        child: [
          {
            title: "Connection Properties",
            link: "/ConnectionProperties",
            isMenuExpanded: false,
            child: [],
          },
          {
            title: "Connection Broker",
            link: "/ConnectionBroker",
            isMenuExpanded: false,
            child: [],
          },
        ],
      },
      {
        title: "Data Fusion",
        link: "/DataFusion",
        isMenuExpanded: false,
        child: [],
      },
      {
        title: "Data Stream",
        link: "/DataStream",
        isMenuExpanded: false,
        child: [],
      },
    ],
  },
  {
    title: "Building A Dashboard",
    link: "/BuildingADashboard",
    isMenuExpanded: false,
    child: [
      {
        title: "Create your first Dashboard",
        link: "/CreateYourFirstDashboard",
        isMenuExpanded: false,
        child: [],
      },
      {
        title: " Dashboard Binders",
        link: "/DashboardBinders",
        isMenuExpanded: false,
        child: [],
      },
      {
        title: "Filter your Widgets",
        link: "/FilterYourWidgets",
        isMenuExpanded: false,
        child: [
          {
            title: "Global Filter",
            link: "/GlobalFilter",
            isMenuExpanded: false,
            child: [],
          },
          {
            title: "Using Data Selectors",
            link: "/UsingDataSelectors",
            isMenuExpanded: false,
            child: [],
          },
          {
            title: "Using Inputs",
            link: "/UsingInputs",
            isMenuExpanded: false,
            child: [
              {
                title: "Using Numeric Inputs",
                link: "/UsingNumericInputs",
                isMenuExpanded: false,
                child: [],
              },
              {
                title: "Using Text Inputs",
                link: "/UsingTextInputs",
                isMenuExpanded: false,
                child: [],
              },
            ],
          },
          {
            title: "Using Lists",
            link: "/UsingLists",
            isMenuExpanded: false,
            child: [
              {
                title: "Using Formula",
                link: "/UsingFormula",
                isMenuExpanded: false,
                child: [],
              },
              {
                title: "Using Widgets",
                link: "/UsingWidgets",
                isMenuExpanded: false,
                child: [],
              },
            ],
          },
          {
            title: "Working with widgets",
            link: "/WorkingWithWidgets",
            isMenuExpanded: false,
            child: [],
          },
        ],
      },
    ],
  },
];

export const stylSelected = {
  color: "red",
};

export const fetchListOfMenu = (sideBarMenuList, pathname) => {
  var ans = [];

  for (const element of sideBarMenuList) {
    ans = getParent(element, pathname);
    if (_.isEmpty(ans)) continue;
    break;
  }
  return sideBarMenuList;
};

function getParent(model, title) {
  var path,
    item = model;

  if (!model || typeof model !== "object") {
    return;
  }

  if (model.link === title) {
    model.isMenuExpanded = true;
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

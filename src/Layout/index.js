import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebarMenu";
import { Row, Col, Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import { AccessingDashboards } from "../pages/accessingDashboardSection";
import { OrganizeYourDashboards } from "../pages/accessingDashboardSection/Organize_your_dashboards";
import { VisualizeAndShareYourDashboards } from "../pages/accessingDashboardSection/Visualize_and_Share_Your_Dashboards";
import { RebindYourDashboards } from "../pages/accessingDashboardSection/Rebind your dashboards";
import { DashboardProperties } from "../pages/accessingDashboardSection/Organize_your_dashboards/Dashboard_Properties";
import { PreparingYourData } from "../pages/PreparingYourDataSection";
import { BeforeImportingTheData } from "../pages/PreparingYourDataSection/Before_Importing_the_data";
import { MyData } from "../pages/PreparingYourDataSection/My_Data";
import { DataPreview } from "../pages/PreparingYourDataSection/My_Data/Data_Preview";
import { DataProperties } from "../pages/PreparingYourDataSection/My_Data/Data_Properties";
import { CreateData } from "../pages/PreparingYourDataSection/Create_Data";
import { StepsNeedToFollow } from "../pages/PreparingYourDataSection/Create_Data/Steps_need_to_follow";
import { CreateView } from "../pages/PreparingYourDataSection/Create_View";
import { MergeData } from "../pages/PreparingYourDataSection/Merge_Data";
import { StepsToFollow } from "../pages/PreparingYourDataSection/Merge_Data/Steps_to_follow_2";
import { DataRefreshMethods } from "../pages/PreparingYourDataSection/Data_refresh_methods";
import { DataTransformation } from "../pages/PreparingYourDataSection/Data_Transformation";
import { AggregatedColumn } from "../pages/PreparingYourDataSection/Data_Transformation/Aggregated_Column";
import { CalculatedColumn } from "../pages/PreparingYourDataSection/Data_Transformation/Calculated_Column";
import { TextSplitter } from "../pages/PreparingYourDataSection/Data_Transformation/Text_Splitter";
import { Filter } from "../pages/PreparingYourDataSection/Data_Transformation/Filter";
import { FindAndReplace } from "../pages/PreparingYourDataSection/Data_Transformation/Find_and_Replace";
import { Grouping } from "../pages/PreparingYourDataSection/Data_Transformation/Grouping";
import { Normalize } from "../pages/PreparingYourDataSection/Data_Transformation/Normalize";
import { PivotData } from "../pages/PreparingYourDataSection/Data_Transformation/Pivot_Data";
import { Standardize } from "../pages/PreparingYourDataSection/Data_Transformation/Standardize";
import { UnpivotData } from "../pages/PreparingYourDataSection/Data_Transformation/Unpivot_Data";
import { Update } from "../pages/PreparingYourDataSection/Data_Transformation/Update";
import { MyConnections } from "../pages/PreparingYourDataSection/My_Connections";
import { ConnectionProperties } from "../pages/PreparingYourDataSection/My_Connections/Connection Properties";
import { ConnectionBroker } from "../pages/PreparingYourDataSection/My_Connections/Connection Broker";
import { DataFusion } from "../pages/PreparingYourDataSection/Data_Fusion";
import { GettingStarted } from "../pages/gettingStartedSection";
import { CIPARTHENON } from "../pages/gettingStartedSection/What_is_ciPARTHENON";
import { DataStream } from "../pages/PreparingYourDataSection/Data_Stream";
import { BuildingADashboard } from "../pages/buildingDashboardSection";
import { CreateYourFirstDashboard } from "../pages/buildingDashboardSection/Create_your_first_dashboard";
import { DashboardBinders } from "../pages/buildingDashboardSection/dashboardBinders";
import { FilterYourWidgets } from "../pages/buildingDashboardSection/Filter_your_widgets";
import { ComingSoon } from "../pages/comingSoon";
import { useLocation, Redirect } from "react-router-dom";
import { sideBarMenu, fetchListOfMenu } from "../helper/sidebar";
import { scroller, Element } from "react-scroll";

export const Layout = (props) => {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState("");
  const [sideBarMenuList, setSideBarMenu] = useState([]);

  useEffect(() => {
    const { updatedList, selectedMenuTitle } = fetchListOfMenu(
      sideBarMenu,
      location.pathname
    );
    setSideBarMenu(updatedList);
    setSelectedMenu(selectedMenuTitle);
  }, []);

  const scrollTop = () => {
    scroller.scrollTo("myScrollToElement", {
      duration: 0,
      delay: 0,
      smooth: true,
      containerId: "right-column-id",
      offset: 0,
    });
  };

  return (
    <div>
      <Header style={{ height: "90px" }} />

      <Container fluid style={{ height: "100%" }}>
        <Row style={{ height: "88vh" }}>
          <Col xs={5} md={5} lg={4} xl={4}>
            <Sidebar
              location={location.pathname}
              sideBarMenu={sideBarMenuList}
              selectedMenu={selectedMenu}
              scrollTop={scrollTop}
            />
          </Col>
          <Col
            xs={7}
            md={7}
            lg={8}
            xl={8}
            className="right-column"
            id="right-column-id"
          >
            <Element name="myScrollToElement">
              <Switch>
                <Route
                  exact
                  path="/GettingStarted"
                  render={(props) => <GettingStarted {...props} />}
                />

                <Route
                  exact
                  path="/AccessingDashboards"
                  render={(props) => <AccessingDashboards {...props} />}
                />

                <Route
                  exact
                  path="/OrganizeYourDashboards"
                  render={(props) => <OrganizeYourDashboards {...props} />}
                />
                <Route
                  exact
                  path="/DashboardProperties"
                  render={(props) => <DashboardProperties {...props} />}
                />
                <Route
                  exact
                  path="/RebindYourDashboards"
                  render={(props) => <RebindYourDashboards {...props} />}
                />
                <Route
                  exact
                  path="/VisualizeAndShareYourDashboards"
                  render={(props) => (
                    <VisualizeAndShareYourDashboards {...props} />
                  )}
                />
                <Route
                  exact
                  path="/PreparingYourData"
                  render={(props) => <PreparingYourData {...props} />}
                />
                <Route
                  exact
                  path="/BeforeImportingTheData"
                  render={(props) => <BeforeImportingTheData {...props} />}
                />
                <Route
                  exact
                  path="/MyData"
                  render={(props) => <MyData {...props} />}
                />
                <Route
                  exact
                  path="/DataPreview"
                  render={(props) => <DataPreview {...props} />}
                />
                <Route
                  exact
                  path="/DataProperties"
                  render={(props) => <DataProperties {...props} />}
                />

                <Route
                  exact
                  path="/CreateData"
                  render={(props) => <CreateData {...props} />}
                />

                <Route
                  exact
                  path="/StepsNeedToFollow"
                  render={(props) => <StepsNeedToFollow {...props} />}
                />

                <Route
                  exact
                  path="/CreateView"
                  render={(props) => <CreateView {...props} />}
                />

                <Route
                  exact
                  path="/MergeData"
                  render={(props) => <MergeData {...props} />}
                />

                <Route
                  exact
                  path="/StepsToFollow"
                  render={(props) => <StepsToFollow {...props} />}
                />

                <Route
                  exact
                  path="/DataRefreshMethods"
                  render={(props) => <DataRefreshMethods {...props} />}
                />

                <Route
                  exact
                  path="/DataTransformation"
                  render={(props) => <DataTransformation {...props} />}
                />

                <Route
                  exact
                  path="/AggregatedColumn"
                  render={(props) => <AggregatedColumn {...props} />}
                />

                <Route
                  exact
                  path="/CalculatedColumn"
                  render={(props) => <CalculatedColumn {...props} />}
                />

                <Route
                  exact
                  path="/TexSplitter"
                  render={(props) => <TextSplitter {...props} />}
                />

                <Route
                  exact
                  path="/Filter"
                  render={(props) => <Filter {...props} />}
                />

                <Route
                  exact
                  path="/FindAndReplace"
                  render={(props) => <FindAndReplace {...props} />}
                />

                <Route
                  exact
                  path="/Grouping"
                  render={(props) => <Grouping {...props} />}
                />

                <Route
                  exact
                  path="/Normalize"
                  render={(props) => <Normalize {...props} />}
                />

                <Route
                  exact
                  path="/PivotData"
                  render={(props) => <PivotData {...props} />}
                />

                <Route
                  exact
                  path="/UnpivotData"
                  render={(props) => <UnpivotData {...props} />}
                />

                <Route
                  exact
                  path="/Standardize"
                  render={(props) => <Standardize {...props} />}
                />

                <Route
                  exact
                  path="/Update"
                  render={(props) => <Update {...props} />}
                />

                <Route
                  exact
                  path="/MyConnections"
                  render={(props) => <MyConnections {...props} />}
                />

                <Route
                  exact
                  path="/ConnectionBroker"
                  render={(props) => <ConnectionBroker {...props} />}
                />

                <Route
                  exact
                  path="/ConnectionProperties"
                  render={(props) => <ConnectionProperties {...props} />}
                />

                <Route
                  exact
                  path="/DataFusion"
                  render={(props) => <DataFusion {...props} />}
                />

                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Redirect to="GettingStarted" {...props} />
                  )}
                />

                <Route
                  exact
                  path="/CIPARTHENON"
                  render={(props) => <CIPARTHENON {...props} />}
                />

                <Route
                  exact
                  path="/DataStream"
                  render={(props) => <DataStream {...props} />}
                />

                <Route
                  exact
                  path="/BuildingADashboard"
                  render={(props) => <BuildingADashboard {...props} />}
                />

                <Route
                  exact
                  path="/CreateYourFirstDashboard"
                  render={(props) => <CreateYourFirstDashboard {...props} />}
                />

                <Route
                  exact
                  path="/DashboardBinders"
                  render={(props) => <DashboardBinders {...props} />}
                />

                <Route
                  exact
                  path="/FilterYourWidgets"
                  render={(props) => <FilterYourWidgets {...props} />}
                />

                <Route
                  exact
                  path="/tutorials"
                  render={(props) => <ComingSoon {...props} />}
                />

                <Route
                  exact
                  path="/apireference"
                  render={(props) => <ComingSoon {...props} />}
                />
                <Route
                  exact
                  path="/faq"
                  render={(props) => <ComingSoon {...props} />}
                />
                <Route
                  exact
                  path="/releasenotes"
                  render={(props) => <ComingSoon {...props} />}
                />
              </Switch>
            </Element>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

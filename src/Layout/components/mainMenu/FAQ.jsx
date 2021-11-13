import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  useLocation,
  Redirect,
  useRouteMatch,
  Route,
  Switch,
} from "react-router-dom";
import Sidebar from "../sidebarMenu";
import { scroller, Element } from "react-scroll";
import { AccessingDashboards } from "../../../pages/accessingDashboardSection";
import { GettingStarted } from "../../../pages/gettingStartedSection";
import { OrganizeYourDashboards } from "../../../pages/accessingDashboardSection/Organize_your_dashboards";
import { DashboardProperties } from "../../../pages/accessingDashboardSection/Organize_your_dashboards/Dashboard_Properties";
import { fetchListOfMenu } from "../../../helper/sidebar";
import { sideBarMenu } from "../../../helper/sidebar/FAQ/sidebarContent";

const FAQ = (props) => {
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

  const { path } = useRouteMatch();

  return (
    <div>
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
                  path={`${path}/`}
                  render={(props) => (
                    <Redirect to={`${path}/GettingStarted`} {...props} />
                  )}
                />
                <Route
                  exact
                  path={`${path}/GettingStarted`}
                  render={(props) => <GettingStarted {...props} />}
                />

                <Route
                  exact
                  path={`${path}/AccessingDashboards`}
                  render={(props) => <AccessingDashboards {...props} />}
                />

                <Route
                  exact
                  path={`${path}/OrganizeYourDashboards`}
                  render={(props) => <OrganizeYourDashboards {...props} />}
                />
                <Route
                  exact
                  path={`${path}/DashboardProperties`}
                  render={(props) => <DashboardProperties {...props} />}
                />
              </Switch>
            </Element>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQ;

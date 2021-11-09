import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Switch, Redirect } from "react-router-dom";
import Documentation from "./components/mainMenu/Documentation";
import FAQ from "./components/mainMenu/FAQ";

export const Layout = (props) => {
  return (
    <div>
      <Header style={{ height: "90px" }} />

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Redirect to="documentation" {...props} />}
        />
        <Route path="/documentation" component={Documentation} />
        <Route path="/FAQ" component={FAQ} />
      </Switch>

      <Footer />
    </div>
  );
};

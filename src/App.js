import React, { useLayoutEffect } from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import { Layout } from "./Layout";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

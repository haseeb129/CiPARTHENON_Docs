import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
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

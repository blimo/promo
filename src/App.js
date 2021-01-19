import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import routesList from "./routes";
// import "../node_modules/font-awesome/"

export default function App() {
  let routes = [];
  for (let path in routesList) {
    routes.push(
      <Route
        exact
        key={path}
        path={path}
        render={() => {
          return <>{routesList[path]}</>;
        }}
      />
    );
  }
  return (
    <div className="App">
      <Router>{routes}</Router>
    </div>
  );
}

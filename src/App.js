import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { ApplicationRoutes } from "./routers/ApplicationRoutes";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/users">User</Link>
        </header>

        <ApplicationRoutes />
      </div>
    );
  }
}

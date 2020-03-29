import React from "react";
import { Route } from "react-router-dom";
import { Home, UsersTable, UserView } from "../components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/users/" component={UsersTable} />
    <Route path="/user/:name" component={UserView} />
  </>
);

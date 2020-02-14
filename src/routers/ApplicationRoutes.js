import React from "react";
import { Route } from "react-router-dom";
import { Home, Users, UserView } from "../components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/users/" component={Users} />
    <Route path="/user/:name" component={UserView} />
  </>
);

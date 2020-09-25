import React, { useState } from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "./components/RouteWithLayout";
import { Main as MainLayout } from "./layouts/Main";

import { Home as HomeView, About as AboutView } from "./views";

export default function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={AboutView}
        exact
        layout={MainLayout}
        path="/about"
      />
      <RouteWithLayout
        component={View}
        exact
        layout={MainLayout}
        path="/gallery"
      />
      <RouteWithLayout
        component={View}
        exact
        layout={MainLayout}
        path="/thoughLeadership"
      />
      <RouteWithLayout
        component={View}
        exact
        layout={MainLayout}
        path="/accomplishment"
      />
      <RouteWithLayout
        component={View}
        exact
        layout={MainLayout}
        path="/sustainability"
      />
      <RouteWithLayout
        component={View}
        exact
        layout={MainLayout}
        path="/awards"
      />
      <RouteWithLayout
        component={View}
        exact
        layout={MainLayout}
        path="/unitedNations"
      />
      <RouteWithLayout
        component={View}
        exact
        layout={MainLayout}
        path="/contact"
      />
    </Switch>
  );
}

/**
 * Dummy Layout
 */
function Layout() {
  return <div>Layout!</div>;
}

/**
 * Dummy View
 */
function View() {
  return <div>HelloWorld!</div>;
}

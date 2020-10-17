import React, { useState } from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "./components/RouteWithLayout";
import { Main as MainLayout } from "./layouts/Main";

import {
  Home as HomeView,
  About as AboutView,
  Gallery as GalleryView,
  LandmarkDeals as LandmarkDealsView,
} from "./views";

import { Testimonials as TestimonialsView } from "./views/About/views/Testimonials";

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
        component={TestimonialsView}
        exact
        layout={MainLayout}
        path="/testimonials"
      />
      <RouteWithLayout
        component={GalleryView}
        exact
        layout={MainLayout}
        path="/gallery"
      />
      <RouteWithLayout
        component={LandmarkDealsView}
        exact
        layout={MainLayout}
        path="/landmark-deals"
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

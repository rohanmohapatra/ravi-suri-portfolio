import React, { useState } from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "./components/RouteWithLayout";
import { Main as MainLayout } from "./layouts/Main";

import {
  Home as HomeView,
  About as AboutView,
  Gallery as GalleryView,
  LandmarkDeals as LandmarkDealsView,
  Transactions as TransactionsView,
  Testimonials as TestimonialsView,
  Qualifications as QualificationsView,
  PassionForSustainability as SustainabilityView,
  PassionForSustainabilityMore as SustainabilityAdditionalView,
  ImpactOnSociety as PeaceView,
  ThoughtLeadership as TLView,
} from "./views";

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
        component={QualificationsView}
        exact
        layout={MainLayout}
        path="/qualifications"
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
        component={TransactionsView}
        exact
        layout={MainLayout}
        path="/key-transactions"
      />
      <RouteWithLayout
        component={TLView}
        exact
        layout={MainLayout}
        path="/thought-leadership"
      />
      <RouteWithLayout
        component={PeaceView}
        exact
        layout={MainLayout}
        path="/peace"
      />
      <RouteWithLayout
        component={SustainabilityView}
        exact
        layout={MainLayout}
        path="/sustainability"
      />
      <RouteWithLayout
        component={SustainabilityAdditionalView}
        exact
        layout={MainLayout}
        path="/sustainability-report"
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

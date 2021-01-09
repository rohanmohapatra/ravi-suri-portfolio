import React from "react";
import { Route } from "react-router-dom";

export function RouteWithLayout(props) {
  const { layout: Layout, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout location={matchProps.location}>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
}

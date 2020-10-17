import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export function RouteWithLayout(props) {
    const { layout: Layout, component: Component,  ...rest } = props;
    return (
        <Route
        {...rest}
        render={matchProps => (
            <Layout location={matchProps.location}>
                <Component {...matchProps} />
            </Layout>
        )}
        />
    );
};


import React from 'react';
import { Route, Redirect } from 'react-router';

export const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  logout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) return <Component logout={logout} />;
        return (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        );
      }}
    />
  );
};

export default ProtectedRoute;

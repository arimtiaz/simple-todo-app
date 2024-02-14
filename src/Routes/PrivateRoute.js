// PrivateRoute.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext} from '../context/AuthContext'; 

const PrivateRoute = ({props}) => {
    let { component: Component, children, render, ...rest } = props
  let auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() => auth
        ? <Component />
        : <Navigate to="/signup" />
      }
    />
  );
};

export default PrivateRoute;

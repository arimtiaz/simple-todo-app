import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated === null) {
    // Handle loading state if needed
    return <div>Loading...</div>;
  }

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component {...rest} /> : <Navigate to="/signin" />}
    />
  );
};

export default PrivateRoute;

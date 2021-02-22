import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './Util';
 
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => getToken() 
        ? <Component {...props} /> 
        : <Redirect to={{ pathname: '/sign-up'
        , state: { from: props.location } }} />}
    />
  )
}
 
export default PrivateRoute;
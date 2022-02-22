import React from 'react';
import { Route, Redirect } from 'react-router-dom'


const RequireUnauthRoute = ({component: Component, authenticated, ...rest}) => (
  <Route
    {...rest}
    render={props => {
      return authenticated ? (
        <Redirect to={{
          pathname: '/',
          state: {from: props.location}
        }}/>
      ) : (
        <h1 {...props}>no login</h1>
      )
    }}
  />
);


export default RequireUnauthRoute;

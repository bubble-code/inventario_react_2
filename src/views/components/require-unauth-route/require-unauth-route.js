import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const RequireUnauthRoute = ({ authenticated, component, ...props }) => {
  const navigate = useNavigate(); 
  return (
    authenticated ? navigate('/') : <component {...props} />
  )

};
export default RequireUnauthRoute;

//, state: { from: props.location }
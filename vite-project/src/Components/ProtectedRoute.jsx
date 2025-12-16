import React from 'react'
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}) => {
    const jwtToken = localStorage.getItem("jwtToken");
    if(!jwtToken){
        return < Navigate to= "/login"/>
    }
  return children
};

export default ProtectedRoute


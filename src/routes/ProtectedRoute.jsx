import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const ProtectedRoute = ({children , allowedRoles}) => {

    const {isAuthenticated,user} = useSelector((state) => state.auth);
    if(!isAuthenticated){
        return <Navigate to="/auth" />
    }

    if(allowedRoles && !allowedRoles.includes(user?.role)){
        return <Navigate to="/unauthorized" />
    }

  return children;
}

export default ProtectedRoute;

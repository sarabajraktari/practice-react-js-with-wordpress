import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({authorUser}){

    if(!authorUser?.token){
        return <Navigate to={'/login'}/>
    }
    return (
        <div>{<Outlet/>}</div>
    )
}

export default ProtectedRoute;
import React from "react";
import {Navigate} from 'react-router-dom'

export function PrivateRoute({ children }) {
    const auth = localStorage.getItem("accessToken");
    return auth ? (
      children
    ) : (
      <Navigate to={"/login"} />
    );
  }
  
 
  export function PublicRoute({ children }) {
    const auth = localStorage.getItem("accessToken");
  
    return auth ? <Navigate to="/dashboard" /> : children;
  }
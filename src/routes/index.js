import React from "react";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import { PrivateRoute, AuthRoute, PublicRoute } from "./config";


//----------------Pages-------------------------//
import Login from "../views/Auth/login";
import Register from "../views/Auth/register";
import Dashboard from "../views/Admin/dashboard";
import NewRecord from "../views/Admin/new_record";
import Admins from "../views/Admin/admins";

const AllRoutes = ()=>(
    <BrowserRouter>
        <Routes>
            
            <Route path="/register" element={ <Register/>} />

            <Route
                path="/dashboard/new"
                element={
                    <PrivateRoute>
                        <NewRecord/>
                    </PrivateRoute>
                }
            />

            <Route
                path="/dashboard/admins"
                element={
                    <PrivateRoute>
                        <Admins/>
                    </PrivateRoute>
                }
            />

            <Route
                path="/dashboard"
                element={
                    <PrivateRoute>
                        <Dashboard/>
                    </PrivateRoute>
                }
            />

            <Route
                path="/"
                exact
                element={
                    <PublicRoute>
                        <Login/>
                    </PublicRoute>
                }
            />

        </Routes>
    </BrowserRouter>
)

export default AllRoutes
import React from "react";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import { PrivateRoute, AuthRoute, PublicRoute } from "./config";


//----------------Pages-------------------------//
import Home from "../views/Home";
import Resources from './../views/Resources/resources';
import Login from "../views/Auth/login";
import News from "../views/News";
import Students from "../views/User/students";


import AuthLayout from "../Layouts/AuthLayout";
import AuthHeader from "../components/authHeader";

const AllRoutes = ()=>(
    <BrowserRouter>
        <Routes>
            <Route path="/resources" element={ < Resources />} />
            <Route path="/login" element={ < Login />} />
            <Route path="/news" element={ < News />} />
            <Route path="/user/*" element={<AuthLayout/>} />
            <Route path="/" element={ <Home/>} />
        </Routes>
    
    </BrowserRouter>
)

export default AllRoutes
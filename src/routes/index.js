import React from "react";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import { PrivateRoute, AuthRoute, PublicRoute } from "./config";


//----------------Pages-------------------------//
import Home from "../views/Home";
import Resources from './../views/Resources/resources';
import Login from "../views/Auth/login";
import News from "../views/News";
import Students from "../views/User/students";
import RegisterStudent from './../views/User/newStudent/index';

import AuthLayout from "../Layouts/AuthLayout";
import AuthHeader from "../components/authHeader";

const AllRoutes = ()=>(
    <BrowserRouter>
        <Routes>
            <Route path="/resources" element={ < Resources />} />
            <Route path="/login" element={ < Login />} />
            <Route path="/news" element={ < News />} />
            <Route path="/user/*" element={<AuthLayout/>} />
            <Route path="/register" element={ <RegisterStudent/>} />
            <Route path="/" element={ <Home/>} />
            <Route path ="/auth" element = {<AuthHeader/> } />
        </Routes>
    
    </BrowserRouter>
)

export default AllRoutes
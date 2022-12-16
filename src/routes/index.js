import React from "react";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import { PrivateRoute, AuthRoute, PublicRoute } from "./config";


//----------------Pages-------------------------//
import Home from "../views/Home";
import Resources from './../views/Resources/resources';
import Login from "../views/Auth/login";
import News from "../views/News";
import AuthLayout from "../Layouts/AuthLayout";


const AllRoutes = ()=>(
    <BrowserRouter>
        <Routes>
            <Route path="/resources" element={ < Resources />} />
            <Route path="/login" element={ < Login />} />
            <Route path="/news" element={ < News />} />
            <Route path="/user/*" element={<PrivateRoute><AuthLayout/></PrivateRoute>} />
            <Route path="/" element={ <Home/>} />
        </Routes>
    
    </BrowserRouter>
)

export default AllRoutes
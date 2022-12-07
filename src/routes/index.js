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
<<<<<<< HEAD
            <Route path="/user/*" element={<AuthLayout/>} />
           
=======
            <Route 
                path="/user/*" 
                element={
                    <PrivateRoute>
                        <AuthLayout/>
                    </PrivateRoute>}
            />
>>>>>>> 9325d38e4f0e06610351f35cb77573ee948eaa7b
            <Route path="/" element={ <Home/>} />
        </Routes>
    
    </BrowserRouter>
)

export default AllRoutes
import React from "react";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import { PrivateRoute, AuthRoute, PublicRoute } from "./config";


//----------------Pages-------------------------//
import Home from "../views/Home";


const AllRoutes = ()=>(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home/>} />
        </Routes>
    
    </BrowserRouter>
)

export default AllRoutes
import React from "react";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import { PrivateRoute, AuthRoute, PublicRoute } from "./config";


//----------------Pages-------------------------//
import Home from "../views/Home";
// import Footer from './../components/footer';


const AllRoutes = ()=>(
    <BrowserRouter>
        <Routes>
            
            <Route path="/" element={ <Home/>} />
        </Routes>
        {/* < Footer/> */}
    </BrowserRouter>
)

export default AllRoutes
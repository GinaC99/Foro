import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import NewUser from "../components/newUser/NewUser";
import Loader from "../components/loader/Loader";

const RouterApp = () => {   
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/newUser"} element={<NewUser/>}/>
            <Route path={"/ingresos"} element={<Loader/>}/>
            <Route path={"/egresos"} element={<Loader/>}/>
            <Route path={"/selectUser"} element={<Home/>}/>
        </Routes>
    )

}
export default RouterApp;
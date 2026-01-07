import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import Home from "./pages/dashboard/Home";

function UserRoutes() {
    return(
        <Routes>
            {/* User Routes */}
            <Route element={<UserLayout />}>
                <Route index element={<Home/>}/>
                <Route path="/" element={<Home />} />
            </Route>
        
        </Routes>
    );
};

export default UserRoutes;
import React from "react";
import Layout from "../admin/Componet/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../admin/Container/DashBoard/DashBoard";
import Category from "../admin/Container/Category/Category";


function AdminRoutes() {
    return (
        <Layout>
            <Routes>
                <Route path='/'  element={<DashBoard />} />
                <Route path='/DashBoard'  element={<DashBoard />} />
                <Route path='/Category'  element={<Category />} />
            </Routes>
        </Layout> 
    )
}

export default AdminRoutes;
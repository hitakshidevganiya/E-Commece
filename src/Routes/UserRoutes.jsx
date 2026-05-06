import React from "react";
import Header from "../componet/Header/Header";
import About from "../componet/About/About";
import Footer from "../componet/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "../container/Home/Home";
import Product from "../container/Product/Product";
import Casual from "../container/Casual/Casual";
import Cart from "../container/Cart/Cart";
import Auth from "../container/Auth/Auth";

function UserRoutes() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product />} />
                <Route path='/product/:id' element={<Product />} />
                <Route path='/category/casual' element={<Casual />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/men/tshirt' element={<Product />} />
                <Route path='/auth' element={<Auth />}
                 />
            </Routes>
            <About />
            <Footer />
        </div>
    )
}

export default UserRoutes;
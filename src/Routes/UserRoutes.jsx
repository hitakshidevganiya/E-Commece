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
import CheckOut from "../container/Checkout/CheckOut";
import Payment from "../container/Payment/Payment";
import Success from "../container/Success/Success";

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
                <Route path='/auth' element={<Auth />}/>
                <Route path='/checkOut' element={<CheckOut />}/>
                <Route path='/payment' element={<Payment />}/>
                <Route path='/success' element={<Success />}/>
            </Routes>
            <About />
            <Footer />
        </div>
    )
}

export default UserRoutes;
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './componet/Footer/Footer'
import Header from './componet/Header/Header'
import Home from './container/Home/Home'
import Product from './container/Product/Product'
import About from './componet/About/About'
import '../src/Css/header.css'
import '../src/Css/media.css'
import Casual from './container/Casual/Casual'
import Cart from './container/Cart/Cart'


function App() {


  return (
    <>

      {/* <Home /> */}
      {/* <Mens /> */}
      {/* <Cart /> */}
      {/* <Casual /> */}
      {/* <About /> */}

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={ <Product />} />
        <Route path='/casual' element={ <Casual />} />
        <Route path='/cart' element={ <Cart />} />
      </Routes>
      <About />
      <Footer />
    </>
  )
}

export default App

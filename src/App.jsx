import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './componet/About/About'
import Cart from './componet/Cart/Cart'
import Casual from './componet/Casual/Casual'
import Footer from './componet/Footer/Footer'
import Header from './componet/Header/Header'
import Home from './componet/Home/Home'
import Mens from './componet/Mens/Mens'


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
      </Routes>
      <Footer />
    </>
  )
}

export default App

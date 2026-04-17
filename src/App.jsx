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
import Auth from './container/Auth/Auth'
import { Provider } from 'react-redux'
import { configStore } from './Redux/store'



function App() {

  const store = configStore();
  

  return (

    <Provider store={store}>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/category/casual' element={<Casual />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/men/tshirt' element={<Product />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
      <About />
      <Footer />
    </Provider>

  )
}

export default App;

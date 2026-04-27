import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './container/Home/Home'
import Product from './container/Product/Product'
import '../src/Css/header.css'
import '../src/Css/media.css'
import Casual from './container/Casual/Casual'
import Cart from './container/Cart/Cart'
import Auth from './container/Auth/Auth'
import { Provider } from 'react-redux'
import { configStore } from './Redux/store'
import { SnackbarProvider } from 'notistack'
import Alert from './componet/Alert/Alert'
import AdminRoutes from './Routes/AdminRoutes'
import PrivateRoutes from './Routes/PrivateRoutes'
import UserRoutes from './Routes/UserRoutes'



function App() {

  const store = configStore();


  return (
    <SnackbarProvider>
      <Provider store={store}>
        <Alert />


        <Routes>
          <Route path='/admin/*' element={<AdminRoutes />} />
          <Route element={<PrivateRoutes />} />
          <Route path='/*' element={<UserRoutes />} />
        </Routes>


      </Provider>
    </SnackbarProvider>

  )
}

export default App;

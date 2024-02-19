import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';import Banner from './components/banner/Banner';
import Pasta from './components/Pages/Pasta/Pasta';
import Pizza from './components/Pages/Pizza/Pizza';
import Burger from './components/Pages/Burger/Burger';
import Cart from './components/shoppingCart/Cart';
import MyCarousel from './components/Temp';
import Layout2 from './components/Layout2';
import Address from './components/shippingAddress/Address';
import ConfirmOrder from './components/confirm/ConfirmOrder';
function App() {

  return (
   <>
 <Routes>
    <Route path="" element={<Layout />}>
      <Route index element={<MyCarousel/>} />
      <Route path="Pizza" element={<Pizza />} />
      <Route path="address" element={<Address />} />
      <Route path="confirm" element={<ConfirmOrder />} />
      {/* <Route path="Pasta" element={<Pasta />} />
      <Route path="Pizza" element={<Pizza />} />
      <Route path="Burger" element={<Burger />} /> */}
      <Route path="cart" element={<Cart />} />
      <Route path="layout2" element={<Layout2 />} />
      <Route path="MyCarousel" element={<MyCarousel />} />
    </Route>
  </Routes>   </>
  )
}
export default App

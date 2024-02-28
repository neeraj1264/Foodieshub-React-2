import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Banner from './components/banner/Banner';
import Pizza from './components/Pages/Pizza/Pizza';
import Cart from './components/shoppingCart/Cart';
import Address from './components/shippingAddress/Address';
import ConfirmOrder from './components/confirm/ConfirmOrder';
import MyCarousel from './components/banner/Banner';
import MenuLayout from './MenuLayout';
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
      <Route path="menu" element={<MenuLayout/>} />
      <Route path="MyCarousel" element={<MyCarousel />} />
    </Route>
  </Routes>   </>
  )
}
export default App

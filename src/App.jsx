import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';import Banner from './components/banner/Banner';
import Pasta from './components/Pages/Pasta/Pasta';
import Pizza from './components/Pages/Pizza/Pizza';
import Burger from './components/Pages/Burger/Burger';
import Cart from './components/shoppingCart/Cart';
import FoodGallery from './components/Gallery/FoodGallery';
import MyCarousel from './components/Temp';
function App() {

  return (
   <>
 <Routes>
    <Route path="" element={<Layout />}>
      <Route index element={<Banner/>} />
      <Route path="Pasta" element={<Pasta />} />
      <Route path="Pizza" element={<Pizza />} />
      <Route path="Burger" element={<Burger />} />
      <Route path="cart" element={<Cart />} />
      <Route path="MyCarousel" element={<MyCarousel />} />
    </Route>
  </Routes>   </>
  )
}
export default App

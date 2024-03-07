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
import InstallPopup from './components/installpopup/InstallPopup';
import { useEffect, useState } from 'react';


const App = () => {
  const [installPrompt, setInstallPrompt] = useState(null);

  // Event handler for the install prompt
  const handleInstallClick = () => {
    if (installPrompt instanceof Event) {
      const installEvent = installPrompt;
      installEvent.prompt();
      installEvent.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setInstallPrompt(null);
      });
    }
  };

  // Event handler for closing the InstallPopup
  const handleCloseClick = () => {
    setInstallPrompt(null);
  };

  // Effect to listen for the 'beforeinstallprompt' event
  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      console.log("beforeinstallprompt event triggered");
      event.preventDefault();
      setInstallPrompt(event);
    };
    

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);


  return (
   <>
         <InstallPopup
          installPrompt={installPrompt}
          onInstallClick={handleInstallClick}
          onCloseClick={handleCloseClick}
        />
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
  </Routes> 
    </>
  )
}
export default App

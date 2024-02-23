import React, { useEffect } from 'react';
import Burger from './Pages/Burger/Burger';
import Pasta from './Pages/Pasta/Pasta';
import Category from './categories/Category';
import Sandwich from './Pages/Sandwich';
import Shake from './Pages/Shake';
import GarlicBread from './Pages/GarlicBread';
import Chinese from './Pages/Chinese';
import Wrap from './Pages/Wrap';
import Snacks from './Pages/Snacks';
import Momos from './Pages/Momos';
import Chaap from './Pages/Chaap';
import Dinner from './Pages/Dinner';
import Pizza from './Pages/Pizza/Pizza';
import Cakes from './Pages/Cakes';
import Naan from './Pages/Naan';


const Layout2 = () => {

  useEffect(() => {
    // Check if the URL contains an anchor link
    const hash = window.location.hash;
    if (hash) {
      // Use the hash to find the target element
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        // Scroll to the target element
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  
  return (
    <>
    <Category/>
    <Pizza/>
   <Burger/>
   <Sandwich/>
   <Pasta/>
   <Shake/>
   <Cakes/>
   <GarlicBread/>
   <Chinese/>
   <Wrap/>
   <Snacks/>
   <Momos/>
   <Chaap/>
   <Dinner/>
   <Naan/>
    </>
  );
};

export default Layout2;

import React, { useEffect } from 'react';
import Burger from './components/Pages/Burger/Burger';
import Pasta from './components/Pages/Pasta/Pasta';
import Category from './components/categories/Category';
import Sandwich from './components/Pages/Sandwich';
import Shake from './components/Pages/Shake';
import GarlicBread from './components/Pages/GarlicBread';
import Chinese from './components/Pages/Chinese';
import Wrap from './components/Pages/Wrap';
import Snacks from './components/Pages/Snacks';
import Momos from './components/Pages/Momos';
import Chaap from './components/Pages/Chaap';
import Dinner from './components/Pages/Dinner';
import Pizza from './components/Pages/Pizza/Pizza';
import Cakes from './components/Pages/cakes/Cakes';
import Naan from './components/Pages/Naan';


const MenuLayout = () => {

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
   <Burger/>
   <Sandwich/>
   <Pizza/>
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

export default MenuLayout;

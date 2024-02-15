import React from 'react';
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


const Layout2 = () => {
  
  return (
    <>
    <Category/>
   <Burger/>
   <Pasta/>
   <Sandwich/>
   <Shake/>
   <GarlicBread/>
   <Chinese/>
   <Wrap/>
   <Snacks/>
   <Momos/>
   <Chaap/>
   <Dinner/>
    </>
  );
};

export default Layout2;

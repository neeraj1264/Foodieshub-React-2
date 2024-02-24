import React from 'react';
import Cards from '../Un-CustomizeCard/cards';

const BurgerData = [
  { id: 14, name: 'Aloo Tikki Burger', image: '/img/burger/aloo-tikki-burger.png', description: 'Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 15, name: 'Veg Cheese Burger', image: '/img/burger/cheese-burger.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 16, name: 'Hangover Burger', image: '/img/burger/hangover-burger.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Burger = () => {
  
  return (
    <>
      <h2 id='Burger' style={{textAlign: 'center' , marginTop: '8rem'}}>Delicious Burger</h2>
      {renderCards(BurgerData)}
    </>
  );
};

export default Burger;

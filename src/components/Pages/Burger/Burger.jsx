import React from 'react';
import Cards from '../Un-CustomizeCard/cards';

const BurgerData = [
  { id: 1, name: 'Veg Burger1', image: '/img/burger.png', description: 'Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 2, name: 'Veg Burger2', image: '/img/burger.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 3, name: 'Veg Burger3', image: '/img/burger.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 4, name: 'Veg Burger4', image: '/img/burger.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 5, name: 'Veg Burger5', image: '/img/burger.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
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

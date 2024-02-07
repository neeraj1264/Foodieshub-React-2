import React from 'react';
import Cards from '../Un-CustomizeCard/cards';

const PizzaData = [
  { id: 1, name: 'Veg Burger1', image: '/img/burger.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 2, name: 'Veg Burger2', image: '/img/burger.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 3, name: 'Veg Burger3', image: '/img/burger.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 4, name: 'Veg Burger4', image: '/img/burger.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 5, name: 'Veg Burger5', image: '/img/burger.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },


];
const Burger = () => {
  return (
    <div>
      <h2 style={{textAlign: 'center' , marginTop: '4rem'}}>Delicious Burger</h2>
      {PizzaData.map((Pizza) => (
        <Cards key={Pizza.id} {...Pizza} />
      ))}
    </div>
  );
};

export default Burger;

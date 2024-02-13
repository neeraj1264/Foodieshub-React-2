import React from 'react';
import Cards from '../Un-CustomizeCard/cards';
import Category from '../../categories/Category';

const BurgerData = [
  { id: 1, name: 'Veg Burger1', image: '/img/burger.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 2, name: 'Veg Burger2', image: '/img/burger.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 3, name: 'Veg Burger3', image: '/img/burger.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 4, name: 'Veg Burger4', image: '/img/burger.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 5, name: 'Veg Burger5', image: '/img/burger.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
];
const pastaData = [
  {
    id: 6,
    name: "Red Sauce Pasta",
    image: "/img/pasta.png",
    description: "Classic pasta with meat sauce.",
    price: 100,
    mrp: "150",
  },
  {
    id: 7,
    name: "White Sauce Pasta",
    image: "/img/pasta.png",
    description: "Classic pasta with meat sauce.",
    price: 100,
    mrp: "150",
  },
  {
    id: 8,
    name: "Mix Sauce Pasta",
    image: "/img/pasta.png",
    description: "Classic pasta with meat sauce.",
    price: 100,
    mrp: "150",
  },
  {
    id: 9,
    name: "Tandoori Sauce Pasta",
    image: "/img/pasta.png",
    description: "Classic pasta with meat sauce.",
    price: 100,
    mrp: "150",
  },
  {
    id: 10,
    name: "Makhni Sauce Pasta",
    image: "/img/pasta.png",
    description: "Classic pasta with meat sauce.",
    price: 100,
    mrp: "150",
  },
];
const Burger = () => {
  return (
    <>
    <Category/>
    <div>
      <h2 style={{textAlign: 'center' , marginTop: '1rem'}}>Delicious Burger</h2>
      {BurgerData.map((Pizza) => (
        <Cards key={Pizza.id} {...Pizza} />
      ))}
       <h2 style={{textAlign: 'center' , marginTop: '4rem'}}>Delicious Pasta</h2>
      {pastaData.map((Pizza) => (
        <Cards key={Pizza.id} {...Pizza} />
      ))}
    </div>
    </>
  );
};

export default Burger;

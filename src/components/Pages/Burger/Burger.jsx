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
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Burger = () => {
  
  return (
    <>
    <Category/>
    <div>
      <h2 id='Burger' style={{textAlign: 'center' , marginTop: '8rem'}}>Delicious Burger</h2>
      {renderCards(BurgerData)}
       <h2 id='Pasta' style={{textAlign: 'center' , marginTop: '8rem'}}>Delicious Pasta</h2>
       {renderCards(pastaData)}
    </div>
    </>
  );
};

export default Burger;

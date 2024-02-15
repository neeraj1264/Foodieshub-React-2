import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const SnacksData = [
  { id: 41, name: 'Snacks1', image: '/img/bhalle.jpeg', description: 'Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 42, name: 'Snacks2', image: '/img/bhalle.jpeg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 43, name: 'Snacks3', image: '/img/bhalle.jpeg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 44, name: 'Snacks4', image: '/img/bhalle.jpeg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 45, name: 'Snacks5', image: '/img/bhalle.jpeg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Snacks = () => {
  
  return (
    <>
      <h2 id='Snacks' style={{textAlign: 'center' , marginTop: '8rem'}}>Delicious Snacks</h2>
      {renderCards(SnacksData)}
    </>
  );
};

export default Snacks;

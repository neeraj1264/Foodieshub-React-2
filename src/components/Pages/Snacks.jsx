import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const SnacksData = [
  { id: 61, name: 'Kulche Chole', image: '/img/bhalle.jpeg', description: 'Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 62, name: 'Mix Pakode', image: '/img/bhalle.jpeg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 63, name: 'Tikki Bhalle', image: '/img/bhalle.jpeg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
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

import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const GarlicBreadData = [
  { id: 26, name: 'Garlic Bread1', image: '/img/gb.jpg', description: 'Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 27, name: 'Garlic Bread2', image: '/img/gb.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 28, name: 'Garlic Bread3', image: '/img/gb.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 29, name: 'Garlic Bread4', image: '/img/gb.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 30, name: 'Garlic Bread5', image: '/img/gb.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const GarlicBread = () => {
  
  return (
    <>
      <h2 id='Garlic' style={{textAlign: 'center' , marginTop: '8rem'}}>Delicious Garlic Bread</h2>
      {renderCards(GarlicBreadData)}
    </>
  );
};

export default GarlicBread;

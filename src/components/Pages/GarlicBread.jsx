import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const GarlicBreadData = [
  { id: 42, name: 'lain Garlic Bread', image: '/img/gb.jpg', description: 'Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 43, name: 'Cheese Corn Garlic Bread', image: '/img/gb.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 44, name: 'Stuff Garlic Bread', image: '/img/gb.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
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

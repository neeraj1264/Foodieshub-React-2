import React from 'react';
import Cards from './Un-CustomizeCard/cards';
const ShakesData = [
  { id: 26, name: 'Strawberry Shake', image: '/img/shakes.jpg', description: 'Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 27, name: 'Oreo Shake', image: '/img/shakes.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 28, name: 'Vanilla Shake', image: '/img/shakes.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 29, name: 'Butter Scotch Shake', image: '/img/shakes.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 30, name: 'Chocolate Shake', image: '/img/shakes.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 31, name: 'Cold Coffee', image: '/img/shakes.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Shake = () => {
  
  return (
    <>
      <h2 id='Shake' style={{textAlign: 'center' , marginTop: '8rem'}}>Delicious Shakes</h2>
      {renderCards(ShakesData)}
    </>
  );
};

export default Shake;

import React from 'react';
import Cards from './Un-CustomizeCard/cards';
const ShakesData = [
  { id: 21, name: 'Strawberry Shake1', image: '/img/shakes.jpg', description: 'Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 22, name: 'Strawberry Shake2', image: '/img/shakes.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 23, name: 'Strawberry Shake3', image: '/img/shakes.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 24, name: 'Strawberry Shake4', image: '/img/shakes.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 25, name: 'Strawberry Shake5', image: '/img/shakes.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
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

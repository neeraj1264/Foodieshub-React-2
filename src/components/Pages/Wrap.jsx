import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const WrapData = [
  { id: 36, name: 'Wrap1', image: '/img/wrap.png', description: 'Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 37, name: 'Wrap2', image: '/img/wrap.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 38, name: 'Wrap3', image: '/img/wrap.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 39, name: 'Wrap4', image: '/img/wrap.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 40, name: 'Wrap5', image: '/img/wrap.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Wrap = () => {
  
  return (
    <>
      <h2 id='Wrap' style={{textAlign: 'center' , marginTop: '8rem'}}>Delicious Wrap</h2>
      {renderCards(WrapData)}
    </>
  );
};

export default Wrap;

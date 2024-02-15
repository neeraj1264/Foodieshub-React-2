import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const ChaapData = [
  { id: 51, name: 'Chaap1', image: '/img/chaap1.jpg', description: 'Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 52, name: 'Chaap2', image: '/img/chaap1.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 53, name: 'Chaap3', image: '/img/chaap1.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 54, name: 'Chaap4', image: '/img/chaap1.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 55, name: 'Chaap5', image: '/img/chaap1.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Chaap = () => {
  
  return (
    <>
      <h2 id='Chaap' style={{textAlign: 'center' , marginTop: '8rem'}}>Delicious Chaap</h2>
      {renderCards(ChaapData)}
    </>
  );
};

export default Chaap;

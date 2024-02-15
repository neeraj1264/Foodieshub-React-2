import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const MomosData = [
  { id: 46, name: 'Momos1', image: '/img/momo.jpg', description: 'Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 47, name: 'Momos2', image: '/img/momo.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 48, name: 'Momos3', image: '/img/momo.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 49, name: 'Momos4', image: '/img/momo.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 50, name: 'Momos5', image: '/img/momo.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Momos = () => {
  
  return (
    <>
      <h2 id='Momos' style={{textAlign: 'center' , marginTop: '8rem'}}>Delicious Momos</h2>
      {renderCards(MomosData)}
    </>
  );
};

export default Momos;

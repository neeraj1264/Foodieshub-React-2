import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const MomosData = [
  { id: 63, name: 'Veg Momo', image: '/img/momos/momo.jpg', description: 'Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 64, name: 'Fried Momo', image: '/img/momos/friedmomo.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 65, name: 'Kfc Momo', image: '/img/momos/kfcmomos.jpeg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
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

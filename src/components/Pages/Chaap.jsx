import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const ChaapData = [
  { id: 66, name: 'Malai Chaap', image: '/img/chaap1.jpg', description: 'Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 67, name: 'Masala Chaap', image: '/img/chaap1.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 68, name: 'Afgani Chaap', image: '/img/chaap1.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 69, name: 'Lemon Chaap', image: '/img/chaap1.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 70, name: 'Kfc Chaap', image: '/img/chaap1.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 71, name: 'Paneer Tikka', image: '/img/chaap1.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
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

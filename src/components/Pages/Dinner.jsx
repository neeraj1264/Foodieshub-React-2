import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const DinnerData = [
  { id: 56, name: 'Dinner1', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 57, name: 'Dinner2', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 58, name: 'Dinner3', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 59, name: 'Dinner4', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 60, name: 'Dinner5', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Dinner = () => {
  
  return (
    <>
      <h2 id='Dinner' style={{textAlign: 'center' , marginTop: '8rem'}}>Delicious Dinner</h2>
      {renderCards(DinnerData)}
    </>
  );
};

export default Dinner;

import React from 'react';
import CustomCard from './CustomCard';

const DinnerData = [
  { id: 56, name: 'Dinner1', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 57, name: 'Dinner2', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 58, name: 'Dinner3', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 59, name: 'Dinner4', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 60, name: 'Dinner5', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
];
const renderCards = (data) => {
  return data.map((item) => <CustomCard key={item.id} {...item} />);
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

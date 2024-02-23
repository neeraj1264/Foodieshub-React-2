import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const ChineseData = [
  { id: 45, name: 'Veg Noodle', image: '/img/cheesepan.jpg', description: 'Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 46, name: 'White Noodle', image: '/img/cheesepan.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 47, name: 'Cheese Noodle', image: '/img/cheesepan.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 48, name: 'Hakka Noodle', image: '/img/cheesepan.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 49, name: 'Singapoori Noodle', image: '/img/cheesepan.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 50, name: 'Spring Roll', image: '/img/cheesepan.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 51, name: 'Dry Manchurian', image: '/img/cheesepan.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 52, name: 'Gravy Manchurian', image: '/img/cheesepan.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 53, name: 'Pav Bhaji', image: '/img/cheesepan.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 54, name: 'Cheese Chilli', image: '/img/cheesepan.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 55, name: 'Honey Chilli Patato', image: '/img/cheesepan.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Chinese = () => {
  
  return (
    <>
      <h2 id='Chinese' style={{textAlign: 'center' , marginTop: '8rem'}}>Delicious Chinese</h2>
      {renderCards(ChineseData)}
    </>
  );
};

export default Chinese;

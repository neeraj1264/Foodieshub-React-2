import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const ChineseData = [
  { id: 31, name: 'Chinese1', image: '/img/cheesepan.jpg', description: 'Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 32, name: 'Chinese2', image: '/img/cheesepan.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 33, name: 'Chinese3', image: '/img/cheesepan.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 34, name: 'Chinese4', image: '/img/cheesepan.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 35, name: 'Chinese5', image: '/img/cheesepan.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
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

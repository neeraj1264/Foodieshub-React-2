import React from 'react';
import Cards from '../Un-CustomizeCard/cards';

const pastaData = [
  { id: 21, name: 'Red Sauce Pasta', image: '/img/pasta.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 22, name: 'White Sauce Pasta', image: '/img/pasta.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 23, name: 'Tandoori Pasta', image: '/img/pasta.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 24, name: 'Makhani Pasta', image: '/img/pasta.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 25, name: 'Mix Sauce Pasta', image: '/img/pasta.png', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Pasta = () => {
  
  return (
    <>
       <h2 id='Pasta' style={{textAlign: 'center' , marginTop: '8rem'}}>Delicious Pasta</h2>
       {renderCards(pastaData)}
    </>
  );
};

export default Pasta;

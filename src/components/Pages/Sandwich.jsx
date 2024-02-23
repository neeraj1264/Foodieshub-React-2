import React from 'react';
import Cards from './Un-CustomizeCard/cards';
const SandwichData = [
  { id: 17, name: 'Veg Sandwich', image: '/img/cornsand.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 18, name: 'Pasta Sandwich', image: '/img/cornsand.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 19, name: 'Sweet Corn Sandwich4', image: '/img/cornsand.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 20, name: 'Paneer Sandwich5', image: '/img/cornsand.jpg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Sandwich = () => {
  
  return (
    <>
      <h2 id='Sandwich' style={{textAlign: 'center' , marginTop: '8rem'}}>Delicious Sandwich</h2>
      {renderCards(SandwichData)}
    </>
  );
};

export default Sandwich;

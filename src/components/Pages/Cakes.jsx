import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const Data = [
  { id: 32, name: 'Chocolate cake', image: '/img/b1.png', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 33, name: 'Vanilla cake', image: '/img/b1.png', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 34, name: 'Butter Scotch cake', image: '/img/b1.png', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 35, name: 'PineApple cake', image: '/img/b1.png', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 36, name: 'Strawberry cake', image: '/img/b1.png', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 37, name: 'Anniversary cake', image: '/img/b1.png', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 38, name: 'Heart cake', image: '/img/b1.png', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 39, name: 'Fruit cake', image: '/img/b1.png', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 40, name: 'Doll cake', image: '/img/b1.png', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 41, name: 'Multi Tier Cake cake', image: '/img/b1.png', description: 'Delicious cakes', price: 50, mrp: '70' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Cakes = () => {
  
  return (
    <>
      <h2 id='Cakes' style={{textAlign: 'center' , marginTop: '8rem'}}>Delicious Cakes</h2>
      {renderCards(Data)}
    </>
  );
};

export default Cakes;

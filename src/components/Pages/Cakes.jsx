import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const Data = [
  { id: 32, name: 'Chocolate cake',     image: '/img/cakes/choco-min.jpg', description: 'Chocolate Flavour Cake [2 Pound ]', price: 240, mrp: '320' },
  { id: 35, name: 'PineApple cake',     image: '/img/cakes/pineapple-min.jpg', description: 'Pineapple Flavour Cake [2 Pound ] ', price: 240, mrp: '320' },
  { id: 36, name: 'Strawberry cake',    image: '/img/cakes/straww-min.jpg', description: 'Strawberry Flavour Cake [2 Pound ] ', price: 240, mrp: '320' },
  { id: 38, name: 'Heart cake',         image: '/img/cakes/heart-min.jpg', description: 'Heart Shape Cake [3 Pound ] ', price: 360, mrp: '450' },
  { id: 33, name: 'Vanilla cake',       image: '/img/cakes/vanilla-min.jpg', description: 'Vanilla Flavour Cake [2 Pound ]', price: 240, mrp: '320' },
  { id: 34, name: 'Butter Scotch cake', image: '/img/cakes/butter-min.png', description: 'Butter Scotch Flavour Cake [2 Pound ] ', price: 240, mrp: '320' },
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

import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const Data = [
  { id: 89, name: 'Plain Naan', image: '/img/butternaan.jpeg', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 90, name: 'Butter Naan', image: '/img/butternaan.jpeg', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 91, name: 'Stuff Naan', image: '/img/butternaan.jpeg', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 92, name: 'Onion Naan', image: '/img/butternaan.jpeg', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 93, name: 'Paneer Naan', image: '/img/butternaan.jpeg', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 94, name: 'Garlic Naan', image: '/img/butternaan.jpeg', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 95, name: 'Tandoori Roti', image: '/img/butternaan.jpeg', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 96, name: 'Tawa Roti', image: '/img/butternaan.jpeg', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 97, name: 'Missi Roti', image: '/img/butternaan.jpeg', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 98, name: 'Ajwain Roti', image: '/img/butternaan.jpeg', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 99, name: 'Plain Rice', image: '/img/butternaan.jpeg', description: 'Delicious cakes', price: 50, mrp: '70' },
  { id: 100, name: 'Jeera Rice', image: '/img/butternaan.jpeg', description: 'Delicious cakes', price: 50, mrp: '70' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Naan = () => {
  
  return (
    <>
      <h2 id='Naan' style={{textAlign: 'center' , marginTop: '8rem'}}>Hot Naan</h2>
      {renderCards(Data)}
    </>
  );
};

export default Naan;

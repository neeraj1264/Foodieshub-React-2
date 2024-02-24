import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const WrapData = [
  { id: 56, name: 'Aloo Tikki Wrap', image: '/img/wrap/aloowrap.jpeg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 57, name: 'Paneer Tikki Wrap', image: '/img/wrap/paneerwrap.jpeg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 58, name: 'Special Wrap', image: '/img/wrap/splwrap.jpeg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 59, name: 'Paneer Parcel', image: '/img/wrap/paneerparcel.jpeg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
  { id: 60, name: 'Mix Veg Parcel', image: '/img/wrap/Mixparcel.jpeg', description: 'Classic Pizza with meat sauce.', price: 50, mrp: '70' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Wrap = () => {
  
  return (
    <>
      <h2 id='Wrap' style={{textAlign: 'center' , marginTop: '8rem'}}>Delicious Wrap</h2>
      {renderCards(WrapData)}
    </>
  );
};

export default Wrap;

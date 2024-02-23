import React from 'react';
import CustomCard from './CustomCard';

const DinnerData = [
  { id: 72, name: 'Shahi Paneer', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 73, name: 'Kadhai Paneer', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 74, name: 'Matar Paneer', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: 40, mrp: '70' },
  { id: 75, name: 'Palak Paneer', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 76, name: 'Paneer do Pyaza', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 77, name: 'Cheese Tomato', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 78, name: 'Gravy Chaap', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 79, name: 'Malai Kofta', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: 40, mrp: '70' },
  { id: 80, name: 'Chana Masala', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 81, name: 'Mix Veg', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 82, name: 'Mushroom Matar', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 83, name: 'Dal Makhani', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 84, name: 'Yellow Dal', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: 40, mrp: '70' },
  { id: 85, name: 'Rajma', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 86, name: 'Kadhi', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 87, name: 'Aloo Matar', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 88, name: 'Mix Rayta', image: '/img/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
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

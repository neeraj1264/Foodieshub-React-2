import React from 'react';
import CustomCard from './CustomCard';

const DinnerData = [
  { id: 72, name: 'Shahi Paneer',    image: '/img/dinner/shahipaneer.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 73, name: 'Kadhai Paneer',   image: '/img/dinner/kadaipaneer.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 74, name: 'Matar Paneer',    image: '/img/dinner/matarpaneer.jpeg', description: 'Classic Pizza with meat sauce.', price: 40, mrp: '70' },
  { id: 75, name: 'Palak Paneer',    image: '/img/dinner/palakpaneer.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 76, name: 'Paneer do Pyaza', image: '/img/dinner/pyaza.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 77, name: 'Cheese Tomato',   image: '/img/dinner/cheesetomato.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 78, name: 'Gravy Chaap',     image: '/img/dinner/gravychaap.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 79, name: 'Malai Kofta',     image: '/img/dinner/malaikofta.jpeg', description: 'Classic Pizza with meat sauce.', price: 40, mrp: '70' },
  { id: 80, name: 'Chana Masala',    image: '/img/dinner/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 81, name: 'Mix Veg',         image: '/img/dinner/mixveg.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 82, name: 'Mushroom Matar',  image: '/img/dinner/mushroom.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 83, name: 'Dal Makhani',     image: '/img/dinner/dalmakhani.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 84, name: 'Yellow Dal',      image: '/img/dinner/yellowdal.jpeg', description: 'Classic Pizza with meat sauce.', price: 40, mrp: '70' },
  { id: 85, name: 'Rajma',           image: '/img/dinner/rajma.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 86, name: 'Kadhi',           image: '/img/dinner/kadhi.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 87, name: 'Aloo Matar',      image: '/img/dinner/aloomatar.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
  { id: 88, name: 'Mix Rayta',       image: '/img/dinner/mixrayta.jpeg', description: 'Classic Pizza with meat sauce.', price: {priceH: 30, priceF: 50}, mrp: '70' },
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

import React from 'react';
import CustomCard from './CustomCard';

const DinnerData = [
  { id: 72, name: 'Shahi Paneer',    image: '/img/dinner/shahipaneer-min.jpeg', description: 'Experience the royal treatment for your taste buds by ordering Sahi Paneer', price: {priceH: 90, priceF: 150}, mrp: '180'},
  { id: 73, name: 'Kadhai Paneer',   image: '/img/dinner/kadaipaneer-min.jpeg', description: 'The dish is cherished for its vibrant colors, bold flavors, and the perfect balance of spiciness and creaminess, making it a favorite in Indian cuisine.', price: {priceH:100, priceF: 160}, mrp: '190'},
  { id: 74, name: 'Matar Paneer',    image: '/img/dinner/matarpaneer-min.jpeg', description: 'Matar paneer is loved for its simplicity, yet it offers a satisfying and flavorful experience that captures the essence of North Indian cuisine.', price: {priceH: 90, priceF: 150}, mrp: '180'},
  { id: 75, name: 'Palak Paneer',    image: '/img/dinner/palakpaneer-min.jpeg', description: 'This wholesome and nutritious dish is not only a favorite among vegetarians but is also appreciated for its comforting and flavorful profile in Indian cuisine.', price: {priceH: 90, priceF: 150}, mrp: '180'},
  { id: 76, name: 'Paneer do Pyaza', image: '/img/dinner/pyaza-min.jpeg',       description: 'This savory and aromatic dish is beloved for its rich taste and the delicious interplay of paneer and onions in the curry.', price: {priceH:110, priceF: 160}, mrp: '200'},
  { id: 77, name: 'Cheese Tomato',   image: '/img/dinner/cheesetomato-min.jpeg',description: ' The marriage of the sweet acidity of tomatoes with the creamy richness of cheese offers a harmonious balance that tantalizes the taste buds.', price: {priceH: 90, priceF: 150}, mrp: '180'},
  { id: 78, name: 'Gravy Chaap',     image: '/img/dinner/gravychaap-min.jpeg',  description: 'This dish is loved for its succulent texture and the way it absorbs the rich flavors of the well-seasoned gravy.', price: {priceH: 70, priceF: 110}, mrp: '130'},
  { id: 79, name: 'Malai Kofta',     image: '/img/dinner/malaikofta-min.jpeg',  description: 'Garnished with fresh coriander and a drizzle of cream, our Malai Kofta is a symphony of flavors and textures, offering a luxurious experience.', price: {priceH: 90, priceF: 150}, mrp: '180'},
  { id: 80, name: 'Chana Masala',    image: '/img/dinner/dalmakhani-min.jpeg',  description: 'Savor the hearty goodness of our Chana Masala, a beloved and flavorful dish that celebrates the vibrant spices of Indian cuisine.', price: {priceH: 90, priceF: 130}, mrp: '180'},
  { id: 81, name: 'Mix Veg',         image: '/img/dinner/mixveg-min.jpeg',      description: 'Embark on a delightful culinary journey with our Mix Veg, a vibrant medley of fresh vegetables that celebrate the colors and flavors of nature.', price: {priceH: 80, priceF: 130}, mrp: '180'},
  { id: 82, name: 'Mushroom Matar',  image: '/img/dinner/mushroom-min.jpeg',    description: 'Immerse yourself in the delectable blend of earthy mushrooms and sweet green peas with our Mushroom Matar.', price: {priceH: 90, priceF: 150}, mrp: '180'},
  { id: 83, name: 'Dal Makhani',     image: '/img/dinner/dalmakhani-min.jpeg',  description: 'Dal Makhani is a rich and creamy lentil dish that originates from the Indian subcontinent.', price: {priceH: 80, priceF: 130}, mrp: '180'},
  { id: 84, name: 'Yellow Dal',      image: '/img/dinner/yellowdal-min.jpeg',   description: 'This dish is not only delicious but also a great source of protein and essential nutrients, making it a wholesome and comforting addition to any meal.', price: {priceH: 50, priceF: 80}, mrp: '100' },
  { id: 85, name: 'Rajma',           image: '/img/dinner/rajma-min.jpeg',       description: 'Rajma is often garnished with fresh coriander and served with a side of rice, making it a wholesome and satisfying meal.', price: {priceH: 50, priceF: 80}, mrp: '100' },
  { id: 86, name: 'Kadhi',           image: '/img/dinner/kadhi-min.jpeg',       description: 'Kadhi is enjoyed for its comforting and tangy taste, making it a popular choice in Indian households.', price: {priceH: 50, priceF: 80}, mrp: '100' },
  { id: 87, name: 'Aloo Matar',      image: '/img/dinner/aloomatar-min.jpeg',   description: 'Aloo Matar is often garnished with fresh coriander and served with Indian bread like roti or naan, or alongside steamed rice.', price: {priceH: 50, priceF: 80}, mrp: '100' },
  { id: 88, name: 'Mix Rayta',       image: '/img/dinner/mixrayta-min.jpeg',    description: 'Mix Raita not only enhances the overall dining experience by providing a cooling element but also adds nutritional value with the inclusion of vegetables and yogurt.', price: {priceH: 40, priceF: 60}, mrp: '80'  },
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

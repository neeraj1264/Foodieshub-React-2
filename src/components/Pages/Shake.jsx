import React from 'react';
import Cards from './Un-CustomizeCard/cards';
const ShakesData = [
  { id:125, name: 'Mango Shake', image: '/img/shakes/mango.jpeg', description: 'Dive into the tropical bliss of our Mango Shake, a creamy indulgence crafted from the finest ripe mangoes. Bursting with the vibrant flavor of sun-kissed mangoes, each sip envelops your senses in a symphony of sweetness and tanginess.', price: 60, mrp: '90' },
  { id:126, name: 'Banana Shake', image: '/img/shakes/banana.jpeg', description: 'Indulge in the creamy richness of our Banana Shake, a delightful blend of ripe bananas and velvety milk. Each sip offers a smooth and satisfying experience, as the natural sweetness of bananas mingles with the wholesome creaminess of milk.', price: 50, mrp: '80' },
  { id:127, name: 'Papaya Shake', image: '/img/shakes/papaya.jpeg', description: ' Immerse yourself in the tropical allure of our Papaya Shake, a blissful fusion of creamy papaya and chilled milk. Each sip invites you to experience the exotic sweetness and subtle tanginess of ripe papaya.', price: 50, mrp: '80' },
  { id: 26, name: 'Strawberry Shake', image: '/img/shakes/strawberry.jpg', description: 'Quench your thirst with our luscious Strawberry Shake. Made with plump, juicy strawberries blended to perfection with creamy milk.', price: 90, mrp: '120' },
  { id: 27, name: 'Oreo Shake', image: '/img/shakes/oreo.jpg', description: 'Each sip is a heavenly fusion of chocolatey Oreo goodness and the smoothness of milk, creating a decadent treat for your taste buds.', price: 90, mrp: '120' },
  { id: 28, name: 'Vanilla Shake', image: '/img/shakes/vanilla.jpeg', description: ' Each sip is a celebration of the sweet and comforting essence of vanilla, offering a perfect balance of creaminess and flavor.', price: 90, mrp: '120' },
  { id: 29, name: 'Butter Scotch Shake', image: '/img/shakes/butter.jpg', description: 'Treat yourself to the decadent delight of our Butterscotch Shake. A heavenly blend of creamy milk and luscious butterscotch syrup.', price: 100, mrp: '120' },
  { id: 30, name: 'Chocolate Shake', image: '/img/shakes/choco.jpg', description: 'Dive into the irresistible decadence of our Chocolate Shake. A velvety fusion of rich chocolate syrup and creamy milk.', price: 90, mrp: '120' },
  { id: 31, name: 'Cold Coffee', image: '/img/shakes/coffee.jpeg', description: 'Cool down and energize with our refreshing Cold Coffee. this beverage is a delightful pick-me-up on a warm day. ', price: 80, mrp: '100' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Shake = () => {
  
  return (
    <>
      <h2 id='shake' style={{textAlign: 'center' , marginTop: '8rem'}}>Delicious Shakes</h2>
      {renderCards(ShakesData)}
    </>
  );
};

export default Shake;

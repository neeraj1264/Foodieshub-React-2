import React from 'react';
import Cards from './Un-CustomizeCard/cards';
const ShakesData = [
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
      <h2 id='Shake' style={{textAlign: 'center' , marginTop: '8rem'}}>Delicious Shakes</h2>
      {renderCards(ShakesData)}
    </>
  );
};

export default Shake;

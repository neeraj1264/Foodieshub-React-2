import React from "react";
import PizzaPage from "./PizzaPage";

const PizzaData = [
  { id: 1,  name: "Onion Pizza",           image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220', size: {size1: 'Small'  , size2: 'Regular', size3: 'Medium'}, cheese: {cheese1:'30',cheese2:'40',cheese3:'60'}},
  { id: 2,  name: "Capsicum Pizza",        image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220', size: {size1: 'Small'  , size2: 'Regular', size3: 'Medium'}, cheese: {cheese1:'30',cheese2:'40',cheese3:'60'}},
  { id: 3,  name: "Tomato Pizza",          image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220', size: {size1: 'Small'  , size2: 'Regular', size3: 'Medium'}, cheese: {cheese1:'30',cheese2:'40',cheese3:'60'}},
  { id: 4,  name: "Margharita Pizza",      image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220', size: {size1: 'Small'  , size2: 'Regular', size3: 'Medium'}, cheese: {cheese1:'30',cheese2:'40',cheese3:'60'}},
  { id: 5,  name: "Cheese Corn Pizza",     image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220', size: {size1: 'Small'  , size2: 'Regular', size3: 'Medium'}, cheese: {cheese1:'30',cheese2:'40',cheese3:'60'}},
  { id: 6,  name: "Farm Fresh Pizza",      image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220', size: {size1: 'Regular', size2: 'Medium' , size3: 'Large' }, cheese: {cheese1:'40',cheese2:'60',cheese3:'90'}},
  { id: 7,  name: "Country Special Pizza", image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220', size: {size1: 'Regular', size2: 'Medium' , size3: 'Large' }, cheese: {cheese1:'40',cheese2:'60',cheese3:'90'}},
  { id: 8,  name: "Veggie Special Pizza",  image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220', size: {size1: 'Regular', size2: 'Medium' , size3: 'Large' }, cheese: {cheese1:'40',cheese2:'60',cheese3:'90'}},
  { id: 9,  name: "Mix Veg Pizza",         image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220', size: {size1: 'Regular', size2: 'Medium' , size3: 'Large' }, cheese: {cheese1:'40',cheese2:'60',cheese3:'90'}},
  { id: 10, name: "Makhani Panner Pizza",  image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220', size: {size1: 'Regular', size2: 'Medium' , size3: 'Large' }, cheese: {cheese1:'40',cheese2:'60',cheese3:'90'}},
  { id: 11, name: "Tandoori Paneer Pizza", image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220', size: {size1: 'Regular', size2: 'Medium' , size3: 'Large' }, cheese: {cheese1:'40',cheese2:'60',cheese3:'90'}},
  { id: 12, name: "Pappy Paneer Pizza",    image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220', size: {size1: 'Regular', size2: 'Medium' , size3: 'Large' }, cheese: {cheese1:'40',cheese2:'60',cheese3:'90'}},
  { id: 13, name: "Italian Pizza",         image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220', size: {size1: 'Regular', size2: 'Medium' , size3: 'Large' }, cheese: {cheese1:'40',cheese2:'60',cheese3:'90'}},

];
const Pizza = () => {
  return (
    <div>
      <h2 id="Pizza" style={{ textAlign: "center", marginTop: "8rem" }}>
        Delicious Pizza
      </h2>
      {PizzaData.map((Pizza) => (
        <PizzaPage key={Pizza.id} {...Pizza} />
      ))}
    </div>
  );
};

export default Pizza;

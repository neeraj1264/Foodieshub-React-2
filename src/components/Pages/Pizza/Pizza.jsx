import React from "react";
import PizzaPage from "./PizzaPage";

const PizzaData = [
  { id: 101,name: "Onion Pizza[6 inches]",        image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price:    '70', mrp: '100'},
  { id: 102,name: "Capsicum Pizza[6 inches]",        image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: '70', mrp: '100'},
  { id: 103,name: "Tomato Pizza[6 inches]",        image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price:   '70', mrp: '100'},
  { id: 104,name: "Sweetcorn Pizza[6 inches]",        image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price:'80', mrp: '100'},
  { id: 105,name: "Mushroom Pizza[6 inches]",        image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: '80', mrp: '100'},
  { id: 106,name: "Margharita Pizza[6 inches]",        image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.',price:'80', mrp: '100'},
  { id: 2,  name: "Paneer Onion",          image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '130',priceM: '210',priceL: '320'} , mrp: '170', size: {size1: 'Regular', size2: 'Mediun', size3: 'Large'}},
  { id: 3,  name: "Tomato Onion",          image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '130',priceM: '210',priceL: '320'} , mrp: '170', size: {size1: 'Regular', size2: 'Mediun', size3: 'Large'}},
  { id: 4,  name: "Sweetcorn Tomato",      image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '130',priceM: '210',priceL: '320'} , mrp: '170', size: {size1: 'Regular', size2: 'Mediun', size3: 'Large'}},
  { id: 5,  name: "Cheese Corn Pizza",     image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '130',priceM: '210',priceL: '320'} , mrp: '170', size: {size1: 'Regular', size2: 'Mediun', size3: 'Large'}},
  { id: 6,  name: "Farm Fresh Pizza",      image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '200', size: {size1: 'Regular', size2: 'Medium', size3: 'Large'}},
  { id: 7,  name: "Country Special Pizza", image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '200', size: {size1: 'Regular', size2: 'Medium', size3: 'Large'}},
  { id: 8,  name: "Veggie Special Pizza",  image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '200', size: {size1: 'Regular', size2: 'Medium', size3: 'Large'}},
  { id: 9,  name: "Mix Veg Pizza",         image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '200', size: {size1: 'Regular', size2: 'Medium', size3: 'Large'}},
  { id: 10, name: "Makhani Panner Pizza",  image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '180',priceM: '370',priceL: '500'} , mrp: '220', size: {size1: 'Regular', size2: 'Medium', size3: 'Large'}},
  { id: 11, name: "Tandoori Paneer Pizza", image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '180',priceM: '370',priceL: '500'} , mrp: '220', size: {size1: 'Regular', size2: 'Medium', size3: 'Large'}},
  { id: 12, name: "Pappy Paneer Pizza",    image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '180',priceM: '370',priceL: '500'} , mrp: '220', size: {size1: 'Regular', size2: 'Medium', size3: 'Large'}},
  { id: 13, name: "Italian Pizza",         image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '180',priceM: '370',priceL: '500'} , mrp: '220', size: {size1: 'Regular', size2: 'Medium', size3: 'Large'}},

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

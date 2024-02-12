import React from "react";
import PizzaPage from "./PizzaPage";

const PizzaData = [
  { id: 11, name: "Farm House Pizza", image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220' },
  { id: 12, name: "Farm House Pizza", image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220' },
  { id: 13, name: "Farm House Pizza", image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220' },
  { id: 14, name: "Farm House Pizza", image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220' },
  { id: 15, name: "Country Special Pizza", image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220' },

];
const Pizza = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "4rem" }}>
        Delicious Pizza
      </h2>
      {PizzaData.map((Pizza) => (
        <PizzaPage key={Pizza.id} {...Pizza} />
      ))}
    </div>
  );
};

export default Pizza;

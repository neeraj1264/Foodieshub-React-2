import React from "react";
import PizzaPage from "./PizzaPage";

const PizzaData = [
  { id: 1, name: "Farm House Pizza", image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220' },
  { id: 2, name: "Farm House Pizza", image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220' },
  { id: 3, name: "Farm House Pizza", image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220' },
  { id: 4, name: "Farm House Pizza", image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220' },
  { id: 5, name: "Country Special Pizza", image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: {priceR: '160',priceM: '310',priceL: '420'} , mrp: '220' },

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

import React from 'react';
import Cards from '../Un-CustomizeCard/cards';

const pastaData = [
  {
    id: 6,
    name: "Red Sauce Pasta",
    image: "/img/pasta.png",
    description: "Classic pasta with meat sauce.",
    price: 100,
    mrp: "150",
  },
  {
    id: 7,
    name: "White Sauce Pasta",
    image: "/img/pasta.png",
    description: "Classic pasta with meat sauce.",
    price: 100,
    mrp: "150",
  },
  {
    id: 8,
    name: "Mix Sauce Pasta",
    image: "/img/pasta.png",
    description: "Classic pasta with meat sauce.",
    price: 100,
    mrp: "150",
  },
  {
    id: 9,
    name: "Tandoori Sauce Pasta",
    image: "/img/pasta.png",
    description: "Classic pasta with meat sauce.",
    price: 100,
    mrp: "150",
  },
  {
    id: 10,
    name: "Makhni Sauce Pasta",
    image: "/img/pasta.png",
    description: "Classic pasta with meat sauce.",
    price: 100,
    mrp: "150",
  },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Pasta = () => {
  
  return (
    <>
       <h2 id='Pasta' style={{textAlign: 'center' , marginTop: '8rem'}}>Delicious Pasta</h2>
       {renderCards(pastaData)}
    </>
  );
};

export default Pasta;

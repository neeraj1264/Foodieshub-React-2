import React from "react";
import Cards from "../Un-CustomizeCard/cards";

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
const Pasta = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "4rem" }}>
        Delicious Pasta
      </h2>
      {pastaData.map((pasta) => (
        <Cards key={pasta.id} {...pasta} />
      ))}
    </div>
  );
};

export default Pasta;

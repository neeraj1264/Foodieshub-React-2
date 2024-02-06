import React from "react";
import Cards from "../Un-CustomizeCard/cards";

const pastaData = [
  {
    id: 1,
    name: "Red Sauce Pasta",
    image: "/img/pasta.png",
    description: "Classic pasta with meat sauce.",
    price: 100,
    mrp: "150",
  },
  {
    id: 2,
    name: "White Sauce Pasta",
    image: "/img/pasta.png",
    description: "Classic pasta with meat sauce.",
    price: 100,
    mrp: "150",
  },
  {
    id: 3,
    name: "Mix Sauce Pasta",
    image: "/img/pasta.png",
    description: "Classic pasta with meat sauce.",
    price: 100,
    mrp: "150",
  },
  {
    id: 4,
    name: "Tandoori Sauce Pasta",
    image: "/img/pasta.png",
    description: "Classic pasta with meat sauce.",
    price: 100,
    mrp: "150",
  },
  {
    id: 5,
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

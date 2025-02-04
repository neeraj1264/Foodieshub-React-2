import React from "react";
import PizzaPage from "./PizzaPage";

const PizzaData = [
  { id: 101,name: "Onion Pizza[6 inches]",      image: '/img/pizza/onionpizza.png', description: 'It is a delightful choice for onion enthusiasts and pizza lovers alike.', price:    '80', mrp: '100'},
  { id: 102,name: "Capsicum Pizza[6 inches]",   image: '/img/pizza/onion-capsicum.png', description: 'Experience a burst of vibrant flavors with our Capsicum Pizza.', price: '80', mrp: '100'},
  { id: 103,name: "Tomato Pizza[6 inches]",     image: '/img/pizza/tomatopizza.png', description: 'Each slice is a perfect harmony of fresh tomato flavor, complemented by our signature sauce and melted cheese.', price:   '80', mrp: '100'},
  { id: 104,name: "Sweetcorn Pizza[6 inches]",  image: '/img/pizza/cornpizza.png', description: ' Indulge in our Corn Pizza, a tasty blend of sweet and savory goodness.', price:'90', mrp: '100'},
  { id: 105,name: "Mushroom Pizza[6 inches]",   image: '/img/pizza/mushroompizza.png', description: 'making it a top choice for those who appreciate a classic yet sophisticated pizza.', price: '90', mrp: '100'},
  { id: 106,name: "Margharita Pizza[6 inches]", image: '/img/pizza/margherita.png', description: 'Indulge in the timeless elegance of our Margherita Pizza.',price:'90', mrp: '100'},
  { id: 3,  name: "Tomato Onion",               image: '/img/pizza/tomatopizza.png', description: 'Enjoy the timeless combination of tomatoes and onions in a delicious medley that celebrates the essence of traditional pizza.', price: {priceR: '140',priceM: '250',priceL: '360'} , mrp: '190', size: {size1: 'Regular', size2: 'Mediun', size3: 'Large'}},
  { id: 4,  name: "Sweetcorn Tomato",           image: '/img/pizza/tomatopizza.png', description: 'a perfect marriage of sweet corn and ripe tomatoes on a golden crust. ', price: {priceR: '140',priceM: '250',priceL: '360'} , mrp: '190', size: {size1: 'Regular', size2: 'Mediun', size3: 'Large'}},
  { id: 2,  name: "Paneer Onion",               image: '/img/pizza/paneer.jpeg', description: 'Experience a delightful fusion of flavors with our Onion Paneer Pizza. ', price: {priceR: '150',priceM: '270',priceL: '390'} , mrp: '200', size: {size1: 'Regular', size2: 'Mediun', size3: 'Large'}},
  { id: 5,  name: "Paneer Capsicum",          image: '/img/pizza/paneer.jpeg', description: 'is a flavorful and vibrant dish that combines soft and succulent paneer (Indian cottage cheese) with the crunchiness of fresh capsicum ', price: {priceR: '150',priceM: '270',priceL: '390'} , mrp: '200', size: {size1: 'Regular', size2: 'Mediun', size3: 'Large'}},
  { id: 6,  name: "Farm Fresh Pizza",           image: '/img/pizza.png', description: 'Topping: Onion , Capsicum , Tomato , Mushroom', price: {priceR: '170',priceM: '310',priceL: '440'} , mrp: '220', size: {size1: 'Regular', size2: 'Medium', size3: 'Large'}},
  { id: 7,  name: "Country Special Pizza",      image: '/img/pizza.png', description: 'Topping: Onion , Black Olives , Tomato , Capsicum', price: {priceR: '170',priceM: '310',priceL: '440'} , mrp: '220', size: {size1: 'Regular', size2: 'Medium', size3: 'Large'}},
  { id: 8,  name: "Veggie Special Pizza",       image: '/img/pizza.png', description: 'Topping: Onion , Capsicum , Sweetcorn , Tomato', price: {priceR: '170',priceM: '310',priceL: '440'} , mrp: '220', size: {size1: 'Regular', size2: 'Medium', size3: 'Large'}},
  { id: 9,  name: "Mix Veg Pizza",              image: '/img/pizza.png', description: 'Topping: Mushroom , Capsicum , Jalapenos , Tomato', price: {priceR: '170',priceM: '310',priceL: '440'} , mrp: '220', size: {size1: 'Regular', size2: 'Medium', size3: 'Large'}},
  { id: 10, name: "Makhani Panner Pizza",       image: '/img/pizza.png', description: 'Topping: Onion , Capsicum , Paneer , Makhani Sauce', price: {priceR: '190',priceM: '370',priceL: '500'} , mrp: '250', size: {size1: 'Regular', size2: 'Medium', size3: 'Large'}},
  { id: 11, name: "Tandoori Paneer Pizza",      image: '/img/pizza.png', description: 'Topping: Onion , Paneer , Red Paprika , Tandoori Sauce', price: {priceR: '190',priceM: '370',priceL: '500'} , mrp: '250', size: {size1: 'Regular', size2: 'Medium', size3: 'Large'}},
  { id: 12, name: "Pappy Paneer Pizza",         image: '/img/pizza.png', description: 'Topping: Paneer , Capsicum , Sweetcorn , Red Paprika', price: {priceR: '190',priceM: '370',priceL: '500'} , mrp: '250', size: {size1: 'Regular', size2: 'Medium', size3: 'Large'}},
  { id: 13, name: "Italian Pizza",              image: '/img/pizza.png', description: 'Topping: Capsicum , Jalapenos , Mushroom , Sweetcorn', price: {priceR: '190',priceM: '370',priceL: '500'} , mrp: '250', size: {size1: 'Regular', size2: 'Medium', size3: 'Large'}},

];
const Pizza = () => {
  return (
    <div>
      <h2 id="pizza" style={{ textAlign: "center", marginTop: "8rem" }}>
        Delicious Pizza
      </h2>
      {PizzaData.map((Pizza) => (
        <PizzaPage key={Pizza.id} {...Pizza} />
      ))}
    </div>
  );
};

export default Pizza;

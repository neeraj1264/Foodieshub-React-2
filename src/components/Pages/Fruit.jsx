import React from 'react';
import CustomCard from './CustomCard';

const Data = [
  { id: 106, name: 'Mango [200 grams]',                    image: '/img/fruit/mango.jpeg',      size: {size1: '[200 grams]' , size2: '[400 grams]'}, price: {priceH: 50, priceF:  90}, mrp: '90', description: 'Dive into a world of tantalizing flavors with our Mango Chaat, a mouthwatering fusion of chopped ripe mangoes and our signature special masala. Each bite bursts with the sweetness of perfectly ripened mangoes, expertly complemented by the tangy and savory notes of our secret masala blend. '},
  { id: 109, name: 'Papaya [200 grams]',                   image: '/img/fruit/popaya.jpeg',     size: {size1: '[200 grams]' , size2: '[400 grams]'}, price: {priceH: 40, priceF:  70}, mrp: '80', description: ' Embark on a journey to tropical bliss with our Papaya Paradise, a refreshing treat crafted from the finest ripe papaya. Each slice of juicy papaya is meticulously prepared and served in a box, ensuring freshness with every bite. Accompanied by our special blend of masala, every mouthful is a harmonious symphony of sweet and savory flavors that dance on your palate.'},
  { id: 110, name: 'Rani Pineapple Slices [200 grams]',    image: '/img/fruit/pineapple.jpeg',  size: {size1: '[200 grams]' , size2: '[400 grams]'}, price: {priceH: 50, priceF:  90}, mrp: '90', description: 'Treat yourself to a taste of the tropics with our Tropical Pineapple Delight, a delectable fusion of juicy pineapple chunks served in a convenient box. Each bite is a burst of tropical flavor, as the sweetness of ripe pineapple dances on your taste buds. To enhance your experience, we sprinkle our special masala blend over the pineapple, adding a delightful zing of spice and tanginess. '},
  { id: 111, name: 'Watermelon [200 grams]',               image: '/img/fruit/watermelon.jpeg', size: {size1: '[200 grams]' , size2: '[400 grams]'}, price: {priceH: 40, priceF:  70}, mrp: '80', description: 'Immerse yourself in the refreshing essence of summer with our Watermelon Wonder, a delightful blend of juicy watermelon chunks served in a convenient box. Each bite is a burst of cool, hydrating sweetness, reminiscent of lazy days by the poolside.'},
  { id: 112, name: 'Chiku [200 grams]',                    image: '/img/fruit/chiku.jpeg',      size: {size1: '[200 grams]' , size2: '[400 grams]'}, price: {priceH: 40, priceF:  70}, mrp: '80', description: 'Experience the delightful sweetness of chiku (sapodilla) with our Chiku Charm, a flavorful treat served in a convenient box. Each bite of our ripe chiku is a burst of creamy sweetness, tantalizing your taste buds with its unique flavor. '},
  { id: 113, name: 'Lean & Green Fruit Chaat [200 grams]', image: '/img/fruit/fruit.jpeg',      size: {size1: '[200 grams]' , size2: '[400 grams]'}, price: {priceH: 60, priceF: 110}, mrp:'100', description: 'A combination of fruits known for aiding in weight loss, such as papaya, pineapple, and pomegranate.'},
  { id: 114, name: 'Energy Boost Blend [200 grams]',       image: '/img/fruit/fruit.jpeg',      size: {size1: '[200 grams]' , size2: '[400 grams]'}, price: {priceH: 60, priceF: 110}, mrp:'100', description: 'Combining fruits like banana, apple, and grapes for a boost of energy and vitality.'},
  { id: 115, name: 'Digestive Delight Mix [200 grams]',    image: '/img/fruit/fruit.jpeg',      size: {size1: '[200 grams]' , size2: '[400 grams]'}, price: {priceH: 60, priceF: 110}, mrp:'100', description: ' Featuring fruits like chiku, papaya, and pineapple known for their digestive benefits.'},
  { id: 116, name: 'Immunity Power Pack [200 grams]',      image: '/img/fruit/fruit.jpeg',      size: {size1: '[200 grams]' , size2: '[400 grams]'}, price: {priceH: 60, priceF: 110}, mrp:'100', description: ' Immunity Power Pack: A mix of fruits rich in vitamins and antioxidants, such as mango, grapes, and pomegranate, to boost immunity  '},
  { id: 117, name: 'Detox Fusion Feast [200 grams]',       image: '/img/fruit/fruit.jpeg',      size: {size1: '[200 grams]' , size2: '[400 grams]'}, price: {priceH: 60, priceF: 110}, mrp:'100', description: ' Combining detoxifying fruits like watermelon, pineapple, and pomegranate for a cleansing effect.  '},
  { id: 118, name: 'Muscle Builder Mix [200 grams]',       image: '/img/fruit/fruit.jpeg',      size: {size1: '[200 grams]' , size2: '[400 grams]'}, price: {priceH: 60, priceF: 110}, mrp:'100', description: ' Detox Fusion Feast: Combining detoxifying fruits like watermelon, pineapple, and pomegranate for a cleansing effect.  '},
 ];
const renderCards = (data) => {
  return data.map((item) => <CustomCard key={item.id} {...item} />);
};
const Fruit = () => {
  
  return (
    <>
      <h2 id='fruits' style={{textAlign: 'center' , marginTop: '8rem'}}>Fruit Chaat</h2>
      {renderCards(Data)}
    </>
  );
};

export default Fruit;

import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';
const categories = [
  { id: 2,  name: 'Burger',  image: '/img/burger/burger-min.jpg'},
  { id: 3,  name: 'Sandwich',image: '/img/sandwiches/cornsand.jpg'},
  { id: 1,  name: 'Pizza',   image: '/img/pizza/pizza-min.png' },
  { id: 4,  name: 'Pasta',   image: '/img/pasta/redpasta-min.jpg'},
  { id: 5,  name: 'Shake',   image: '/img/shakes/shakes-min.jpg'},
  { id: 13, name: 'Cakes',  image: '/img/cakes/choco-min.jpg'},
  { id: 6,  name: 'Garlic',  image: '/img/gb-min.jpg' },
  { id: 7,  name: 'Chinese', image: '/img/chinese/cheesepan-min.jpg'},
  { id: 8,  name: 'Wrap',    image: '/img/wrap/aloowrap.jpeg'},
  { id: 9,  name: 'Snacks',  image: '/img/chaat/bhalle.jpeg'},
  { id: 10, name: 'Momos',   image: '/img/momos/momo.jpg'},
  { id: 11, name: 'Chaap',   image: '/img/chaap/afgani-min.jpg'},
  { id: 12, name: 'Dinner',  image: '/img/dinner/dalmakhani-min.jpeg'},
  { id: 14, name: 'Naan',  image: '/img/dinner/butternaan-min.jpeg'},
];

function Category() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const offset = section.offsetTop - 5 * parseFloat(getComputedStyle(section).fontSize);
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  }
  return (
    <>
      {/* <h2 style={{ textAlign: 'center' }}>Categories</h2> */}
      <div className="outer-card">
        {categories.map((category) => (
          <Link
           to={`#${encodeURIComponent(category.name)}`}
           key={category.id}
           onClick={() => scrollToSection(category.name)}
           >
            <div className="card">
              <img src={category.image} className="card-img-top" alt={category.name} />
              <div className="card-body">
                <p className="card-text">{category.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Category;

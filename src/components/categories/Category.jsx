import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1,  name: 'Pizza',   image: '/img/pizza.png' },
  { id: 2,  name: 'Burger',  image: '/img/burger.png'},
  { id: 3,  name: 'Sandwich',image: '/img/cornsand.jpg'},
  { id: 4,  name: 'Pasta',   image: '/img/pasta.png'},
  { id: 5,  name: 'Shake',   image: '/img/shakes.jpg'},
  { id: 13, name: 'Cakes',  image: '/img/b1.png'},
  { id: 6,  name: 'Garlic',  image: '/img/gb.jpg' },
  { id: 7,  name: 'Chinese', image: '/img/cheesepan.jpg'},
  { id: 8,  name: 'Wrap',    image: '/img/aloowrap.jpeg'},
  { id: 9,  name: 'Snacks',  image: '/img/bhalle.jpeg'},
  { id: 10, name: 'Momos',   image: '/img/momo.jpg'},
  { id: 11, name: 'Chaap',   image: '/img/chaap1.jpg'},
  { id: 12, name: 'Dinner',  image: '/img/dalmakhani.jpeg'},
  { id: 14, name: 'Naan',  image: '/img/butternaan.jpeg'},
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

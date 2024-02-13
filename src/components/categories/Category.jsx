import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Pizza', image: '/img/pizza.png' },
  { id: 2, name: 'Burger', image: '/img/burger.png'},
  { id: 3, name: 'Sandwich', image: '/img/sandwich.png'},
  { id: 4, name: 'Pasta', image: '/img/pasta.png'},
  { id: 5, name: 'Shake', image: '/img/shake.png'},
  { id: 6, name: 'G-B', image: '/img/gb.png' },
  { id: 7, name: 'Chinese', image: '/img/chinese.png'},
  { id: 8, name: 'Wrap', image: '/img/wrap.png'},
  { id: 9, name: 'Snacks', image: '/img/snacks.png'},
  { id: 10, name: 'Momos', image: '/img/momos.png'},
  { id: 11, name: 'Chaap', image: '/img/chaap.png'},
  { id: 12, name: 'Dinner', image: '/img/dinner.png'},
];

function Category() {
  const handleCategoryClick = (categoryName) => {
    const element = document.getElementById(categoryName);
    if (element) {
      const offset = -70; 
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', offset});
    }
  };
  return (
    <>
      {/* <h2 style={{ textAlign: 'center' }}>Categories</h2> */}
      <div className="outer-card">
        {categories.map((category) => (
          <Link
           to={`#${encodeURIComponent(category.name)}`}
           key={category.id}
           onClick={() => handleCategoryClick(category.name)}
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

import React from 'react'
import './Banner.css'
import Category from '../categories/Category'
import Header from '../header/Header'
import FoodGallery from '../Gallery/FoodGallery'
import AboutUs from '../about/AboutUs'
function Banner() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="\img\pizza.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src="\img\burger.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src="\img\redpasta.jpg"className="d-block w-100" alt="..."/>
    </div>
  </div>

</div>
<Header/>
<FoodGallery/>
<AboutUs/>
    </>
  )
}

export default Banner
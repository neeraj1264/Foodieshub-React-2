// AboutUs.js

import React from "react";
import aboutUsImage from "/img/about.png";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
    <h3 className="about-heading">About Us</h3>
    <div className="about-us-container">
      <img src={aboutUsImage} alt="About Us" className="about-us-image" />
      <div className="about-us-content">
        <h2>Welcome to Foodies Hub</h2>
        <p>
          your ultimate destination for fast food and dinner cravings! We are
          passionate food enthusiasts dedicated to bringing you a delectable
          array of mouthwatering dishes that satisfy your taste buds and keep
          you coming back for more.
        </p>
        <p>
          At Foodies Hub, we understand that life can be busy, and sometimes you
          just crave a quick, delicious meal that hits the spot. That's why
          we've curated a menu bursting with flavors and options that cater to
          all your fast food and dinner desires. From scrumptious burgers to
          sizzling pizzas, from comforting pastas to exotic Asian delicacies, we
          have it all under one roof.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is simple - to provide you with high-quality, affordable,
          and incredibly tasty food that makes your dining experience memorable.
          We believe that great food doesn't have to come with a hefty price
          tag. That's why we've designed our menu to offer you the best of both
          worlds - exceptional taste and affordability.
        </p>
        <h2>Your Satisfaction Our Priority</h2>
        <p>
          Your satisfaction is our top priority. We take pride in delivering
          more than just food; we deliver an experience. With Foodies Hub, you
          can expect excellent customer service, reliable delivery, and a
          commitment to exceeding your expectations. Thank you for choosing
          Foodies Hub as your go-to destination for fast food and dinner. We
          look forward to serving you with culinary delights that keep you
          coming back for more. Join us in this gastronomic journey, and let's
          explore the world of flavors together! Satisfy your cravings with
          Foodies Hub today!
        </p>
      </div>
    </div>
    </>
  );
};

export default AboutUs;

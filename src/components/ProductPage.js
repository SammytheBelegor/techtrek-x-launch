// src/components/ProductPage.js
import React from 'react';
import './ProductPage.css';
import productImage from '../assets/images/techtrekx.jpg';
import productVideo from '../assets/videos/techtrekx.mp4';

const ProductPage = () => (
  <div className="product-page">
    <h1>TechTrek X Smartphone</h1>
    <img src={productImage} alt="TechTrek X" />
    <video controls>
      <source src={productVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p>Discover the new TechTrek X with cutting-edge features that redefine innovation.</p>
    <ul>
      <li>Feature 1</li>
      <li>Feature 2</li>
      <li>Feature 3</li>
      <li>And many more...</li>
    </ul>
  </div>
);

export default ProductPage;

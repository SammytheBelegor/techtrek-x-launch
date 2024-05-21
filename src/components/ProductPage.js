import React from 'react';
import './ProductPage.css';
import productImage from '../assets/images/techtrekx.jpg';
import productVideo from '../assets/videos/techtrekx.mp4';

const ProductPage = () => (
  <div className="product-page">
    <h1>TechTrek X Smartphone</h1>
    <div className="media-section">
      <img src={productImage} alt="TechTrek X" className="product-image" />
      <video controls className="product-video">
        <source src={productVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="product-details">
      <p>Discover the new TechTrek X with cutting-edge features that redefine innovation.</p>
      <ul className="features-list">
        <li>6.7-inch Super AMOLED Display with 120Hz Refresh Rate</li>
        <li>Quad Camera System with 108MP Primary Sensor</li>
        <li>5G Connectivity for Ultra-Fast Internet Speeds</li>
        <li>5000mAh Battery with 65W Fast Charging</li>
        <li>Latest Snapdragon 8 Gen 2 Processor</li>
        <li>IP68 Water and Dust Resistance</li>
        <li>Under-Display Fingerprint Scanner</li>
        <li>8GB/12GB RAM Options with 128GB/256GB Storage</li>
        <li>Enhanced AI Features for Photography and Performance Optimization</li>
        <li>And many more...</li>
      </ul>
    </div>
  </div>
);

export default ProductPage;

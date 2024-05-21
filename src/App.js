import React from 'react';
import './App.css';
import ProductPage from './components/ProductPage';
import OrderForm from './components/OrderForm';
import NewsFeed from './components/NewsFeed';
import ContactInfo from './components/ContactInfo';

const App = () => (
  <div className="app">
    <header className="app-header">
      <div className="header-content">
        <h1>TechTrek</h1>
        <nav className="nav-menu">
          <a href="#product">Product</a>
          <a href="#order">Order</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-widgets">
          <input type="text" className="search-bar" placeholder="Search..." />
          <div className="header-icons">
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-user"></i>
          </div>
        </div>
      </div>
    </header>
    <main className="app-main">
      <ProductPage />
      <OrderForm />
      <NewsFeed />
      <ContactInfo />
    </main>
    <footer className="app-footer">
      &copy; 2024 TechTrek. All rights reserved.
    </footer>
  </div>
);

export default App;

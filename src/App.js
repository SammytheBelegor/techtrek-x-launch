// src/App.js
import React from 'react';
import './App.css';
import ProductPage from './components/ProductPage';
import OrderForm from './components/OrderForm';
import NewsFeed from './components/NewsFeed';
import ContactInfo from './components/ContactInfo';

const App = () => (
  <div className="app">
    <header className="app-header">
      <h1>Welcome to TechTrek</h1>
    </header>
    <main>
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

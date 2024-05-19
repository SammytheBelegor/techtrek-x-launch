// src/components/NewsFeed.js
import React from 'react';
import './NewsFeed.css';

const newsItems = [
  { date: "2024-05-01", content: "TechTrek X launch event announced!" },
  { date: "2024-05-10", content: "Pre-orders start from today." },
  // More news items...
];

const NewsFeed = () => (
  <div className="news-feed">
    <h2>Latest News</h2>
    <ul>
      {newsItems.map((item, index) => (
        <li key={index}>
          <strong>{item.date}:</strong> {item.content}
        </li>
      ))}
    </ul>
  </div>
);

export default NewsFeed;

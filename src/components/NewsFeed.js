// src/components/NewsFeed.js
import React from 'react';
import './NewsFeed.css';

const newsItems = [
  { date: "2024-05-01", content: "TechTrek X launch event announced!" },
  { date: "2024-05-10", content: "Pre-orders start from today." },
  { date: "2024-05-15", content: "TechTrek X specifications revealed." },
  { date: "2024-05-20", content: "TechTrek X demo units available at select stores." },
  { date: "2024-05-25", content: "First batch of pre-orders shipped." },
  { date: "2024-06-01", content: "TechTrek X official launch event." },
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

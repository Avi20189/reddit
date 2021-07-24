import React from 'react';
import "./TrendingToday.css";
import trendingItems from "../../../data/trending-items/trending-items.json";

export default function TrendingToday() {
  return (
    <div className="trending-today-section">
      <span className="title">Trending Today</span>
      <div className="items">
        {trendingItems.map((item, index) => (
          <div key={index} className="trending-item" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${item.image_src})` }}>Trending item NO.{index}</div>
        ))}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import fetchNewsData from "./fetchNewsData";
import NewsCard from "../components/NewsCard";

const NewsComponent = () => {
  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchNewsData(category);
        setNewsData(data.articles);
      } catch (error) {
        setError("Error fetching news data.");
        console.error("Error fetching news data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div style={styles.newsContainer}>
      <h1>Latest News</h1>
      <div style={styles.categorySelector}>
        <label htmlFor="category">Choose a category:</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="general">General</option>
          <option value="world">World</option>
          <option value="breaking-news">Breaking News</option>
          <option value="legal">Legal</option>
        </select>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : newsData.length > 0 ? (
        <div style={styles.newsList}>
          {newsData.map((article) => (
            <NewsCard
              key={article.url}
              title={article.title}
              description={article.description}
              src={article.image}
              url={article.url}
            />
          ))}
        </div>
      ) : (
        <p>No articles available.</p>
      )}
    </div>
  );
};

const styles = {
  newsContainer: {
    padding: "20px",
  },
  categorySelector: {
    marginBottom: "20px",
  },
  newsList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
};

export default NewsComponent;

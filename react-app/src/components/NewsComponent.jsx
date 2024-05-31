import React, { useState, useEffect } from "react";
import fetchNewsData from "./fetchNewsData";
import defaultImage from "../assets/incitelogo";

const NewsItem = ({ title, description, urlToImage, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={urlToImage ? urlToImage : defaultImage}
        style={{ height: "200px", width: "343px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "News at its best for the world"}
        </p>
        <a
          href={url}
          className="btn btn-primary"
          rel="noopener noreferrer"
          target="_blank"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

const NewsComponent = () => {
  const [state, setState] = useState([]);
  const [hasError, setHasError] = useState(false);

  const fetchData = async () => {
    try {
      const data = await fetchNewsData();
      setState(data.articles);
    } catch (error) {
      setHasError(true);
      console.error("Error fetching news data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2 className="d-flex justify-content-center p-4">
        Latest <span className="badge text-bg-success"> news</span>
      </h2>
      {state &&
        state.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            urlToImage={news.urlToImage}
            url={news.url}
          />
        ))}
      {hasError && <p>An error occurred while fetching the news data.</p>}
    </>
  );
};

export default NewsComponent;

import fetchNewsData from "../components/fetchNewsData";

const NewsCard = ({ category }) => {
  const { state, hasError } = fetchNewsData({ category });

  return (
    <>
      <h2 className="d-flex justify-content-center p-4">
        Latest <span className="badge text-bg-success"> news</span>
      </h2>
      {state &&
        state.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      {hasError && <p>An error occurred while fetching the news data.</p>}
    </>
  );
};

export default NewsCard;

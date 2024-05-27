import fetchNewsData from "./fetchNewsData";

const NewsComponent = () => {
  const [newsData, setNewsData] = useState([]); // use usestate as a var tracker/updater????

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNewsData();
        setNewsData(data.articles);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {newsData.map((article) => (
        <div key={article.url}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          {/* Render other article properties as needed */}
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import fetchNewsData from "../components/fetchNewsData";
import NewsCard from "../components/NewsCard";
import placeholderImage from "../assets/incitelogo.png";

// Animations
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Styled Components
const PagebgColor = styled.div`
  display: flex;
  background-color: #636363;
  color: white;
  min-height: 100vh;
  flex-direction: column;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

const NewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

const Science = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setHasError(false);
      try {
        const data = await fetchNewsData("science");
        setNewsData(data.articles);
      } catch (error) {
        setHasError(true);
        console.error("Error fetching news data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <PagebgColor>
      <PageContainer>
        <NavBar />
        <MainContent>
          <p>Your content here</p>
          {loading ? (
            <p>Loading...</p>
          ) : hasError ? (
            <p>An error occurred while fetching the news data.</p>
          ) : (
            <NewsContainer>
              {newsData.map((article, index) => (
                <NewsCard
                  key={index}
                  title={article.title}
                  description={article.description}
                  src={article.image || article.urlToImage || placeholderImage}
                  url={article.url}
                />
              ))}
            </NewsContainer>
          )}
        </MainContent>
        <Footer />
      </PageContainer>
    </PagebgColor>
  );
};

export default Science;

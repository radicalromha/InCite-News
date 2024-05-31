import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import fetchNewsData from "../components/fetchNewsData";
import NewsCard from "../components/NewsCard";

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
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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

const World = () => {
  const [newsData, setNewsData] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNewsData("World news");
        setNewsData(data.articles);
      } catch (error) {
        setHasError(true);
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PageContainer>
      <NavBar />
      <MainContent>
        <NewsContainer>
          {newsData.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              urlToImage={article.urlToImage}
              url={article.url}
            />
          ))}
          {hasError && <p>An error occurred while fetching the news data.</p>}
        </NewsContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default World;

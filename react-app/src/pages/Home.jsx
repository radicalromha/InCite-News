import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

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

const HomeContainer = styled.div`
  text-align: center;
`;

const HomeHeading = styled.h1`
  font-size: 2.5em;
  margin-bottom: 1em;
  color: #333;
`;

const HomeContent = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #666;
`;

const Home = () => {
  return (
    <PageContainer>
      <NavBar />
      <MainContent>
        <HomeContainer>
          <HomeHeading>welcome to InCite</HomeHeading>
          <HomeContent>
            where attention spans are short so is the news
          </HomeContent>
        </HomeContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default Home;

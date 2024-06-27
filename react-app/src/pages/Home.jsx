import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DevCard from "./DPCard";
import RightsCard from "./HRCard";

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

const TopMeme = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 2em 0;
  display: block;
  margin: 0 auto;
`;

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

const HomeGraphics = styled.p`
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 2rem;

  > * {
    width: 48%; // Each child (card) takes up 48% of the container
  }
`;

const Home = () => {
  return (
    <PageContainer>
      <NavBar />
      <MainContent>
        <HomeContainer>
          <HomeHeading>Welcome to InCite</HomeHeading>
          <HomeContent>
            Where attention spans are short, so is the news.
          </HomeContent>
        </HomeContainer>
        <CardContainer>
          <DevCard />
          <RightsCard />
        </CardContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default Home;

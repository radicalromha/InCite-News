import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DevCard from "./DPCard";
import RightsCard from "./HRCard";
import WorldCard from "./WBCard";
import AmnesCard from "./AICard";
import EnviroCard from "./EPCard";
import WoCard from "./WPCard";

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
  color: #636363;
  background: #31363f;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

const HomeContainer = styled.div`
  text-align: center;
  background: #eeeeee;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const HomeHeading = styled.h1`
  font-size: 2.5em;
  margin-bottom: 1em;
  color: #333;
  background: #eeeeee;
`;

const HomeContent = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #666;
  background: #eeeeee;
`;

const HomeGraphics = styled.p`
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 2rem;
  flex-wrap: wrap;

  > * {
    width: 48%; // Each child (card) takes up 48% of the container
    flex: 1 1 48%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > * {
      width: 100%;
    }
  }
`;

const SubscribeSection = styled.div`
  background: #eeeeee;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  text-align: center;
`;

const SubscribeButton = styled.button`
  background: #007bff;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
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
        <CardContainer>
          <WorldCard />
          <AmnesCard />
        </CardContainer>
        <CardContainer>
          <EnviroCard />
          <WoCard />
        </CardContainer>
        <SubscribeSection>
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter to get the latest updates.</p>
          <SubscribeButton>Subscribe</SubscribeButton>
        </SubscribeSection>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default Home;

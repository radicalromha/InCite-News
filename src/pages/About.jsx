import aboutUsImage from "../assets/aboutus.png";
import incitememe from "../assets/incitememe.png";
import enviromeme from "../assets/enviromeme.png";
import humanitarian from "../assets/humanitarian.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ImageCarouselComponent from "../components/ImageCarousel";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0% {
  opacity: 0;
  transform: translateX(-10rem);
}

100% {
  opacity: 1;
  transform: translate(0);
}
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #31363f;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

const AboutContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 2em;
`;

const AboutHeading = styled.h1`
  font-size: 4.5em;
  margin-bottom: 1em;
  color: black;
  text-align: center;
  font-weight: bold;
  font-style: italic;
`;

const AboutHook = styled.h1`
  font-family: "Jersey 15", sans-serif;
  font-size: 2.5em;
  margin-bottom: 1em;
  color: black;
  text-align: center;
`;

const AboutIntro = styled.p`
  font-family: "Almendra", serif;
  font-weight: 500;
  font-style: normal;
  font-size: 2.3em;
  line-height: 1.6;
  color: black;
  text-align: center;
`;

const AboutLowerContent = styled.p`
  font-family: "Garamond", sans-serif;
  font-size: 2em;
  font-weight: light;
  line-height: 1.6;
  color: #666;
  text-align: center;
  color: black;
`;

const AboutUsImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 2em 0;
  display: block;
  margin: 0 auto;
`;

const AboutBottom = styled.p`
  font-size: 2.5em;
  line-height: 1.6;
  color: black;
  text-align: center;
  font-style: italic;
`;

const About = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const carouselImages = [
    {
      src: enviromeme,
      alt: "Meme and information about the environment",
    },
    {
      src: incitememe,
      alt: "Humanitarian information about website",
    },
    {
      src: humanitarian,
      alt: "Meme about website",
    },
  ];

  return (
    <PageContainer>
      <NavBar />
      <MainContent>
        <AboutContainer>
          <AboutHeading>about us</AboutHeading>
          <AboutHook>
            InCite is a new way of conceptualizing social and news media in
            general so peep game and lock in.
          </AboutHook>
          <ImageCarouselComponent
            images={carouselImages}
            settings={carouselSettings}
          />
          <AboutIntro>
            InCite is a new type of media created in may 2024 by eskinder
            fitsum. in november of 2020 the tigray region of ethiopia went
            through tremendous conflict, and when you are so preoccupied with
            something that the average person has no idea about that is the
            inspiration for InCite.
          </AboutIntro>
          <AboutUsImage src={aboutUsImage} alt="About Us" />
          <AboutHeading>mission statement</AboutHeading>
          <AboutLowerContent>
            most people don't really know much about global conflicts or what's
            happening around the world, lets change that.
          </AboutLowerContent>
          <AboutBottom>get informed get InCited</AboutBottom>
        </AboutContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default About;

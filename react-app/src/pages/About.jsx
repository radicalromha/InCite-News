import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import aboutUsImage from "../assets/aboutus.png";
import incitememe from "../assets/incitememe.png";
import enviromeme from "../assets/enviromeme.png";
import humanitarian from "../assets/humanitarian.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AboutPage = styled.div`
  background-color: #d3d3d3;
  border-radius: 8px;
`;
const AboutContainer = styled.div`
  padding: 2em;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const AboutNavContainer = styled.div`
  padding: 2em;
  background-color: #f9f9f9;
  border-radius: 8px;
  text-align: center;
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

const ImageCarousel = styled(Slider)`
  margin-bottom: 20px;
  .slick-slide > div {
    padding: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }
`;

const CarouselImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
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

const NavLink = styled(Link)`
  display: inline-block;
  margin: 1em;
  padding: 0.5em 1.5em;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
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

  return (
    <AboutPage>
      <AboutContainer>
        <AboutNavContainer>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/world">World</NavLink>
          <NavLink to="/breaking">Breaking</NavLink>
          <NavLink to="/business">Business</NavLink>
          <NavLink to="/tech">Tech</NavLink>
          <NavLink to="/legal">Legal</NavLink>
        </AboutNavContainer>
        <AboutHeading>about us</AboutHeading>
        <AboutHook>
          InCite is a new way of conceptualizing social and news media in
          general so peep game and lock in.
        </AboutHook>
        <ImageCarousel {...carouselSettings}>
          <div>
            <CarouselImage
              src={enviromeme}
              alt="Meme and information about the environment"
            />
          </div>
          <div>
            <CarouselImage
              src={incitememe}
              alt="Humanitarian information about website"
            />
          </div>
          <div>
            <CarouselImage src={humanitarian} alt="Meme about website" />
          </div>
        </ImageCarousel>
        <AboutIntro>
          InCite is a new type of media created in may 2024 by eskinder fitsum.
          in november of 2020 the tigray region of ethiopia went through
          tremendous conflict, and when you are so preoccupied with something
          that the average person has no idea about that is the inspiration for
          InCite.
        </AboutIntro>
        <AboutUsImage align="center" src={aboutUsImage} alt="About Us" />
        <AboutHeading>mission statement</AboutHeading>
        <AboutLowerContent>
          most people don't really know much about global conflicts or what's
          happening around the world, lets change that.
        </AboutLowerContent>
        <AboutBottom>get informed get InCited</AboutBottom>
      </AboutContainer>
    </AboutPage>
  );
};

export default About;

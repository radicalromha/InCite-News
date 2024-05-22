import styled from "styled-components";
import { Link } from "react-router-dom";
import aboutUsImage from "../assets/aboutus.png";
import incitememe from "../assets/incitememe.png";
import enviromeme from "../assets/enviromeme.png";
import humanitarian from "../assets/humanitarian.png";

const AboutPage = styled.div`
  background-color: #f9f9f9;
`;
const AboutContainer = styled.div`
  padding: 2em;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const AboutHeading = styled.h1`
  font-size: 4.5em;
  margin-bottom: 1em;
  color: black; /* or any color that is hella glarey */
  text-align: center;
  font-weight: bold;
  font-style: italic;
`;
const AboutHook = styled.h1`
  font-family: "Jersey 15", sans-serif;
  font-size: 2.5em;
  margin-bottom: 1em;
  color: black; /* or any color that is hella glarey */
  text-align: center;
`;
const AboutIntro = styled.p`
  font-size: 2.5em;
  line-height: 1.6;
  color: black;
  text-align: center;
`;
const AboutContent = styled.p`
  font-size: 2.5em;
  line-height: 1.6;
  color: #666;
  text-align: center;
  color: black;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const AboutImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 2em 0;
  margin-right: 10px;
`;
const NavLink = styled(Link)`
  display: inline-block;
  margin: 1em;
  padding: 0.5em 1em;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;
const AboutFooter = styled.h2`
  display: inline-block;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutContainer>
        <ImageContainer>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/world">World</NavLink>
          <NavLink to="/breaking">Breaking</NavLink>
          <NavLink to="/business">Business</NavLink>
          <NavLink to="/tech">Tech</NavLink>
          <NavLink to="/legal">Legal</NavLink>
        </ImageContainer>
      </AboutContainer>
      <AboutHeading>about us</AboutHeading>
      <AboutHook>
        InCite is a new way of conceptualizing social and news media in general
        so peep game and lock in.
      </AboutHook>
      <ImageContainer>
        <AboutImage align="left" src={enviromeme} alt="Meme about enviroment" />
        <AboutImage align="center" src={incitememe} alt="Meme about website" />
        <AboutImage
          align="center"
          src={humanitarian}
          alt="Meme about website"
        />
      </ImageContainer>
      <AboutIntro>
        InCite is a new type of media created in may 2024 by eskinder fitsum. in
        november of 2020 the tigray region of ethiopia went through tremendous
        conflict, and when you are so preoccupied with something that the
        average person has no idea about that is the inspiration for InCite.
      </AboutIntro>
      <ImageContainer>
        <AboutImage align="center" src={aboutUsImage} alt="About Us" />
      </ImageContainer>
      <AboutHeading>mission statement</AboutHeading>
      <AboutContent>
        most people don't really know much about global conflicts or what's
        happening around the world, lets change that.
      </AboutContent>
      <p>get informed get</p>
      <h1>InCited</h1>
    </AboutContainer>
  );
};

export default About;

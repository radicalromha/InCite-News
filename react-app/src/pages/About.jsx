import styled from "styled-components";
import { Link } from "react-router-dom";
import aboutUsImage from "../assets/aboutus.png";

const AboutContainer = styled.div`
  padding: 2em;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const AboutHeading = styled.h1`
  font-size: 2.5em;
  margin-bottom: 1em;
  color: black; /* or any color that is hella glarey */
  text-align: center;
`;

const AboutContent = styled.p`
  font-size: 2.5em;
  line-height: 1.6;
  color: #666;
  text-align: center;
  color: black;
`;

const AboutImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 2em 0;
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

const About = () => {
  return (
    <AboutContainer>
      <AboutContainer>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/world">World</NavLink>
        <NavLink to="/breaking">Breaking</NavLink>
        <NavLink to="/business">Business</NavLink>
        <NavLink to="/tech">Tech</NavLink>
        <NavLink to="/legal">Legal</NavLink>
      </AboutContainer>
      <AboutHeading>About Us</AboutHeading>
      <AboutContent>
        <h1>
          InCite is a new way of conceptualizing social news and media in
          general so peep game and lock in.
        </h1>
      </AboutContent>
      <AboutContent>
        InCite is a new type of media created in May 2024 by Eskinder Fitsum.
        I'm a computer science student at Illinois Tech, who enjoys software
        developement. In November of 2020 the Tigray region of Ethiopia went
        through tremendous conflict, and when you are so preoccupied with
        something that the average person has no idea about that is kinda the
        inspiration for InCite.
      </AboutContent>
      <AboutImage align="center" src={aboutUsImage} alt="About Us" />
      <AboutHeading>Mission Statement</AboutHeading>
      <AboutContent>
        The reality of the situation is that most people arent aware of global
        confilcts or global affairs in general. People often absolve themselves
        by sayin "I need to educate myself on the issue" but never do. The whole
        point with InCite is to have a platform that isnt too cumbersome when
        delivering news or information.
      </AboutContent>
      <p>
        get informed get<h1>InCited</h1>
      </p>
    </AboutContainer>
  );
};

export default About;

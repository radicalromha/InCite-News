import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  padding: 2em;
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
  font-color: #0000;
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

const Home = () => {
  return (
    <HomeContainer>
      <HomeHeading>Incite</HomeHeading>
      <HomeContent>
        In the age of digital uproar, where everyone's patience is short so is
        the news.
      </HomeContent>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/world">World</NavLink>
      <NavLink to="/breaking">Breaking</NavLink>
      <NavLink to="/business">Business</NavLink>
      <NavLink to="/tech">Tech</NavLink>
      <NavLink to="/legal">Legal</NavLink>
    </HomeContainer>
  );
};

export default Home;

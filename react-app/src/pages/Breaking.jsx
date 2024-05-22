import styled from "styled-components";
import { Link } from "react-router-dom";

const AboutNavContainer = styled.div`
  padding: 2em;
  background-color: #f9f9f9;
  border-radius: 8px;
  text-align: center;
`;

const NavLink = styled(Link)`
  display: block;
  margin-bottom: 1em;
  padding: 0.5em 1em;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-gap: 20px;
  padding: 20px;
`;

const LeftNavPanel = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const RightNavPanel = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
`;

const Breaking = () => {
  return (
    <PageContainer>
      <LeftNavPanel>
        <AboutNavContainer>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/world">World</NavLink>
          <NavLink to="/breaking">Breaking</NavLink>
          <NavLink to="/business">Business</NavLink>
          <NavLink to="/tech">Tech</NavLink>
          <NavLink to="/legal">Legal</NavLink>
        </AboutNavContainer>
      </LeftNavPanel>
      <CardContainer>
        {/* 4x4 Card Components */}
        {[...Array(16)].map((_, index) => (
          <Card key={index}>Card {index + 1}</Card>
        ))}
      </CardContainer>
      <RightNavPanel>Right Nav</RightNavPanel>
    </PageContainer>
  );
};

export default Breaking;

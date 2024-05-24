import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

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

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
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

const SearchBar = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const NewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

const NewsCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const NewsHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const NewsContent = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const Breaking = () => {
  return (
    <PageContainer>
      <NavBar>
        <NavLinks>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/world">World</NavLink>
          <NavLink to="/breaking">Breaking</NavLink>
          <NavLink to="/business">Business</NavLink>
          <NavLink to="/tech">Tech</NavLink>
          <NavLink to="/legal">Legal</NavLink>
        </NavLinks>
        <SearchBar placeholder="Search..." />
        <AuthButtons>
          <Button>Sign In</Button>
          <Button>Register</Button>
        </AuthButtons>
      </NavBar>
      <NewsContainer>
        {[...Array(6)].map((_, index) => (
          <NewsCard key={index}>
            <NewsHeading>Breaking News {index + 1}</NewsHeading>
            <NewsContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl nec tincidunt lacinia, nunc nisl aliquam nisl, eget
              aliquam nisl nisl eget nisl.
            </NewsContent>
          </NewsCard>
        ))}
      </NewsContainer>
    </PageContainer>
  );
};

export default Breaking;

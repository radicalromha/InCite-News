import { Link } from "react-router-dom";
import styled from "styled-components";
import Auth from "../components/auth";

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
  margin: 0 1em;
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

const Navbar = () => {
  return (
    <NavBar>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/world">World</NavLink>
        <NavLink to="/science">Science</NavLink>
        <NavLink to="/business">Business</NavLink>
        <NavLink to="/tech">Tech</NavLink>
        <NavLink to="/health">Health</NavLink>
      </NavLinks>
      <SearchBar placeholder="Search..." />
      <AuthButtons>
        <Auth />
      </AuthButtons>
    </NavBar>
  );
};

export default Navbar;

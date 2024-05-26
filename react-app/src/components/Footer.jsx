import styled from "styled-components";

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const FooterComponent = () => {
  return <Footer>&copy; 2024 InCite. All rights reserved.</Footer>;
};

export default FooterComponent;

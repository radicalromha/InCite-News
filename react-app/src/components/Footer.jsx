import styled from "styled-components";

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const FooterLink = styled.p`
  font-size: 1.7em;
  font-weight: 400;
  font-style: normal;
  color: white;

  &:hover {
    color: blue;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

const FooterComponent = () => {
  return (
    <Footer>
      &copy; 2024 InCite. All rights reserved. Eskinder Fitsum{" "}
      <p>
        <FooterLink>
          <a href="https://linktr.ee/incite_news">Linktree</a>
        </FooterLink>
      </p>
    </Footer>
  );
};

export default FooterComponent;

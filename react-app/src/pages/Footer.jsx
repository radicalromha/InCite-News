import styled from "styled-components";

const AboutFooter = () => {
  const FooterContainer = styled.footer`
    background-color: #333;
    color: white;
    padding: 2em 0;
    text-align: center;
  `;

  const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media (min-width: 768px) {
      flex-direction: row;
      text-align: left;
    }
  `;

  const FooterSection = styled.div`
    margin: 1em 0;

    @media (min-width: 768px) {
      margin: 0 1em;
    }
  `;

  const FooterHeading = styled.h2`
    font-size: 1.5em;
    margin-bottom: 0.5em;
  `;

  const FooterLink = styled.a`
    color: white;
    text-decoration: none;
    margin: 0.5em 0;
    display: block;

    &:hover {
      text-decoration: underline;
    }
  `;

  const SocialMediaIcons = styled.div`
    margin-top: 1em;

    a {
      margin: 0 0.5em;
      color: white;
      font-size: 1.5em;
    }
  `;

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Services</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Contact Us</FooterHeading>
          <p>3201 South State Street</p>
          <p>Chicago, Illinois 60616</p>
          <p>Email: romha223@gmail.com</p>
          <p>Phone: (678)-862-4175</p>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Check out the Github</FooterHeading>
          <SocialMediaIcons>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </SocialMediaIcons>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default AboutFooter;

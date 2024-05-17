import styled from "styled-components";

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
  font-size: 1.2em;
  line-height: 1.6;
  color: #666;
`;

const AboutImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 2em 0;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutHeading>About Us</AboutHeading>
      <AboutContent>
        <h1>
          InCite is a new way of conceptualizing news and media in general peep
          game and lock in
        </h1>
      </AboutContent>
      <AboutImage src="https://via.placeholder.com/800x400" alt="About Us" />
      <AboutContent>
        InCite is a new type of media created in May 2024 by Eskinder Fitsum.
        Who is a computer science student at Illinois Tech
      </AboutContent>
      <AboutContent>
        Praesent cursus sem magna, euismod ultrices lorem facilisis id. Fusce
        faucibus urna at augue convallis tincidunt. Donec aliquet odio non
        ligula euismod, sed hendrerit nisl ultricies. Etiam ut metus a arcu
        interdum tempor. Nulla facilisi. Etiam sit amet lorem a nunc volutpat
        suscipit.
      </AboutContent>
    </AboutContainer>
  );
};

export default About;

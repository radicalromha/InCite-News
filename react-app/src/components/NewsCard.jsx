import React from "react";
import styled from "styled-components";
import placeholderImage from "../assets/incitelogo.png";

const Card = styled.div`
  background-color: #333;
  color: #fff;
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
  max-width: 345px;
  display: inline-block;
  vertical-align: top;
  text-align: left;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

const Content = styled.div`
  padding: 10px;
`;

const Title = styled.h5`
  font-size: 1.25rem;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 0.9rem;
  margin: 10px 0;
`;

const Link = styled.a`
  display: inline-block;
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const NewsCard = ({ title, description, src, url }) => {
  return (
    <Card>
      <Image src={src ? src : placeholderImage} alt="News" />
      <Content>
        <Title>{title.slice(0, 50)}</Title>
        <Description>
          {description
            ? description.slice(0, 90)
            : "News at its best for the world..."}
        </Description>
        <Link href={url} target="_blank" rel="noopener noreferrer">
          Read More
        </Link>
      </Content>
    </Card>
  );
};

export default NewsCard;

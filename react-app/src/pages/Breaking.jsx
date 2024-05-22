import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr; /* Three columns: nav, content, nav */
  grid-gap: 20px;
  padding: 20px;
`;

const NavPanel = styled.div`
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
      <NavPanel>Left Nav</NavPanel>
      <CardContainer>
        {/* 4x4 Card Components */}
        {[...Array(16)].map((_, index) => (
          <Card key={index}>Card {index + 1}</Card>
        ))}
      </CardContainer>
      <NavPanel>Right Nav</NavPanel>
    </PageContainer>
  );
};

export default Breaking;

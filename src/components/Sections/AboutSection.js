import React from "react";
import styled from "styled-components";

const AboutSectionContainer = styled.div`
  text-align: center;
  color: rgb(119, 119, 119);
  margin: auto;
  font-size: 30px;
  margin-top: 300px;
  margin-bottom: 300px;
  width: 900px;
  font-weight: bold;
  color: rgb(170, 170, 170);
`;

const AboutSectionTitle = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  color: rgb(119, 119, 119);
`;

const Seperator = styled.hr`
  margin-top: 30px;
  border-top: 1px solid;
  width: 60px;
`;

export default function AboutSection({ children, title }) {
  return (
    <AboutSectionContainer>
      <AboutSectionTitle>{title}</AboutSectionTitle>
      {children}
      <Seperator />
    </AboutSectionContainer>
  );
}

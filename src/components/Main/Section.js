import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  cursor: default;
  height: 100%;
  width: 100%;
  text-align: center;
  color: rgb(119, 119, 119);
  font-size: 30px;
  font-weight: bold;
  color: rgb(170, 170, 170);
  margin-bottom: 150px;
`;

const SectionTitle = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  color: rgb(119, 119, 119);
`;

const Seperator = styled.hr`
  margin-top: 30px;
  border-top: 1px solid;
  width: 60px;
`;

export default function Section({
  title,
  isSeperatorExists = true,
  children,
  sectionContainerStyle,
}) {
  return (
    <SectionContainer style={sectionContainerStyle}>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
      {isSeperatorExists && <Seperator />}
    </SectionContainer>
  );
}

import React from "react";
import styled from "styled-components";

const BlogSectionContainer = styled.div`
  cursor: default;
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

const BlogSectionTitle = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  color: rgb(119, 119, 119);
`;

const Seperator = styled.hr`
  margin-top: 30px;
  border-top: 1px solid;
  width: 60px;
`;

export default function Blogection({ children, title }) {
  return (
    <BlogSectionContainer>
      <BlogSectionTitle>{title}</BlogSectionTitle>
      {children}
      <Seperator />
    </BlogSectionContainer>
  );
}

import React from "react";
import styled from "styled-components";
import JavaScript from "../../assests/images/javascript.png";
import Reactjs from "../../assests/images/reactjs.png";
import Nodejs from "../../assests/images/nodejs.png";
import Graphql from "../../assests/images/graphql.png";
import NPM from "../../assests/images/npm.png";

const TechStackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 200px;
  margin-right: 200px;
  margin-bottom: 300px;
`;

const TechLogo = styled.img`
  width: 150px;
`;

const TechStackTitle = styled.h1`
  text-align: center;
  color: rgb(119, 119, 119);
  font-size: 18px;
`;
const Seperator = styled.hr`
  margin-top: 30px;
  border-top: 1px solid;
  width: 60px;
  margin-bottom: 300px;
`;

export default function TechStackSection({ title }) {
  const techStackList = [
    {
      title: "React.js",
      path: Reactjs,
    },
    {
      title: "NPM",
      path: NPM,
    },

    {
      title: "JavaScript",
      path: JavaScript,
    },
    {
      title: "Node.js",
      path: Nodejs,
    },
    {
      title: "GraphQL",
      path: Graphql,
    },
  ];

  return (
    <>
      <TechStackTitle>{title}</TechStackTitle>
      <TechStackContainer>
        {techStackList.map((techStack) => (
          <TechLogo src={techStack.path} alt={techStack.title} />
        ))}
      </TechStackContainer>
    </>
  );
}

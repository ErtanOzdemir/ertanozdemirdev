import React from "react";
import styled from "styled-components";
import JavaScript from "../../assests/images/javascript.png";
import Reactjs from "../../assests/images/reactjs.png";
import Nodejs from "../../assests/images/nodejs.png";
import Graphql from "../../assests/images/graphql.png";
import NPM from "../../assests/images/npm.png";
import {
  ExpressjsIcon,
  GraphqlIcon,
  HtmlIcon,
  JavascriptIcon,
  JestIcon,
  MongoDBIcon,
  NodejsIcon,
  NpmIcon,
  ReactIcon,
} from "../../assests/Icon";

const TechStackContainer = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr;
  margin-left: 25%;
  margin-right: 25%;
  margin-bottom: 300px;
  justify-items: center;
  align-items: center;
`;

const TechLogo = styled.img`
  width: 150px;
`;

const TechStackTitle = styled.h1`
  text-align: center;
  color: rgb(119, 119, 119);
  font-size: 18px;
  margin-bottom: 2.7rem;
`;
// const Seperator = styled.hr`
//   margin-top: 30px;
//   border-top: 1px solid;
//   width: 60px;
//   margin-bottom: 300px;
// `;

export default function TechStackSection({ title }) {
  // const techStackList = [
  //   {
  //     title: "React.js",
  //     path: Reactjs,
  //   },
  //   {
  //     title: "NPM",
  //     path: NPM,
  //   },

  //   {
  //     title: "JavaScript",
  //     path: JavaScript,
  //   },
  //   {
  //     title: "Node.js",
  //     path: Nodejs,
  //   },
  //   {
  //     title: "GraphQL",
  //     path: Graphql,
  //   },
  // ];

  return (
    <>
      <TechStackTitle>{title}</TechStackTitle>
      <TechStackContainer>
        {/* {techStackList.map((techStack) => (
          <TechLogo src={techStack.path} alt={techStack.title} />
        ))} */}
        <JavascriptIcon />
        <ReactIcon />
        <JestIcon />
        <NodejsIcon />
        <ExpressjsIcon />
        <GraphqlIcon />
        <MongoDBIcon />
        <NpmIcon />
        <HtmlIcon />
      </TechStackContainer>
    </>
  );
}

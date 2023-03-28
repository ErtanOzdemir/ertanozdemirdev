import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoadingScreen from "../LoadingPage";
import { Highlight, Link } from "../../components/Common/CommonComponents";
import PageWithNavBar from "../../components/Template/PageWithNavBar";
import Section from "../../components/Main/Section";
import {
  ExpressjsIcon,
  GraphqlIcon,
  JavascriptIcon,
  JestIcon,
  MongoDBIcon,
  NodejsIcon,
  NpmIcon,
  ReactIcon,
} from "../../assests/Icon";

const TechStackContainer = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-template: 1fr 1fr / 1fr 1fr;
  }
`;

function MainPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3900);
  }, []);
  return (
    <>
      {loading && <LoadingScreen />}
      <PageWithNavBar>
        <Section
          sectionContainerStyle={{
            minHeight: "calc(100vh-90px)",
            "@media (max-width: 768px)": { minHeight: "initial" },
          }}
          isSeperatorExists={false}
        >
          <div
            style={{
              fontWeight: 900,
              fontSize: "11.2vw",
              fontStyle: "bold",
              color: "rgb(119, 119, 119)",
              textAlign: "center",
            }}
          >
            FULL
            <br />
            STACK
            <br />
            <div
              style={{
                paddingLeft: "15px",
                paddingRight: "15px",
                border: "solid 1px",
                display: "inline",
                borderRadius: "10px",
              }}
            >
              DEVELOPER
            </div>
          </div>
        </Section>
        <Section title={"About"}>
          Hi, I am Ertan. I interested in web. I can use{" "}
          <Highlight>JavaScript</Highlight>, <Highlight>React.js </Highlight>
          for developing web applications and I am also learning
          <Highlight> Node.js</Highlight> - <Highlight>Express.js</Highlight>{" "}
          and <Highlight>GraphQL</Highlight> to develop back-end applications.
        </Section>
        <Section title={"Tech Stack"} isSeperatorExists={false}>
          <TechStackContainer>
            <JavascriptIcon />
            <ReactIcon />
            <JestIcon />
            <NodejsIcon />
            <ExpressjsIcon />
            <GraphqlIcon />
            <MongoDBIcon />
            <NpmIcon />
          </TechStackContainer>
        </Section>

        <Section>
          I also write blog posts on{" "}
          <Link href='https://ozdemirertan.medium.com/' target='_blank'>
            Medium
          </Link>{" "}
          and{" "}
          <Link href='https://dev.to/ertanozdemir' target='_blank'>
            dev.to
          </Link>{" "}
          about coding and algorithms.
        </Section>
      </PageWithNavBar>
    </>
  );
}

export default MainPage;

import React, { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar";
import LoadingScreen from "./components/Pages/LoadingPage";
import AboutSection from "./components/Sections/AboutSection";
import TechStackSection from "./components/Sections/TechStackSection";

import styled from "styled-components";
import { Highlight, Link } from "./components/Common/CommonComponents";
import Footer from "./components/Footer";
import BlogSection from "./components/Sections/BlogSection";
import { CloseIcon } from "./assests/Icon";

const ContactModal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 150px;
  background-color: white;
`;

const DarkerBackground = styled.div`
  background-color: rgb(26, 24, 27, 0.9);
  backdrop-filter: blur(10px);
  position: fixed;
  height: 100%;
  width: 100%;
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContactModal = () => {
    setIsModalOpen(true);
  };

  const closeContactModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3900);
  }, []);
  return (
    <>
      {isModalOpen && (
        <DarkerBackground>
          {/*<ContactModal />*/}
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              paddingTop: "40px",
              paddingRight: "40px",
            }}
          >
            <div onClick={closeContactModal}>
              <CloseIcon />
            </div>
          </div>
          <div
            style={{
              position: "fixed",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              style={{
                padding: "15px",
                color: "white",
                textAlign: "center",
                fontSize: "50px",
              }}
            >
              About
            </div>
            <div
              style={{
                padding: "15px",
                textAlign: "center",
                color: "white",
                fontSize: "50px",
              }}
            >
              GitHub
            </div>
            <div
              style={{
                padding: "15px",
                textAlign: "center",
                color: "white",
                fontSize: "50px",
              }}
            >
              Spotify
            </div>
          </div>
        </DarkerBackground>
      )}
      {loading && <LoadingScreen />}
      <NavigationBar
        onClickedToContactButton={openContactModal}
        onClickedToCloseContactButton={closeContactModal}
      />
      (
      <>
        <div
          style={{
            height: "100%",
            fontWeight: 900,
            fontSize: "11.2vw",
            fontStyle: "bold",
            color: "rgb(119, 119, 119)",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          FULL
          <br />
          STACK
          <br />
          {/* Hey, don't touch me! */}
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
        <AboutSection title={"About"}>
          Hi, I am Ertan. I interested in web. I can use{" "}
          <Highlight>JavaScript</Highlight>,{" "}
          <Highlight>React.js </Highlight>
          for developing web applications and I am also learning
          <Highlight> Node.js</Highlight> - <Highlight>Express.js</Highlight>{" "}
          and <Highlight>GraphQL</Highlight> to develop back-end applications.
        </AboutSection>

        <TechStackSection title={"Tech Stack"} />
        <BlogSection>
          I also write blog posts on{" "}
          <Link href='https://ozdemirertan.medium.com/' target='_blank'>
            Medium
          </Link>{" "}
          and{" "}
          <Link href='https://dev.to/ertanozdemir' target='_blank'>
            dev.to
          </Link>{" "}
          about coding and algorithms.
        </BlogSection>
        <Footer></Footer>
      </>
      )
    </>
  );
}

export default App;

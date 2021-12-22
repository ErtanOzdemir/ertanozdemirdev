import React, { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar";
import LoadingScreen from "./components/Pages/LoadingPage";
import AboutSection from "./components/Sections/AboutSection";
import TechStackSection from "./components/Sections/TechStackSection";

import styled from "styled-components";
import { Highlight } from "./components/Common/CommonComponents";

const ContactModal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 150px;
  background-color: white;
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
      {loading && <LoadingScreen />}
      <NavigationBar
        onClickedToContactButton={openContactModal}
        onClickedToCloseContactButton={closeContactModal}
      />
      {isModalOpen && <ContactModal />}
      {!isModalOpen && (
        <>
          <div
            style={{
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
                borderLeftColor: "rgb(119, 119, 119)",
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
            <Highlight>React Library </Highlight>
            for developing web applications and I am also learning
            <Highlight> Node.js</Highlight> - <Highlight>Express.js</Highlight>{" "}
            and <Highlight>GraphQL</Highlight> to develop back-end applications.
          </AboutSection>

          <TechStackSection title={"Tech Stack"} />
        </>
      )}
    </>
  );
}

export default App;

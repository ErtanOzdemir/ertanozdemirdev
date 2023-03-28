import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import NavigationBar from "../NavigationBar";

const ChildrenContainer = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  height: 100%;

  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-left: 10%;
    margin-right: 10%;
  }
`;

export default function PageWithNavBar({ children }) {
  return (
    <>
      <NavigationBar />
      <ChildrenContainer>{children}</ChildrenContainer>
      <Footer />
    </>
  );
}

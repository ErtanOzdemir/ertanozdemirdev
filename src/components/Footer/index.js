import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Highlight } from "../Common/CommonComponents";

const FooterContainer = styled.footer`
  bottom: 0;
  display: flex;
  bottom: 0px;
  color: rgb(170, 170, 170);
  padding: 70px;
  padding-left: 50px;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const DateTime = styled.div`
  font-weight: bold;
`;

export default function Footer() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <FooterContainer>
      <DateTime>
        <span style={{ marginRight: "20px" }}>
          <Highlight> ISTANBUL, TR</Highlight>
        </span>
        {dateState.toLocaleString("en-US", {
          timeZone: "Turkey",
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        })}{" "}
      </DateTime>
    </FooterContainer>
  );
}

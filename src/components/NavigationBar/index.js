import React from "react";
import { ContactButton, NameCard, NavigationBarContainer } from "./styles";

export default function NavigationBar() {
  return (
    <NavigationBarContainer>
      <NameCard>
        <div
          style={{
            fontSize: "26px",
          }}
        >
          Ertan
        </div>{" "}
        Özdemir
      </NameCard>
      <ContactButton>Contact</ContactButton>
    </NavigationBarContainer>
  );
}

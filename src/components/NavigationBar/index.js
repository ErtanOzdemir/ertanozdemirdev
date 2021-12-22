import React from "react";
import {
  ContactButton,
  NameCard,
  NavigationBarContainer,
  TitleContainer,
  WorkingCard,
} from "./styles";

export default function NavigationBar() {
  return (
    <NavigationBarContainer>
      <NameCard>
        <div
          style={{
            fontSize: "25px",
          }}
        >
          Ertan
        </div>{" "}
        Özdemir
      </NameCard>
      <TitleContainer>
        <WorkingCard>
          Web Developer <br />
          TalentGrid / 2021 - Present
        </WorkingCard>

        <ContactButton>Contact</ContactButton>
      </TitleContainer>
    </NavigationBarContainer>
  );
}

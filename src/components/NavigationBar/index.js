import React from "react";
import {
  ContactButton,
  NameCard,
  NavigationBarContainer,
  TitleContainer,
  WorkingCard,
} from "./styles";

export default function NavigationBar({ onClickedToContactButton }) {
  return (
    <NavigationBarContainer>
      <NameCard>
        <div
          style={{
            fontSize: "45px",
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

        <ContactButton onClick={onClickedToContactButton}>
          Contact
        </ContactButton>
      </TitleContainer>
    </NavigationBarContainer>
  );
}

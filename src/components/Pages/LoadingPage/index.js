import React from "react";
import { LoadingContainer, PipeImage, TextContainer } from "./style";
import Pipes from "../../../assests/images/pipes.png";
export default function LoadingScreen() {
  return (
    <LoadingContainer>
      <PipeImage src={Pipes}></PipeImage>
      <TextContainer>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit
        scelerisque urna, nec eleifend lectus condimentum sed. Donec maximus
        purus in quam facilisis finibus."
      </TextContainer>
    </LoadingContainer>
  );
}

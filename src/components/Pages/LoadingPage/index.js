import React from "react";
import {
  LoadingContainer,
  LoadingIconContainer,
  PipeImage,
  TextContainer,
} from "./style";
import Pipes from "../../../assests/images/pipes.png";
import Loading from "../../../assests/images/loading.gif";
export default function LoadingScreen() {
  return (
    <LoadingContainer>
      <PipeImage src={Pipes}></PipeImage>
      <TextContainer>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit
        scelerisque urna, nec eleifend lectus condimentum sed. Donec maximus
        purus in quam facilisis finibus."
      </TextContainer>
      <LoadingIconContainer src={Loading}></LoadingIconContainer>
    </LoadingContainer>
  );
}

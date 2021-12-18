import styled, { keyframes } from "styled-components";

const loadingScreenDisappear = keyframes`
100% { bottom: 100%; }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  background: blue;
  animation: ${loadingScreenDisappear} 0.5s forwards;
  animation-delay: 3s;
  height: 100%;
  width: 100%;
  background-color: #1a181b;
  opacity: 1;
  z-index: 1;
`;

export const PipeImage = styled.img`
  width: 25%;
  border-radius: 10px;
`;

export const TextContainer = styled.div`
  margin-top: 50px;
  padding: 0 25% 0 25%;
  text-align: center;
  color: rgb(119, 119, 119);
  font-style: italic;
  font-size: 18px;
  font-weight: 700;
`;

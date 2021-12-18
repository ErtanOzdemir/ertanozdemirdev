import styled from "styled-components";

export const NavigationBarContainer = styled.div`
  display: flex;
  height: 90px;
  padding-left: 50px;
  padding-right: 50px;
  align-items: center;
  background-color: #1a181b;
  border-bottom: 1px solid rgb(119, 119, 119);
  justify-content: space-between;
`;

export const NameCard = styled.div`
  text-align: center;
  color: rgb(119, 119, 119);
  font-weight: 700;
`;

export const ContactButton = styled.button`
  height: 40px;
  background-color: #1a181b;
  border: 1px solid rgb(119, 119, 119);
  border-radius: 30px;
  color: rgb(119, 119, 119);
  font-weight: 700;
  padding-left: 30px;
  padding-right: 30px;
`;

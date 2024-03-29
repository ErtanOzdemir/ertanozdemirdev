import styled from "styled-components";

export const NavigationBarContainer = styled.div`
  display: flex;
  height: 90px;
  padding-left: 50px;
  padding-right: 50px;
  align-items: center;
  background-color: #1a181b;
  justify-content: space-between;
  color: rgb(119, 119, 119);
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const WorkingCard = styled.div`
  font-weight: 200;
`;

export const NameCard = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-right: -34%;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ContactButton = styled.button`
  margin-left: 30px;
  height: 40px;
  background-color: #1a181b;
  border: 1px solid rgb(119, 119, 119);
  border-radius: 30px;
  color: rgb(119, 119, 119);
  font-weight: 700;
  padding-left: 30px;
  padding-right: 30px;
  &:hover {
    background-color: rgb(119, 119, 119);
    color: #1a181b;
  }
`;

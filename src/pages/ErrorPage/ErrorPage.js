import styled from "styled-components";
import PageWithNavBar from "../../components/Template/PageWithNavBar";

const ErroContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 200px);
  display: flex;

  justify-content: center;
  flex-direction: column;
`;

const ErrorMessage = styled.div`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 20px;
  color: rgb(119, 119, 119);
`;

const ErrorDescription = styled.div`
  color: rgb(119, 119, 119);
`;

export default function ErrorPage() {
  return (
    <PageWithNavBar>
      <ErroContainer>
        <ErrorMessage>Oops...</ErrorMessage>
        <ErrorDescription>
          Sorry, the page you were looking for seems to be on vacation.
        </ErrorDescription>
      </ErroContainer>
    </PageWithNavBar>
  );
}

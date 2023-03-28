import React from "react";
import styled from "styled-components";

const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  border-radius: 20px;
`;
const TableData = styled.td`
  border: 1px solid rgb(119, 119, 119);
  text-align: left;
  padding: 8px;
`;

const TableHeader = styled.th`
  border: 1px solid rgb(119, 119, 119);
  text-align: left;
  padding: 8px;
`;

const TableRow = styled.tr`
  &:nth-child(odd) {
    color: rgb(119, 119, 119);
    td:nth-child(2) {
      &:hover {
        text-decoration: underline;
        text-decoration-color: rgb(119, 119, 119);
      }
    }
  }
  &:nth-child(even) {
    background-color: rgb(119, 119, 119);
    color: #1a181b;

    td:nth-child(1),
    td:nth-child(2) {
      border-right: 1px solid #1a181b;
    }

    td:nth-child(2) {
      &:hover {
        text-decoration: underline;
        text-decoration-color: #1a181b;
      }
    }
  }
`;

const handleClickLink = (link) => {
  window.open(link, "noopener,noreferrer");
};

export default function WorkExperience() {
  return (
    <Table>
      <TableRow>
        <TableHeader>Date</TableHeader>
        <TableHeader>Company</TableHeader>
        <TableHeader>What I did?</TableHeader>
      </TableRow>
      <TableRow>
        <TableData>Jun 2021 - Mar 2023</TableData>
        <TableData
          onClick={() =>
            handleClickLink(
              "https://www.linkedin.com/company/talentgrid-io-tech-recruitment"
            )
          }
        >
          <b>TalentGrid</b>
        </TableData>
        <TableData>
          I developed both backend and frontend applications using by these
          technologies: React.js, Node.js, GraphQL, Puppeteer, Chrome Extension,
          Git, AWS S3, GitHub Actions
        </TableData>
      </TableRow>
      <TableRow>
        <TableData>Feb 2020 - Jan 2021</TableData>
        <TableData
          onClick={() =>
            handleClickLink("https://www.linkedin.com/company/yetkingencler/")
          }
        >
          <b>Yetkin Gençler</b>
        </TableData>
        <TableData>
          In order to learn 21st century competencies and to be able to have
          these competencies, I was entitled to participate in the YetGen
          program, which lasts 14 weeks. In this program, I learned about
          presentation techniques, sustainability and social innovation, basic
          Excel training, career planning, digital literacy and
          self-development, and I continue to apply many of these topics in my
          own life.
        </TableData>
      </TableRow>
      <TableRow>
        <TableData>Dec 2019 - Oct 2020</TableData>
        <TableData>
          <b>Google DSC</b>
        </TableData>
        <TableData>
          I actively participated in the events organized by the Google
          Developer Student club by taking notes and giving feedback to the
          speakers and team leads in order to prevent technical errors,
          disruptions to the audience's attention and negative situations that
          disrupted the event from happening again in the following events.
        </TableData>
      </TableRow>
    </Table>
  );
}

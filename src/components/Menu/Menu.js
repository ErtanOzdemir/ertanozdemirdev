import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CloseIcon } from "../../assests/Icon";

const DarkerBackground = styled.div`
  background-color: rgb(26, 24, 27, 0.9);
  backdrop-filter: blur(10px);
  position: fixed;
  height: 100%;
  width: 100%;
`;

const MenuItem = styled.div`
  padding: 15px;
  color: white;
  text-align: center;
  font-size: 50px;
`;

export default function Menu({ isOpen, onMenuClose }) {
  const navigate = useNavigate();

  const handleNavigate = ({ to }) => {
    navigate(to);
  };

  return (
    <>
      {isOpen && (
        <DarkerBackground>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              paddingTop: "40px",
              paddingRight: "40px",
            }}
          >
            <div onClick={onMenuClose}>
              <CloseIcon />
            </div>
          </div>
          <div
            style={{
              position: "fixed",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <MenuItem onClick={() => handleNavigate("/about")}>About</MenuItem>
            <MenuItem onClick={() => handleNavigate("/github")}>
              GitHub
            </MenuItem>
            <MenuItem onClick={() => handleNavigate("/spotify")}>
              Spotify
            </MenuItem>
          </div>
        </DarkerBackground>
      )}
    </>
  );
}

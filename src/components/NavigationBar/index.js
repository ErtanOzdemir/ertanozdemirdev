import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../Menu/Menu";
import { ContactButton, NameCard, NavigationBarContainer } from "./styles";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <Menu isOpen={isMenuOpen} onMenuClose={closeMenu} />
      <NavigationBarContainer>
        <NameCard onClick={() => navigate("/")}>Ertan Özdemir</NameCard>

        <ContactButton onClick={openMenu}>Menu</ContactButton>
      </NavigationBarContainer>
    </>
  );
}

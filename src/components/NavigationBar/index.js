import React, { useState } from "react";
import Menu from "../Menu/Menu";
import {
  ContactButton,
  NameCard,
  NavigationBarContainer,
  TitleContainer,
  WorkingCard,
} from "./styles";

export default function NavigationBar({}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <NameCard>Ertan Özdemir</NameCard>

        <ContactButton onClick={openMenu}>Menu</ContactButton>
      </NavigationBarContainer>
    </>
  );
}

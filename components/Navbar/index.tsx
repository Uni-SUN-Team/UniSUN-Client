import React, {useState} from 'react';
import {
  NavbarContainer,
  NavbarInnerContainer,
  LeftContainer,
  NavbarLinkContainer,
  NavbarLink,
  Drawer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarLinkExtended,
  Logo,
  SignUpButton,
} from './navbar.styles';

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src="/assets/logo/logo-without-name.png" />
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink>Courses</NavbarLink>
            <NavbarLink>Workshop</NavbarLink>
            <NavbarLink>Training rooms</NavbarLink>
            <NavbarLink>Article</NavbarLink>
            <NavbarLink>Services</NavbarLink>
            <NavbarLink>About us</NavbarLink>
            <NavbarLink>Sign In</NavbarLink>
            <SignUpButton />
            <Drawer onClick={() => setExtendNavbar((prev) => !prev)}>
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </Drawer>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended>Courses</NavbarLinkExtended>
          <NavbarLinkExtended>About us</NavbarLinkExtended>
          <NavbarLinkExtended>Workshop</NavbarLinkExtended>
          <NavbarLinkExtended>Training rooms</NavbarLinkExtended>
          <NavbarLinkExtended>Article</NavbarLinkExtended>
          <NavbarLinkExtended>Another Services</NavbarLinkExtended>
          <NavbarLinkExtended>Signin</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;

import styled from 'styled-components';
import theme from 'utils/theme';
import {SignUpButton as DefaultSignUpButton} from 'components/Button';

interface INavbarContainer {
  extendNavbar: boolean;
}

export const NavbarContainer = styled.nav<INavbarContainer>`
  width: 100%;
  height: ${({extendNavbar}) => (extendNavbar ? '100vh' : '80px')};
  background-color: ${theme.PRIMARY_COLOR};
  display: flex;
  flex-direction: column;
`;

export const LeftContainer = styled.div`
  flex: 15%;
  display: flex;
  align-items: center;
  padding-left: 100px;

  @media (min-width: 425px) and (max-width: 900px) {
    padding-left: 50px;
  }
  @media (max-width: 425px) {
    padding-left: 20px;
  }
`;
export const RightContainer = styled.div`
  flex: 85%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 100px;

  @media (min-width: 425px) and (max-width: 900px) {
    padding-right: 50px;
  }
  @media (max-width: 425px) {
    padding-right: 20px;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;
export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled.div`
  color: ${theme.WHITE_COLOR};
  margin: 10px;

  @media (max-width: 900px) {
    display: none;
  }
`;
export const NavbarLinkExtended = styled.div`
  color: ${theme.WHITE_COLOR};
  margin: 10px;
`;

export const Logo = styled.img`
  width: 48px;
  height: 51px;
`;

export const Drawer = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: ${theme.WHITE_COLOR};
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const SignUpButton = styled(DefaultSignUpButton)`
  @media (max-width: 900px) {
    display: none;
  }
`;

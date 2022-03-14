import React, {useState} from 'react';
import Menu from './Menu';
import Burger from './Burger';
import FocusLock from 'react-focus-lock';
import {useOnClickOutside} from 'hooks/useOnClickOutside';
import styled from 'styled-components';
import theme from 'utils/theme';
import {FiSearch} from 'react-icons/fi';

const Navbar = styled.div`
  position: relative;
  background-color: ${theme.PRIMARY_COLOR};
  height: 79px;
  padding: 1.28rem 2.35rem;
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  width: 30px;
  height: 30px;
  right: 6.875rem;
  top: 1.4rem;
`;

const Logo = styled.img`
  width: 48px;
  height: 51px;
`;

interface IProps {
  ref?: any;
}

function HamburgerMenu({ref}: IProps) {
  const [open, setOpen] = useState(false);
  useOnClickOutside({ref, handler: () => setOpen(false)});
  return (
    <Navbar ref={ref}>
      <Logo src="/assets/logo/logo-without-name.png" />
      <SearchIcon color="white" />
      <FocusLock disabled={!open}>
        <Burger open={open} setOpen={setOpen} aria-controls="main-menu" />
        <Menu id="main-menu" open={open} setOpen={setOpen} />
      </FocusLock>
    </Navbar>
  );
}

export default HamburgerMenu;

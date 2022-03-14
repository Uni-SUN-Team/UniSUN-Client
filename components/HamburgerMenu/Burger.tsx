import React, {Dispatch, SetStateAction} from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
interface BurgerProps extends ButtonProps {
  open: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export const StyledBurger = styled.button<BurgerProps>`
  position: absolute;
  top: 1.4rem;
  right: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    // width: 21px;
    // height: 2.33px;
    width: 2rem;
    height: 0.25rem;
    background: ${({theme, open}) => (open ? theme.BLACK_COLOR : theme.WHITE_COLOR)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({open}) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({open}) => (open ? '0' : '1')};
      transform: ${({open}) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({open}) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = ({open, setOpen, ...props}: BurgerProps) => {
  const isExpanded = open ? true : false;

  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen && setOpen(!open)}
      {...props}>
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

export default Burger;

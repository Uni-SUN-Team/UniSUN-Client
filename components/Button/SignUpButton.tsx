import React from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';

const Button = styled.button`
  width: 112px;
  font-weight: bold;
  background-color: ${theme.WHITE_COLOR};
  border: 1px solid ${theme.WHITE_COLOR};
  border-radius: 22px;
  color: ${theme.PRIMARY_COLOR};
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function SignUpButton(props: ButtonProps) {
  return <Button {...props}>Sign Up</Button>;
}

export default SignUpButton;

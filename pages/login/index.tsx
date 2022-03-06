import React from 'react';
import type {NextPage} from 'next';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login: NextPage = () => {
  return (
    <Container>
      <h1>
        Welcome,
        <br />
        Login Page
      </h1>
    </Container>
  );
};

export default Login;

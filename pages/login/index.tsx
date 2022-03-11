import React, {useState} from 'react';
import type {NextPage} from 'next';
import styled from 'styled-components';
import {signIn} from 'next-auth/react';

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Login: NextPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    signIn('credentials', {
      username,
      password,
    });
  };
  return (
    <Container>
      <div>Welcome to Login</div>
      <form method="post" action="/api/auth/callback/credentials">
        <label>
          Username
          <input
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" onClick={onLogin}>
          Sign in
        </button>
      </form>
    </Container>
  );
};

export default Login;

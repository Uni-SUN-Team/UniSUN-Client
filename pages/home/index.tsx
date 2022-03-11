import React from 'react';
import type {NextPage} from 'next';
import styled from 'styled-components';

import {getSession, GetSessionParams, signOut, useSession} from 'next-auth/react';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  const {data: session} = useSession();
  console.log('session :>> ', session);
  return (
    <Container>
      <div>Welcome to Home</div>
      <br />
      <button onClick={() => signOut()}>SignOut</button>
    </Container>
  );
};

// export async function getServerSideProps(context: GetSessionParams | undefined) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: true,
//       },
//     };
//   }

//   return {
//     props: {session},
//   };
// }

export default Home;

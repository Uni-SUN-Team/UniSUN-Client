import React from 'react';
import type {NextPage} from 'next';
import Image from 'next/image';
import styled from 'styled-components';

import {getSession, GetSessionParams, signOut, useSession} from 'next-auth/react';
import theme from 'utils/theme';
import BackgroundImage from 'components/BackgroundImage';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home: NextPage = () => {
  // const {data: session} = useSession();
  return (
    <Container>
      <BackgroundImage src="/assets/background/Path-5.png">
        <div style={{color: '#fff'}}>Hello World</div>
      </BackgroundImage>
      {/* <button onClick={() => signOut()}>SignOut</button> */}
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

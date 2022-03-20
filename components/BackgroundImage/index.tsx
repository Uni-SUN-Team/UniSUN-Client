import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div<IContainer>`
  position: relative;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const InnerContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IContainer {
  alignItems: string;
  justifyContent: string;
  width: string;
  height: string;
}

interface IProps {
  alignItems?: string;
  alt?: string;
  width?: string;
  height?: string;
  src: string;
  justifyContent?: string;
  children?: JSX.Element;
}

function BackgroundImage({
  alignItems = 'center',
  children,
  alt = 'Background Image',
  src,
  height = '100%',
  justifyContent = 'center',
  width = '100%',
}: IProps) {
  return (
    <Container
      alignItems={alignItems}
      height={height}
      justifyContent={justifyContent}
      width={width}>
      <Image alt={alt} src={src} layout="responsive" width="100%" height="100%" quality={80} />
      {children && (
        <InnerContainer>
          <Content>{children}</Content>
        </InnerContainer>
      )}
    </Container>
  );
}

export default BackgroundImage;

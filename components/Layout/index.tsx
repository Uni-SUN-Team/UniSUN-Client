import React, {useRef} from 'react';

import HamburgerMenu from 'components/HamburgerMenu';

interface IProps {
  children?: JSX.Element;
}

function Layout({children}: IProps) {
  const ref = useRef(null);
  return (
    <React.Fragment>
      <HamburgerMenu ref={ref} />
      {children}
    </React.Fragment>
  );
}

export default Layout;

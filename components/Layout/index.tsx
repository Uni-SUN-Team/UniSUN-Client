import React, {useRef} from 'react';

import HamburgerMenu from 'components/HamburgerMenu';
import Navbar from 'components/Navbar';

interface IProps {
  children?: JSX.Element;
}

function Layout({children}: IProps) {
  const ref = useRef(null);
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
}

export default Layout;

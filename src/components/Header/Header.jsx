import React from 'react';
import Navbar from './Navbar/Navbar';
import CONSTANTS from '../../core/constants';

const Header = () => {
  const {items, userSpecs} = CONSTANTS.header.navbar;

  return (
    <header className="header">
      <Navbar
        items={items}
        userSpecs={userSpecs}
      />
    </header>
  );
};

export default Header;

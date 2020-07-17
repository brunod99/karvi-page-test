import React from 'react';
import Navbar from './Navbar/Navbar';
import carIcon from '../../../public/images/car.svg';
import user from '../../../public/images/user.svg';

const Header = () => {
  return (
    <header className="header">
      <Navbar
        items={['Novos', 'Usados', 'Venda seu carro']}
        userSpecs={[
          {
            icon: carIcon,
            name: 'Meus carros',
          },
          {
            icon: user,
            name: 'Pedro Gomez',
          },
        ]}
      />
    </header>
  );
};

export default Header;

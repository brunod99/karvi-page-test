import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Logo from '../../../../public/images/logo.svg';
import './Navbar.scss';

const Navbar = ({items, userSpecs}) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="row justify-content-between w-100 align-items-center">
          <div className="navbar__left d-flex align-items-center justify-content-between">
            <Link to="/" className="navbar__brand">
              <img src={Logo} alt="Karvi" className="img-fluid" />
            </Link>

            <ul className="navbar__items-container d-flex align-items-end">
              {items.map((item) => (
                <li className="navbar__items" key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="navbar__user-container">
            <ul className="d-flex align-items-center">
              {userSpecs.map((user) => (
                <li className="navbar__user-data" key={user.name}>
                  <Link to="/" className="d-flex align-items-center">
                    <img src={user.icon} alt={user.name} className="navbar__user-data-img" />
                    {user.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  userSpecs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string,
    }),
  ),
};

export default Navbar;

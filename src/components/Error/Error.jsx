import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../public/images/logo.svg';

const Error = ({children}) => (
  <div className="d-flex justify-content-center align-items-center flex-column">
    <img src={Logo} alt="Kravi" className="mb-5" />
    {children}
  </div>
);

Error.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Error;

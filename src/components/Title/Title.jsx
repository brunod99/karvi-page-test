import React from 'react';
import PropTypes from 'prop-types';
import './Title.scss';

const Title = ({ brand, city }) => {
  return (
    <section className="title w-100">
      <div className="container">

        <ul className="breadcrumbs d-flex align-items-end">
          <li className="breadcrumbs__item">Home</li>
          <span className="breadcrumbs__line">/</span>
          <li className="breadcrumbs__item active">Catalogos usados</li>
        </ul>

        <h1>
          Carros usados {brand} à venda em <a href="#" className="link">{city}</a>
        </h1>

      </div>
    </section>
  );
};

Title.propTypes = {
  brand: PropTypes.string,
  city: PropTypes.string.isRequired,
};

export default Title;

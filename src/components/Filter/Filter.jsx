import React from 'react';
import LocationIcon from '../../../public/images/icon-location.svg';

const Filter = () => {
  return (
    <section className="filter">
      <div className="filter__results-total">
        <h5>4.324 resultados</h5>
      </div>
      <ul className="filter__results-container">

        <li className="filter__results-item d-flex align-items-center justify-content-between">

          <h5 className="filter__results-title">Localização</h5>
          <div className="filter__results-geo-container">

            <span className="link">
              Sao Paulo
              <img src={LocationIcon} alt="Location"/>
            </span>

          </div>

        </li>

      </ul>
    </section> );
};

export default Filter;

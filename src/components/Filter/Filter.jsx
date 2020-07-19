import React from 'react';
import PropTypes from 'prop-types';
import LocationIcon from '../../../public/images/icon-location.svg';
import Settings from '../../../public/images/icons-dark-setting.svg';

const Filter = ({city}) => {
  return (
    <section className="filter">

      {/* General - Ipad */}
      <div className="filter__results-ipad-general justify-content-between align-items-center">

        <h6 className="filter__results-ipad-general-results">4.324 resultados</h6>

        <div className="filter__results-ipad-general-filters d-flex align-items-center">
          <h6 className="filter__results-ipad-general-filters-name">Filtro (4)</h6>
          <img src={Settings} alt="Settings" />
        </div>

      </div>

      <div className="filter__container">

        {/* Top - Ipad */}
        <div className="filter__top-ipad-fixed align-items-center justify-content-between">
          <button className="h6 link">Limpiar filtros</button>

          <div className="filter__top-cross-container">
            <span className="filter__top-cross d-block"></span>
            <span className="filter__top-cross d-block"></span>
          </div>

        </div>

        {/* Content */}
        <div className="filter__content">

          <div className="filter__results-total-container">
            <h6 className="filter__results-total">4.324 resultados</h6>
          </div>

          <ul className="filter__results-container">

            <li className="filter__results-item d-flex align-items-center justify-content-between">

              <h5 className="filter__results-title">Localização</h5>
              <div className="filter__results-geo-container">

                <button className="link filter__results-geo d-flex align-items-end">

                  <h6 className="filter__results-geo-text">{city}</h6>
                  <img src={LocationIcon} alt="Location"/>

                </button>


              </div>

            </li>

          </ul>

        </div>

      </div>

    </section>
  );
};

Filter.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Filter;

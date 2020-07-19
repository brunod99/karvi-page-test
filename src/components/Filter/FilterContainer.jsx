import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';


const FilterContainer = ({city}) => {
  return (
    <Filter city={city} />
  );
};

FilterContainer.propTypes = {
  city: PropTypes.string.isRequired,
};

export default FilterContainer;

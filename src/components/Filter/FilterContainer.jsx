import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';

const FilterContainer = ({city, total}) => {
  return (
    <Filter city={city} total={total} />
  );
};

FilterContainer.propTypes = {
  city: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default FilterContainer;

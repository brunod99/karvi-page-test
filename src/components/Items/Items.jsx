import React from 'react';
import PropTypes from 'prop-types';
import ItemSingle from './ItemSingle';
import CONSTANTS from '../../core/constants';
import {getItemsParsed} from '../../selectors/products';

const Items = ({items}) => {
  const {characteristics} = CONSTANTS.items.itemsSingle;
  const parsedItems = getItemsParsed(items);

  return (
    <section className="items d-flex flex-wrap justify-content-md-between">
      {parsedItems.map(
        (item) => (
          <ItemSingle
            title={item.name}
            copy={item.copy}
            specs={item.streghts}
            status={item.status}
            price={item.price}
            location={item.slug}
            characteristics={characteristics}
            key={item.name}
          />
        ),
      )}
    </section>
  );
};

Items.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    brand: PropTypes.object,
    versionIds: PropTypes.arrayOf(PropTypes.number),
    streghts: PropTypes.arrayOf(PropTypes.string).isRequired,
    weaknesses: PropTypes.arrayOf(PropTypes.string),
    saving: PropTypes.number.isRequired,
    isSuperOffer: PropTypes.bool,
    segment: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
    }).isRequired,
    karviPrice: PropTypes.shape({
      min: PropTypes.number.isRequired,
    }).isRequired,
    fuelTypeId: PropTypes.number,
    transmisionTypeId: PropTypes.number,
    slug: PropTypes.string.isRequired,
    minPrice: PropTypes.number,
    maxPrice: PropTypes.number,
  })),
};

export default Items;

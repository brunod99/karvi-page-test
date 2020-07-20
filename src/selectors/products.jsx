import {createSelector} from 'reselect';
import StatusDown from '../../public/images/status-down.svg';
import StatusMid from '../../public/images/status-mid.svg';
import StatusUp from '../../public/images/status-up.svg';

const getFilters = (filters) => filters;

export const getFilterSelector = createSelector(
  [getFilters],
  (filters) => filters,
);

const getItems = (items) => items;

export const getItemsSelector = createSelector(
  [getItems],
  (items) => items,
);

export const getItemsParsed = createSelector(
  [getItems],
  (items) => items.map((item) => ({
    name: item.name,
    copy: item.segment.name,
    streghts: item.streghts.slice(0, 2).join('.'),
    brand: item.brand,
    price: item.karviPrice.min.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
    status: getStatus(item.saving),
    slug: item.slug,
  })),
);

const getStatus = (saving) => {
  switch (true) {
  case saving > 0:
    return {
      icon: StatusDown,
      copy: 'Bom preço',
    };
  default:
  case saving === 0:
    return {
      icon: StatusMid,
      copy: 'Preço justo',
    };
  case saving < 0:
    return {
      icon: StatusUp,
      copy: 'Acima do preço',
    };
  }
};

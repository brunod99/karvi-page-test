import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Title from '../components/Title/Title';
import Items from '../components/Items/Items';
import {getProductsActions} from '../actions/products/getProductsActions';
import Error from '../components/Error/Error';
import Loader from '../components/Loader/Loader';
import FilterContainer from '../components/Filter/FilterContainer';
import CONSTANTS from '../core/constants';
import {getFilterSelector, getItemsSelector} from '../selectors/products';

const UsedCars = () => {
  const dispatch = useDispatch();

  // Hooks
  useEffect(() => {
    // Dispatch
    dispatch(getProductsActions());
  }, []);

  // Selectors
  const {loading, error, total, filters, items} = useSelector((state) => state.products);

  const filtersSelector = filters ? getFilterSelector(filters) : null;
  const getItems = items ? getItemsSelector(items) : null;

  // Constants
  const {city} = CONSTANTS;

  return (
    <main className="used-cars">

      {/* If API call is catched */}
      {error ? (
        <Error>
          <h1>Hubo un error en la conexion con la API. Solicite mas tarde :(</h1>
        </Error>
      ) : (
        <>

          {/* Wait for api call. If successfull, show content. Optional timeout added on actions call just for show loader purpose only. */}
          {
            !loading && filtersSelector && getItems ? (
              <>
                <Title
                  city={city}
                />

                <div className="used-cars__content container">
                  <FilterContainer
                    city={city}
                    filters={filtersSelector}
                    total={total}
                  />
                  <Items
                    items={getItems}
                  />
                </div>
              </>
            ) : (
              <Loader />
            )
          }

        </>
      )}
    </main>
  );
};

export default UsedCars;

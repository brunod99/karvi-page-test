import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Title from '../components/Title/Title';
import Items from '../components/Items/Items';
import {getProductsActions} from '../actions/products/getProductsActions';
import Error from '../components/Error/Error';
import Loader from '../components/Loader/Loader';
import FilterContainer from '../components/Filter/FilterContainer';
import CONSTANTS from '../constants';

const UsedCars = () => {
  const dispatch = useDispatch();

  // Hooks
  useEffect(() => {
    // Dispatch
    dispatch(getProductsActions());
  }, []);

  // Selectors
  const {loading, error} = useSelector((state) => state.products);

  const city = CONSTANTS.city;

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
            loading ? (
              <Loader />
            ) : (
              <>
                <Title
                  city={city}
                />

                <div className="used-cars__content container">
                  <FilterContainer
                    city={city}
                  />
                  <Items />
                </div>
              </>
            )
          }

        </>
      )}
    </main>
  );
};

export default UsedCars;

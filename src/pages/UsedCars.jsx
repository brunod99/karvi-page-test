import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Title from '../components/Title/Title';
import Filter from '../components/Filter/Filter';
import Items from '../components/Items/Items';
import {getProductsActions} from '../actions/products/getProductsActions';
import Error from '../components/Error/Error';

const UsedCars = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsActions());
  }, []);

  const {loading, error} = useSelector((state) => state.products);

  return (
    <main className="used-cars">

      {error ? (
        <Error>
          <h1>Hubo un error en la conexion con la API. Solicite mas tarde :(</h1>
        </Error>
      ) : (
        <>

          {
            loading ? (
              <p>cargando...</p>
            ) : (
              <>
                <Title
                  city="Sao Paulo"
                />

                <div className="used-cars__content container">
                  <Filter />
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

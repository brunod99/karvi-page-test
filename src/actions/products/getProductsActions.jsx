import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../../types';
import axiosClient from '../../config/axios';

export function getProductsActions() {
  return async (dispatch) => {
    dispatch( getProducts(true) );

    try {
      const response = await axiosClient.get('/products');

      // Optional timeout just to show loader
      setTimeout(() => {
        dispatch( getProductsSuccess( response.data ) );
      }, 2000);
    } catch (error) {
      dispatch( getProductsError(true) );
    }
  };
}

const getProducts = (loading) => ({
  type: GET_PRODUCTS,
  payload: loading,
});

const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getProductsError = (error) => ({
  type: GET_PRODUCTS_ERROR,
  payload: error,
});

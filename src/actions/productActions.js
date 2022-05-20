import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
} from "../types";

export const getProducsAction = () => {
  return async (dispatch) => {
    dispatch(loadProducts());
    try {
      const respuesta = await fetch(
        `http://localhost:8080/api/items/MLA845502168`
      )
        .then((respuesta) => {
          return respuesta.json();
        })
        .then((resp) => {
          return resp.data;
        });
      console.log("respuesta", respuesta);
      dispatch(operationSuccess(respuesta));
    } catch (error) {
      console.log(error);
      dispatch(operationError());
    }
  };
};

const loadProducts = () => ({
  type: LOAD_PRODUCTS,
  payload: true,
});

const operationSuccess = (productos) => ({
  type: LOAD_PRODUCTS_SUCCESS,
  payload: productos,
});

const operationError = () => ({
  type: LOAD_PRODUCTS_ERROR,
  payload: true,
});

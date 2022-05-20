import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
} from "../types";

const initialState = {
  productos: [],
  error: null, //false
  loading: false,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state, loading: action.payload };
    case LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        productos: action.payload,
      };
    case LOAD_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

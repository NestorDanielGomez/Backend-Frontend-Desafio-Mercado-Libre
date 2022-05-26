import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
  selectProduct: {},
};

export const fetchAsyncProducts = createAsyncThunk(
  `products/fetchAsyncProducts`,
  async (search) => {
    const response = await axios.get(
      `http://localhost:8080/api/items/search?q=${search}`
    );
    return response.data.data;
  }
);

export const fetchAsyncProductDetail = createAsyncThunk(
  `products/fetchAsyncProductDetail`,
  async (id) => {
    const response = await axios.get(`http://localhost:8080/api/items/${id}`);

    return response.data.data;
  }
);

export const productsSlices = createSlice({
  name: `productreducers`,
  initialState,
  reducers: {
    // addProducts: (state, { payload }) => {
    //   state.list = payload;
    // },
    removeSelectedProduct: (state) => {
      state.selectProduct = {};
    },
  },
  extraReducers: {
    [fetchAsyncProducts.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncProducts.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, list: payload };
    },
    [fetchAsyncProducts.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncProductDetail.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, selectProduct: payload };
    },
  },
});

export const GetProducts = (state) => state.productreducers.list;
export const GetSelectedProduct = (state) =>
  state.productreducers.selectProduct;

export const { removeSelectedProduct } = productsSlices.actions;

export const PRODUCTS_SLICES = productsSlices.reducer;

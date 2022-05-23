import { configureStore } from "@reduxjs/toolkit";

import { PRODUCTS_SLICES } from "../slices/products";

const store = configureStore({
  reducer: {
    productreducers: PRODUCTS_SLICES,
  },
  devTools: true,
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./slices/themeSlice";
import productsReducer from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    theme: themeReducer,
  },
});

export default store;

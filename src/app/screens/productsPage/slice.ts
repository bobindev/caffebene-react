import { createSlice } from "@reduxjs/toolkit";
import { ProductsPageStatus } from "../../../lib/types/screen";

const initialState: ProductsPageStatus = {
  restaurant: null,
  chosenProducts: null,
  products: [],
};

const productsPageSlice = createSlice({
  name: "productsPage",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    setChosenProducts: (state, action) => {
      state.chosenProducts = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  }
});

export const {setRestaurant, setChosenProducts, setProducts} = productsPageSlice.actions;

const ProductsPageReducer = productsPageSlice.reducer;
export default ProductsPageReducer;
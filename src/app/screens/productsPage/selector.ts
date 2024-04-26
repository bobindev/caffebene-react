import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../lib/types/screen";
import ProductsPage from ".";

const selectProductsPage = (state: AppRootState) => state.productsPage;

export const retrieveRestaurant = createSelector(
  selectProductsPage, (ProductsPage) => ProductsPage.restaurant
);

export const retrieveChosenProduct = createSelector(
  selectProductsPage, (ProductsPage) => ProductsPage.chosenProducts
);

export const retrieveProducts = createSelector(
  selectProductsPage, (ProductsPage) => ProductsPage.products
);
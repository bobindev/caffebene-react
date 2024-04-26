import { Member } from "./member";
import { Product } from "./product";

/**REACT APP STATE**/
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageStatus;
}

/**HOMEPAGE**/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/**PRODUCTS PAGE**/
export interface ProductsPageStatus {
  restaurant: Member | null;
  chosenProducts: Product | null;
  products: Product[];
}

/**ORDERS PAGE**/

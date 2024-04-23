import { Member } from "./member";
import { Product } from "./product";


/**REACT APP STATE**/
export interface AppRootState {
  homePage: HomePageState;
  //productsPage: ProductsPageStatus;
}

/**HOMEPAGE**/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/**PRODUCTS PAGE**/

/**ORDERS PAGE**/
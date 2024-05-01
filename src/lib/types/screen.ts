import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

/**REACT APP STATE**/
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageStatus;
  ordersPage: OrdersPageState;
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

export interface OrdersPageState {
  pausedOrders: Order [];
  processOrder: Order[];
  finishedOrder: Order[];
  
}

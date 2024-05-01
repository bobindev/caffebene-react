import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectOrdersPage = (state: AppRootState) => state.ordersPage;
export const retrievePausedOrders = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.pausedOrders
);
export const retrieveProcesOrder = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.processOrder
);
export const retrieveFinishedOrder = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.finishedOrder
);
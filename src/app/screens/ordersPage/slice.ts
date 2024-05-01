import { createSlice } from "@reduxjs/toolkit";
import { OrdersPageState } from "../../../lib/types/screen";

const initialState: OrdersPageState = {
  pausedOrders: [],
  processOrder: [],
  finishedOrder: [],
};

const ordersPageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setPausedOrders: (state, action) => {
      state.pausedOrders = action.payload;
    },
    setProcessOrder: (state, action) => {
      state.processOrder = action.payload;
    },
    setFinishedOrder: (state, action) => {
      state.finishedOrder = action.payload;
    },
  },
});

export const { setPausedOrders, setProcessOrder, setFinishedOrder } =
ordersPageSlice.actions;

const OrdersPageReducer = ordersPageSlice.reducer;
export default OrdersPageReducer;

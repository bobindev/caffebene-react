
import { OrderStatus } from "../enums/order.enum";
import { Product } from "./product";

export interface OrderItemInput {
  reduce(arg0: (accumulator: number, item: OrderItemInput) => number, arg1: number): unknown;
  itemQuantity: number;
  itemPrice: number;
  productId: string;
  orderId?: string; 
}

export interface OrderItem {
  _id: string;
  itemQuantity: number;
  orderId: string;
  productId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  _id: string;
  orderTotal: number;
  orderDelivery: number;
  orderStatus: OrderStatus; 
  memberId: string;
  createdAt: Date;
  updatedAt: Date;
  //from aggrigation
  orderItems: OrderItem[];
  productData: Product[];

}



export interface OrderInquiry {
  page: number;
  limit: number;
  orderStatus: OrderStatus; 
}

export interface OrderUpdateInput {
  orderId: string;
  orderStatus: OrderStatus;
}

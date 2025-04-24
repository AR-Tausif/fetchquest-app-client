// interface IProduct {
//   _id: string;
//   name: string;
//   images: string[];
//   price: number;
//   details: string;
//   stock: number;
//   isDeleted: boolean;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

import { IProduct } from "./products";

interface IOrderProduct {
  id: IProduct;
  quantity: number;
  _id: string;
}

export interface IOrderResponse {
  _id: string;
  user: string;
  products: IOrderProduct[];
  total_amount: number;
  address: string;
  contact: string;
  isPaid: boolean;
  isDeleted: boolean;
  tranId: string;
  status: "pending" | "completed" | "cancelled";
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface IOrderReqBody {
  id: string;
  quantity: number;
}
export interface IOrderRequest {
  products: IOrderReqBody[];
  address: string;
  contact: string;
}

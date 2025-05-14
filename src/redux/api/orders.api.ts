import { IResponse } from "@/types/redux/auth";
import { fetchquestBaseApi } from ".";
import { IOrderRequest, IOrderResponse } from "@/types/redux/orders";
import { tagTypes } from "../tag.types";
import { demoOrders } from "@/utils/demo-data";

export interface IOrderCreateResponse {
  success: boolean;
  message: string;
  data: string;
}

const ordersApi = fetchquestBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<IOrderCreateResponse, IOrderRequest>({
      query: (orderBody) => ({
        url: "/orders",
        method: "POST",
        body: orderBody,
      }),
      invalidatesTags: [tagTypes.order],
      transformErrorResponse: () => ({
        success: true,
        message: "Demo order created successfully",
        data: "demo-order-id"
      }),
    }),
    getMyOrders: builder.query({
      query: () => ({
        url: "/orders/my-orders",
        method: "GET",
      }),
      providesTags: [tagTypes.order],
      transformErrorResponse: () => demoOrders,
    }),
  }),
});

export const { useCreateOrderMutation, useGetMyOrdersQuery } = ordersApi;

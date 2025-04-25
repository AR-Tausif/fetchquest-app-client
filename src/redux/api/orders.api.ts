import { IResponse } from "@/types/redux/auth";
import { fetchquestBaseApi } from ".";
import { IOrderRequest, IOrderResponse } from "@/types/redux/orders";
import { tagTypes } from "../tag.types";

const ordersApi = fetchquestBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<IResponse<IOrderResponse>, IOrderRequest>({
      query: (orderBody) => ({
        url: "/orders",
        method: "POST",
        body: orderBody,
      }),
      invalidatesTags: [tagTypes.order],
    }),
    getMyOrders: builder.query({
      query: () => ({
        url: "/orders/my-orders",
        method: "GET",
      }),
      providesTags: [tagTypes.order],
    }),
  }),
});

export const { useCreateOrderMutation, useGetMyOrdersQuery } = ordersApi;

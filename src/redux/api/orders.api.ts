import { IResponse } from "@/types/redux/auth";
import { fetchquestBaseApi } from ".";
import { ICustomerSupport } from "@/types/redux/customer-support";
import { IOrderRequest, IOrderResponse } from "@/types/redux/orders";

const ordersApi = fetchquestBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<IResponse<IOrderResponse>, IOrderRequest>({
      query: (orderBody) => ({
        url: "/orders",
        method: "POST",
        body: orderBody,
      }),
    }),
    getMyOrders: builder.query<IResponse<IOrderResponse>, undefined>({
      query: () => ({
        url: "/orders/my-orders",
        method: "GET",
      }),
      // providesTags: [tagTypes.user],
    }),
  }),
});

export const { useCreateOrderMutation, useGetMyOrdersQuery } = ordersApi;

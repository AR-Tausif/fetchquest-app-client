import { IResponse } from "@/types/redux/auth";
import { fetchquestBaseApi } from ".";
import { ICustomerSupport } from "@/types/redux/customer-support";

const ordersApi = fetchquestBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<IResponse<IOrderResponse>, IOrderRequest>({
      query: (orderBody) => ({
        url: "/orders",
        method: "POST",
        body: orderBody,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = ordersApi;

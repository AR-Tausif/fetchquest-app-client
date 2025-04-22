import { IResponse } from "@/types/redux/auth";
import { fetchquestBaseApi } from ".";
import { tagTypes } from "../tag.types";
import { IProductResponse } from "@/types/redux/products";

const productsApi = fetchquestBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IResponse<IProductResponse>, undefined>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;

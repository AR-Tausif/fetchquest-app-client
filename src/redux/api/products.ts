import { IResponse } from "@/types/redux/auth";
import { fetchquestBaseApi } from ".";
import { tagTypes } from "../tag.types";
import { IProduct, IProductResponse } from "@/types/redux/products";

const productsApi = fetchquestBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IResponse<IProductResponse>, undefined>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),
    getSingleProduct: builder.query<IResponse<IProduct>, { productId: string }>(
      {
        query: (product) => ({
          url: `/products/${product.productId}`,
          method: "GET",
        }),
        providesTags: [tagTypes.product],
      }
    ),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productsApi;

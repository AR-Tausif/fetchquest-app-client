import { IResponse } from "@/types/redux/auth";
import { fetchquestBaseApi } from ".";
import { tagTypes } from "../tag.types";
import { IProduct, IProductResponse } from "@/types/redux/products";
import { demoProducts } from "@/utils/demo-data";

const productsApi = fetchquestBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IResponse<IProductResponse>, undefined>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: [tagTypes.product],
      transformErrorResponse: () => demoProducts,
    }),
    getSingleProduct: builder.query<IResponse<IProduct>, { productId: string }>({
      query: (product) => ({
        url: `/products/${product.productId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.product],
      transformErrorResponse: (error) => ({
        success: true,
        message: "Demo product fetched successfully",
        data: demoProducts.data.products[0]
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productsApi;

"use client";

import { useGetSingleProductQuery } from "@/redux/api/products";

// interface UseGetSingleBlogReturn {
//   blog: IBlogResponse['data'] | null;
//   isLoading: boolean;
//   isError: boolean;
//   error?: string;
// }

export const useGetSingleProduct = (blogId: string) => {
  const { data, isLoading, isError, error } = useGetSingleProductQuery(
    { productId: blogId },
    {
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    }
  );

  return {
    product: data?.data,
    isProductPending: isLoading,
    isError,
    error: isError
      ? (error as any)?.data?.message || "Failed to fetch product"
      : undefined,
  };
};

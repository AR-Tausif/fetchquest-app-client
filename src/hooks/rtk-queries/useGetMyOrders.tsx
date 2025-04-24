"use client";

import { useGetMyOrdersQuery } from "@/redux/api/orders.api";

export const useGetMyOrderHistory = () => {
  const { data, isLoading } = useGetMyOrdersQuery(undefined);

  return { orders: data?.data, myOrderPending: isLoading };
};

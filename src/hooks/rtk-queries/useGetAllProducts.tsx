"use client";

import { useGetProductsQuery } from "@/redux/api/products";


export const useGetProducts = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  //   const gameSlideData = data?.data?.data.map((game) => ({
  //     id: game._id,
  //     posterImg: game.image || "/images/posters/poster-6.jpg",
  //     gameName: game.name || "Introductiong check6 extraction dlc",
  //     date: "N/A",
  //     site: "Visit Site",
  //   }));

  //   if (!isLoading) return { gameSlide: [], isGamePending: isLoading };
  return { products: data?.data.data, isProductPending: isLoading };
};

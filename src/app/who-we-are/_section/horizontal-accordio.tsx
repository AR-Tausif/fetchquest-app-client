"use client";
import { useState } from "react";
import { GameItemBox } from "@/components/boxes";
import {
  HorizontalAccFirstItemCard,
  HorizontalAccLastItemContent,
} from "@/components/cards";
import { useGetProducts } from "@/hooks/rtk-queries/useGetAllProducts";
import { ProductListSkeleton } from "@/components/skeleton/product-list-skeleton";

export const HorizontalAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  // get products
  const { products, isProductPending } = useGetProducts();
  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      bgUrl: "/images/pages/who-we-are/section-three/container-bg-1.jpg",
      content: "",
    },
    {
      bgUrl: "/images/pages/who-we-are/section-three/container-bg-2.jpg",
      content: (
        <div className="">
          {/* <div className="space-x-4 my-4">
          <AppButton
            variant="outline"
            className="p-4 hover:bg-[#DA5DA3] text-white transition-all duration-300 ease-in-out text-sm px-3"
          >
            Gamepads
          </AppButton>
          <AppButton
            variant="outline"
            className="p-4 hover:bg-[#DA5DA3] text-white transition-all duration-300 ease-in-out text-sm"
          >
            Gamepads
          </AppButton>
          <AppButton
            variant="outline"
            className="p-4 hover:bg-[#DA5DA3] text-white transition-all duration-300 ease-in-out text-sm"
          >
            Gamepads
          </AppButton>
          </div> */}
          {isProductPending ? (
            <ProductListSkeleton />
          ) : (
            <div className="flex justify-center items-center px-4">
              {products?.map((product, index) => {
                return <GameItemBox key={product._id} product={product} />;
              })}
            </div>
          )}
        </div>
      ),
    },
    {
      bgUrl: "/images/pages/who-we-are/section-three/container-bg-3.jpg",
      content: <HorizontalAccLastItemContent />,
    },
  ];

  return (
    <div className="w-full overflow-hidden md:h-[600px]">
      <ul className="flex flex-col md:flex-row w-full h-full m-0 p-0 list-none">
        {items.map((item, index) => (
          <li
            key={index}
            className={`
              relative w-full md:w-1/3 h-full min-h-[300px] md:min-h-[600px]
              bg-no-repeat bg-center bg-cover text-white text-center
              transition-all duration-500 ease-in-out
              ${activeIndex === index ? "md:w-3/5" : ""}
              ${activeIndex === null ? "hover:md:w-2/5" : ""}
            `}
            style={{ backgroundImage: `url(${item.bgUrl})` }}
            onClick={() => handleClick(index)}
          >
            {/* Gradient overlay */}
            <div
              className={`
                absolute inset-0 bg-gradient-to-b from-transparent to-black/60
                transition-opacity duration-1000
                "opacity-100"
              `}
            />
            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              {index === 0 ? (
                <HorizontalAccFirstItemCard
                  activeIndex={activeIndex}
                  index={index}
                />
              ) : (
                item.content
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

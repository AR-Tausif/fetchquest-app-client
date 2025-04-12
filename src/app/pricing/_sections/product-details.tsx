/* eslint-disable @next/next/no-img-element */
import { HolderItemImage } from "./holder-item-image";
import { TextContents } from "./text-contents";

export const ProductDetails = () => {
  return (
    <section className="bg-white md:py-32 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col-reverse md:flex-row gap-12">
            <div className="flex md:flex-col justify-center items-center gap-4">
              <HolderItemImage />
              <HolderItemImage />
              <HolderItemImage />
            </div>
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img
                className="w-full dark:hidden"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                alt=""
              />
            </div>
          </div>

          <TextContents />
        </div>
      </div>
    </section>
  );
};

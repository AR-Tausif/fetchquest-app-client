/* eslint-disable @next/next/no-img-element */
import { TextContents } from "./text-contents";

export const ProductDetails = () => {
  return (
    <section className="py-16 bg-white md:py-32 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img
              className="w-full dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
              alt=""
            />
            <img
              className="w-full hidden dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
              alt=""
            />
          </div>
          <TextContents />
        </div>
      </div>
    </section>
  );
};

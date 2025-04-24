/* eslint-disable @next/next/no-img-element */
import { IProduct } from "@/types/redux/products";
import { HolderItemImage } from "./holder-item-image";
import { TextContents } from "./text-contents";
import { useEffect, useState } from "react";

interface IProductDetailsProps {
  product: IProduct;
}
export const ProductDetails = ({ product }: IProductDetailsProps) => {
  console.log({ product });
  const [placeImage, setPlaceImage] = useState(
    "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
  );

  // set the first image when the component mounts or when the product changes
  useEffect(() => {
    if (product?.images.length > 0) {
      setPlaceImage(product.images[0]);
    }
  }, [product]);

  return (
    <section className="bg-white md:py-32 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="flex flex-col-reverse md:flex-row gap-12 items-center justify-center">
            <div className="flex md:flex-col justify-center items-center gap-2">
              {product?.images.map((image: string) => (
                <HolderItemImage
                  key={image}
                  image={image}
                  productName={product.name}
                  onclick={()=> setPlaceImage(image)}
                />
              ))}
              {/* <HolderItemImage />
              <HolderItemImage /> */}
            </div>
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img
                className="w-full"
                src={placeImage}
                alt=""
              />
            </div>
          </div>

          <TextContents product={product} />
        </div>
      </div>
    </section>
  );
};

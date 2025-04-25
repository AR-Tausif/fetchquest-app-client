import { ICartItem } from "@/redux/features/cart.slice";
import { IProduct } from "@/types/redux/products";
import React from "react";

export default function CheckoutProduct({ product }: { product: ICartItem }) {
  return (
    <div className="flex items-center py-4">
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded bg-gray-200 mr-4">
        <img
          src={product.imageUrl}
          alt="Jeans Pant"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-base font-medium text-gray-800">{product.name}</h3>
        {/* <p className="text-sm text-gray-500">{product.}</p> */}
      </div>
      <div className="flex-shrink-0 font-medium text-gray-800">
        {product.price * product.quantity}
      </div>
    </div>
  );
}

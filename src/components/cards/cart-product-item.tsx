import { removeFromCart, updateQuantity } from "@/redux/features/cart.slice";
import { useAppDispatch } from "@/redux/hooks";
import { Delete, Loader, Minus, Plus, Trash, Trash2 } from "lucide-react";
import Image from "next/image";

import { useState } from "react";

interface Props {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export const CartProduct = ({ id, name, price, quantity, imageUrl }: Props) => {
  const dispatch = useAppDispatch();

  const increaseQuantity = async () => {
    // simulate delay or wait for server update if syncing with DB
    // await new Promise((resolve) => setTimeout(resolve, 500));
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const decreaseQuantity = async () => {
    // simulate delay or wait for server update if syncing with DB
    // await new Promise((resolve) => setTimeout(resolve, 500));
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="flex gap-3 py-4 border-b">
      <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
        <Image
          src={imageUrl}
          alt={name}
          width={64}
          height={64}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-sm font-medium">{name}</h3>

        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={decreaseQuantity}
            className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center"
          >
            <Minus size={16} />
          </button>

          <span className="w-6 text-center">{quantity}</span>

          <button
            onClick={increaseQuantity}
            className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center"
          >
            {/* {increaseLoading ? (
              <Loader className="animate-spin h-4 w-4" />
            ) : ( */}
            <Plus size={16} />
            {/* )} */}
          </button>

          <div className="ml-auto flex items-center gap-3">
            <span className="font-semibold">
              ${(price * quantity).toFixed(2)}
            </span>
            <button onClick={handleRemove} className="text-gray-500">
              <Trash2 className="text-red-500" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

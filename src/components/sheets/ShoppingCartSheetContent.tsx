import { Minus, Plus, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { SheetContent, SheetTitle } from "../ui/sheet";
import { useAppSelector } from "@/redux/hooks";
import { CartProduct } from "../cards/cart-product-item";
import Link from "next/link";

export const ShoppingCartSheetContent = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  // const increaseQuantity = () => {
  //   setQuantity((prev) => prev + 1);
  // };

  // const decreaseQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity((prev) => prev - 1);
  //   }
  // };

  const totalProductsPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalProductsItem = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <SheetContent>
      <SheetTitle className="text-xl font-bold">My Cart</SheetTitle>

      <div className="overflow-y-auto">
        <div className="p-4">
          <p className="text-gray-700 tracking-tighter my-4 text-center">
            Cart Items  {totalProductsItem}
          </p>
          {cartItems.map((item) => (
            <CartProduct
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>

      <div className="border-t p-4 mt-20">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-semibold">${totalProductsPrice.toFixed(2)}</p>
          </div>

          <Link href="/checkout">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-8 rounded-md transition-colors">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </SheetContent>
  );
};

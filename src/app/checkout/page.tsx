"use client";

import { useState } from "react";
import { CheckIcon, CreditCardIcon, FileTextIcon } from "lucide-react";
import { CheckOutForm } from "@/components/forms/checkout-form";
import { useAppSelector } from "@/redux/hooks";
import { CartProduct } from "@/components/cards/cart-product-item";

export default function CheckoutForm() {
  const cartedProducts = useAppSelector((state) => state.cart.items);

  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold text-[#1a2542] uppercase mb-8">
            Give Information
          </h1>

          {/* Steps */}
          <div className="flex justify-between mb-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-md bg-gradient-to-r from-[#d14d8b] to-[#a64dbd] flex items-center justify-center text-white mb-2">
                <CheckIcon className="w-5 h-5" />
              </div>
              <span className="text-sm">Details</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-md bg-white border border-gray-300 flex items-center justify-center text-gray-500 mb-2">
                <CreditCardIcon className="w-5 h-5" />
              </div>
              <span className="text-sm">Payment Method</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-md bg-white border border-gray-300 flex items-center justify-center text-gray-500 mb-2">
                <FileTextIcon className="w-5 h-5" />
              </div>
              <span className="text-sm">Review</span>
            </div>
          </div>

          <p className="text-gray-600 mb-6">
            Please Give your Information to confirm your order.
          </p>

          <CheckOutForm />

          <div className="my-20">
            {cartedProducts.map((item) => {
              return (
                <CartProduct
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  imageUrl={item.imageUrl}
                />
              );
            })}
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-md">
            <h2 className="font-medium text-lg mb-6">Total Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium">$200.00</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Delivery Charge</span>
                <span className="font-medium">$5.00</span>
              </div>

              <div className="border-t border-gray-200 pt-4 flex justify-between">
                <span className="text-gray-500">Total</span>
                <span className="font-medium">$633.00</span>
              </div>
            </div>

            <button className="w-full py-3 bg-gradient-to-r from-[#d14d8b] to-[#a64dbd] text-white rounded-md uppercase font-medium">
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

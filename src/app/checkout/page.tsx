"use client";

import { useState } from "react";
import { CheckIcon, CreditCardIcon, FileTextIcon } from "lucide-react";
import { CheckOutForm } from "@/components/forms/checkout-form";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { CartProduct } from "@/components/cards/cart-product-item";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateOrderMutation } from "@/redux/api/orders.api";
import { toast } from "sonner";
import { IOrderRequest } from "@/types/redux/orders";
import { clearCart } from "@/redux/features/cart.slice"; // Add this import
import { OrderSuccessModal } from "@/components/modals/order-success-modal";

const checkoutFormSchema = z.object({
  address: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  //   email: z.string()
  //     .email("Please enter a valid email address"),
  phone: z.string(),
  // .regex(
  //   /^\(\d{3}\) \d{3}-\d{4}$/,
  //   "Please enter a valid phone number format: (123) 456-7890"
  // ),
});

type CheckoutFormData = z.infer<typeof checkoutFormSchema>;

const formFields = [
  {
    id: "address",
    label: "Address",
    type: "text",
    defaultValue: "",
    placeholder: "Enter your address",
  },
  //   {
  //     id: 'contact',
  //     label: 'Contact Number',
  //     type: 'contact',
  //     defaultValue: '01315070289',
  //   },
  {
    id: "phone",
    label: "Phone number",
    type: "number",
    defaultValue: "",
    isPhone: true,
    placeholder: "Enter your phone number",
  },
] as const;

export default function CheckoutForm() {
  const dispatch = useAppDispatch(); // Add this
  const cartedProducts = useAppSelector((state) => state.cart.items);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // RTK: create order and payment
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  // const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: formFields.reduce(
      (acc, field) => ({
        ...acc,
        [field.id]: field.defaultValue,
      }),
      {}
    ),
  });

  const onSubmit = async (data: CheckoutFormData) => {
    try {
      const orderData: IOrderRequest = {
        address: data.address,
        contact: data.phone,
        products: cartedProducts.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        })),
      };

      const response = await createOrder(orderData);

      if (!response.data?.success) {
        throw new Error(response.data?.message);
      }
      
      // Clear cart after successful order
      dispatch(clearCart());
      toast.success(response.data?.message);
      reset();
      setShowSuccessModal(true); // Show success modal
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to create order");
    }
  };

  const totalProductsPrice = cartedProducts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="md:col-span-2">
          <div>
            <h1 className="text-3xl font-bold text-[#1a2542] uppercase mb-1">
              Give Information
            </h1>
            <p className="text-gray-600 mb-6">
              Please Give your Information to confirm your order.
            </p>
          </div>

          {/* Steps */}
          {/* <div className="flex justify-center mb-8">
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
          </div> */}

          <CheckOutForm
            errors={errors}
            formFields={formFields}
            handleSubmit={handleSubmit}
            // isSubmitting={isSubmitting}
            onSubmit={onSubmit}
            register={register}
          />

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
              {/* <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium">${totalProductsPrice}</span>
              </div> */}

              {/* <div className="flex justify-between">
                <span className="text-gray-500">Delivery Charge</span>
                <span className="font-medium">$5.00</span>
              </div> */}

              <div className="border-t border-gray-200 pt-4 flex justify-between">
                <span className="text-gray-500">Total</span>
                <span className="font-medium">${totalProductsPrice}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-gradient-to-r from-[#d14d8b] to-[#a64dbd] text-white rounded-md uppercase font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Processing..." : "Confirm"}
            </button>
          </div>
        </div>
      </form>

      <OrderSuccessModal 
        open={showSuccessModal} 
        onOpenChange={setShowSuccessModal}
      />
    </div>
  );
}

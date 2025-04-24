"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const checkoutFormSchema = z.object({
  address: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  //   email: z.string()
  //     .email("Please enter a valid email address"),
  phone: z
    .string()
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
    defaultValue: "123 Main Street, Anytown, USA",
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
    type: "tel",
    defaultValue: "(201) 830-8210",
    isPhone: true,
  },
] as const;

export const CheckOutForm = () => {
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
      console.log("Form submitted:", data);
      // Add your API call here
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="mb-8">
        <h2 className="font-medium text-lg mb-6">Add Information</h2>

        <div className="space-y-6">
          {formFields.map((field) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {field.label} <span className="text-red-500">*</span>
              </label>

              {field.type === "tel" ? (
                <div className="flex">
                  <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                    <span className="text-sm">🇺🇸</span>
                  </div>
                  <input
                    type={field.type}
                    id={field.id}
                    {...register(field.id)}
                    className={`flex-1 p-3 border rounded-r-md ${
                      errors[field.id] ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  {...register(field.id)}
                  className={`w-full p-3 border rounded-md ${
                    errors[field.id] ? "border-red-500" : "border-gray-300"
                  }`}
                />
              )}

              {errors[field.id] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.id]?.message}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-3 bg-gradient-to-r from-[#d14d8b] to-[#a64dbd] text-white rounded-md uppercase font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Processing..." : "Confirm"}
      </button>
    </form>
  );
};

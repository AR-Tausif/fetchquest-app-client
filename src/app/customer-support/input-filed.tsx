"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCustomerSupportMessageSentMutation } from "@/redux/api/customer-support";
import { ICustomerSupport } from "@/types/redux/customer-support";
import { toast } from "sonner";
import { Loader } from "lucide-react";

// Define validation schema
const supportFormSchema = z.object({
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject must be less than 100 characters"),
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string(),
  // .min(2, "Name must be at least 2 characters")
  // .max(50, "Name must be less than 50 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type SupportFormData = z.infer<typeof supportFormSchema>;

export default function CustomerSupportForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SupportFormData>({
    resolver: zodResolver(supportFormSchema),
  });

  // RTK : Mutation for the form submission
  const [sendMessage, { isLoading: isSendMessageLoading }] =
    useCustomerSupportMessageSentMutation();

  const onSubmit = async (data: SupportFormData) => {
    console.log("Form submitted:", data);
    // form submission logic here
    try {
      const responseBody: ICustomerSupport = {
        fullname: data?.name,
        email: data?.email,
        subject: data?.subject,
        description: data?.message,
      };
      const response = await sendMessage(responseBody).unwrap();
      if (response.success) toast.success(response.message);
      else toast.error(response.message);
    } catch (error) {}
    reset();
  };

  const handleFileAttach = () => {
    console.log("File attachment clicked");
  };

  return (
    <div className="flex justify-center items-center py-4 bg-gray-50 roboto-fonts">
      <div className="w-full max-w-xl p-8 bg-white rounded-lg border border-gray-100 shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              {...register("subject")}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              placeholder="Your Full Name"
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="Your email address"
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              {...register("message")}
              rows={6}
              placeholder="Your message..."
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* <div className="mb-8">
            <button
              type="button"
              onClick={handleFileAttach}
              className="text-blue-500 hover:text-blue-700 focus:outline-none"
            >
              + Attach a file
            </button>
          </div> */}

          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="px-8 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white uppercase font-medium rounded-md hover:opacity-90 focus:outline-none"
              disabled={isSendMessageLoading}
            >
              {isSendMessageLoading ? (
                <p className="flex gap-x-2">
                  <Loader className="h-4 w-4" /> Sending...
                </p>
              ) : (
                "Submit"
              )}
            </button>
            {/* <button
              type="button"
              // onClick={() => reset()}
              className="px-8 py-2 bg-white text-gray-700 uppercase font-medium border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none"
            >
              Cancel
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

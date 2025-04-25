import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="mb-4">
          <svg
            className="mx-auto h-16 w-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your payment. Your transaction has been completed
          successfully.
        </p>
        <Link
          href="/order-history"
          className="inline-block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Return to History
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;

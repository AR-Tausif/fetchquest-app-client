'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { XCircle } from 'lucide-react'
import Link from 'next/link'

export default function CancelPage() {
  useEffect(() => {
    // Optional: Add analytics tracking for cancelled payments
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center"
      >
        <div className="flex justify-center mb-6">
          <XCircle className="h-16 w-16 text-red-500" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Payment Cancelled
        </h1>
        
        <p className="text-gray-600 mb-8">
          Your payment has been cancelled. No charges have been made to your account.
        </p>

        <div className="space-y-4">
          <Link 
            href="/"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Return to Home
          </Link>
          
          <Link
            href="/checkout"
            className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Try Again
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

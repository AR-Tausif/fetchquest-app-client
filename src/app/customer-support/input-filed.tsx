"use client"

import type React from "react"

import { useState } from "react"

export default function CustomerSupportForm() {
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  const handleFileAttach = () => {
    // Implement file attachment logic
    console.log("File attachment clicked")
  }

  return (
    <div className="flex justify-center items-center py-4 bg-gray-50 roboto-fonts">
      <div className="w-full max-w-xl p-8 bg-white rounded-lg border border-gray-100 shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="mb-8">
            <button
              type="button"
              onClick={handleFileAttach}
              className="text-blue-500 hover:text-blue-700 focus:outline-none"
            >
              + Attach a file
            </button>
          </div>

          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="px-8 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white uppercase font-medium rounded-md hover:opacity-90 focus:outline-none"
            >
              Submit
            </button>
            <button
              type="button"
              className="px-8 py-2 bg-white text-gray-700 uppercase font-medium border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}


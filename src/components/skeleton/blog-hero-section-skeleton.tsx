import React from 'react'
import { Container } from '../container'

export const BlogHeroSectionSkeleton = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {/* <Container> */}
  {/* Testimonials Skeleton */}
  <section className="mb-12">
    <div className="animate-pulse h-6 w-48 bg-gray-300 rounded mb-6" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Testimonial 1 */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <div className="animate-pulse h-12 w-12 bg-gray-300 rounded-full mr-4" />
          <div>
            <div className="animate-pulse h-5 w-32 bg-gray-300 rounded mb-1" />
            <div className="animate-pulse h-4 w-24 bg-gray-200 rounded" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="animate-pulse h-4 w-full bg-gray-200 rounded" />
          <div className="animate-pulse h-4 w-full bg-gray-200 rounded" />
          <div className="animate-pulse h-4 w-3/4 bg-gray-200 rounded" />
        </div>
      </div>
      {/* Testimonial 2 */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <div className="animate-pulse h-12 w-12 bg-gray-300 rounded-full mr-4" />
          <div>
            <div className="animate-pulse h-5 w-32 bg-gray-300 rounded mb-1" />
            <div className="animate-pulse h-4 w-24 bg-gray-200 rounded" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="animate-pulse h-4 w-full bg-gray-200 rounded" />
          <div className="animate-pulse h-4 w-full bg-gray-200 rounded" />
          <div className="animate-pulse h-4 w-3/4 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  </section>
  {/* CTA Section Skeleton */}
  <section className="mb-12">
    <div className="bg-white p-8 rounded-lg shadow-sm text-center">
      <div className="animate-pulse h-8 w-64 bg-gray-300 rounded mx-auto mb-4" />
      <div className="animate-pulse h-4 w-full md:w-2/3 bg-gray-200 rounded mx-auto mb-6" />
      <div className="animate-pulse h-10 w-40 bg-gray-300 rounded mx-auto" />
    </div>
  </section>
{/* </Container> */}
    </div>

  )
}

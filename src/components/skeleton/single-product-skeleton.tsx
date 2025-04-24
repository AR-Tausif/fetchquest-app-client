export const SingleProductSekeleton = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900">
      {/* Banner Skeleton */}
      <div className="h-[40vh] w-screen flex items-center justify-center bg-gray-300 animate-pulse">
        <h4 className="uppercase text-[10vw] lg:text-[3vw] font-semibold text-gray-400">
          LOADING...
        </h4>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-10">
        {/* Left Gallery & Card */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Image thumbnails */}
          <div className="flex flex-col gap-4">
            <div className="w-24 h-24 bg-gray-300 animate-pulse rounded-md" />
            <div className="w-24 h-24 bg-gray-300 animate-pulse rounded-md" />
            <div className="w-24 h-24 bg-gray-300 animate-pulse rounded-md" />
          </div>
          {/* Case Info Card */}
          <div className="w-80 p-4 border rounded-xl shadow-md bg-white dark:bg-gray-800 space-y-4">
            <div className="h-6 w-40 bg-gray-300 animate-pulse rounded" />
            <div className="h-4 w-64 bg-gray-200 animate-pulse rounded" />
            <div className="h-4 w-48 bg-gray-200 animate-pulse rounded" />
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-gray-300 animate-pulse rounded-full" />
              <div className="w-8 h-8 bg-gray-300 animate-pulse rounded-full" />
              <div className="w-8 h-8 bg-gray-300 animate-pulse rounded-full" />
            </div>
            <div className="h-4 w-40 bg-gray-300 animate-pulse rounded" />
          </div>
        </div>
        {/* Product Details */}
        <div className="flex-1 space-y-6">
          <div className="h-4 w-32 bg-gray-300 animate-pulse rounded" />
          <div className="h-6 w-72 bg-gray-300 animate-pulse rounded" />
          {/* Ratings */}
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="w-4 h-4 bg-yellow-300 animate-pulse rounded-sm" />
              <div className="w-4 h-4 bg-yellow-300 animate-pulse rounded-sm" />
              <div className="w-4 h-4 bg-yellow-300 animate-pulse rounded-sm" />
              <div className="w-4 h-4 bg-yellow-300 animate-pulse rounded-sm" />
              <div className="w-4 h-4 bg-yellow-300 animate-pulse rounded-sm" />
            </div>
            <div className="h-4 w-16 bg-gray-300 animate-pulse rounded" />
          </div>
          {/* Price */}
          <div className="h-8 w-40 bg-gray-300 animate-pulse rounded" />
          <div className="h-4 w-24 bg-gray-300 animate-pulse rounded" />
          {/* Stock Status */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-sm bg-pink-300 animate-pulse" />
            <div className="h-4 w-48 bg-gray-300 animate-pulse rounded" />
          </div>
          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2 border border-gray-300 dark:border-gray-600 px-3 py-2 rounded-md">
              <div className="w-5 h-5 bg-gray-200 animate-pulse rounded-md" />
              <div className="w-10 h-4 bg-gray-300 animate-pulse rounded" />
              <div className="w-5 h-5 bg-gray-200 animate-pulse rounded-md" />
            </div>
            <div className="w-40 h-10 bg-gray-300 animate-pulse rounded-md" />
          </div>
          <div className="w-full h-12 bg-gradient-to-t from-purple-400 to-pink-400 animate-pulse rounded-md" />
        </div>
      </div>
      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="flex space-x-6 border-b pb-2">
          <div className="h-6 w-32 bg-gray-300 animate-pulse rounded" />
          <div className="h-6 w-48 bg-gray-300 animate-pulse rounded" />
          <div className="h-6 w-24 bg-gray-300 animate-pulse rounded" />
        </div>
        <div className="mt-8 space-y-4">
          <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
          <div className="h-4 w-5/6 bg-gray-200 animate-pulse rounded" />
          <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded" />
          <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
          <div className="h-4 w-2/3 bg-gray-200 animate-pulse rounded" />
        </div>
      </div>
    </section>
  );
};

export const ProductListSkeleton = () => {
  return (
    <div className="flex justify-center items-center px-4 space-x-4">
      <div className="w-[30%] space-y-4">
        {/* <!-- Skeleton line --> */}
        <div className="w-full h-3 bg-gray-300 animate-pulse rounded-md"></div>
        {/* <!-- Skeleton image container --> */}
        <div className="w-full h-52 bg-gray-300 animate-pulse rounded-md"></div>
        {/* <!-- Skeleton text --> */}
        <div className="w-3/4 h-5 bg-gray-300 animate-pulse rounded-md"></div>
      </div>

      <div className="w-[30%] space-y-4">
        {/* <!-- Skeleton line --> */}
        <div className="w-full h-3 bg-gray-300 animate-pulse rounded-md"></div>
        {/* <!-- Skeleton image container --> */}
        <div className="w-full h-52 bg-gray-300 animate-pulse rounded-md"></div>
        {/* <!-- Skeleton text --> */}
        <div className="w-3/4 h-5 bg-gray-300 animate-pulse rounded-md"></div>
      </div>

      <div className="w-[30%] space-y-4">
        {/* <!-- Skeleton line --> */}
        <div className="w-full h-3 bg-gray-300 animate-pulse rounded-md"></div>
        {/* <!-- Skeleton image container --> */}
        <div className="w-full h-52 bg-gray-300 animate-pulse rounded-md"></div>
        {/* <!-- Skeleton text --> */}
        <div className="w-3/4 h-5 bg-gray-300 animate-pulse rounded-md"></div>
      </div>
    </div>
  );
};

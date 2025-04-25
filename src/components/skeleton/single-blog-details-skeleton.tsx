export const SingleBlogDetailsSkeleton = () => {
  return (
    <div className="mx-auto max-w-[100vw] animate-pulse md:max-w-[1536px] mt-10">
      <div className="space-y-6 px-4">
        <div className="w-full p-0 md:px-8">
          <div className="relative h-0 w-full rounded-md bg-gray-200 pb-[40.15%] shadow-md">
            <div className="absolute top-0 left-0 h-full w-full bg-gray-300"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-10 pb-10">
          <div className="h-[2rem] w-3/4 rounded-md bg-gray-200 md:h-[4rem] md:w-1/2"></div>
          <div className="flex flex-wrap gap-x-20 gap-y-4">
            <div className="flex items-center gap-x-2">
              <div className="h-6 w-6 rounded-full bg-gray-300"></div>
              <div className="h-4 w-24 rounded-md bg-gray-300"></div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="h-6 w-6 rounded-full bg-gray-300"></div>
              <div className="h-4 w-32 rounded-md bg-gray-300"></div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="h-6 w-6 rounded-full bg-gray-300"></div>
              <div className="h-4 w-24 rounded-md bg-gray-300"></div>
            </div>
          </div>
          <div className="w-full space-y-2">
            <div className="h-4 w-full rounded-md bg-gray-200"></div>
            <div className="h-4 w-full rounded-md bg-gray-200"></div>
            <div className="h-4 w-5/6 rounded-md bg-gray-200"></div>
            <div className="h-4 w-3/4 rounded-md bg-gray-200"></div>
            <div className="h-4 w-1/2 rounded-md bg-gray-200"></div>
            <div className="h-4 w-full rounded-md bg-gray-200"></div>
            <div className="h-4 w-4/6 rounded-md bg-gray-200"></div>
            <div className="h-4 w-2/3 rounded-md bg-gray-200"></div>
            <div className="h-4 w-5/6 rounded-md bg-gray-200"></div>
          </div>
          <div className="w-full">
            <div className="h-4 w-32 rounded-md bg-gray-300"></div>
            <div className="mt-2 h-4 w-48 rounded-md bg-gray-300"></div>
          </div>
          <div className="w-full space-y-2">
            <div className="flex gap-x-2">
              <div className="h-4 w-20 rounded-md bg-gray-300"></div>
              <div className="h-4 w-48 rounded-md bg-gray-300"></div>
            </div>
            <div className="flex gap-x-2">
              <div className="h-4 w-20 rounded-md bg-gray-300"></div>
              <div className="h-4 w-48 rounded-md bg-gray-300"></div>
            </div>
          </div>
          <div className="h-1 w-20 bg-gray-400"></div>
          <div className="w-full space-y-1">
            <div className="h-4 w-40 rounded-md bg-gray-300"></div>
            <div className="h-4 w-40 rounded-md bg-gray-300"></div>
            <div className="h-4 w-32 rounded-md bg-gray-300"></div>
            <div className="h-4 w-60 rounded-md bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

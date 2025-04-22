export const ProfileSkeleton = () => {
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto  bg-white shadow-md rounded-lg">
      {/* Profile Header */}

      {/* Cover Image */}
      <div className="w-full h-52 bg-gray-300 rounded-lg animate-pulse mb-6"></div>

      <div className="flex items-center space-x-4 mb-16">
        {/* Profile Picture */}
        <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse"></div>
        {/* Profile Info */}
        <div className="flex flex-col space-y-4">
          <div className="w-32 h-6 bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="w-48 h-6 bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
      </div>
      {/* Profile Information */}
      <div className="space-y-4">
        <div className="w-[35%] h-6 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-[45%] h-6 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-[55%] h-6 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-[65%] h-6 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-[70%] h-6 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-[80%] h-6 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-[90%] h-6 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-full h-6 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-full h-6 bg-gray-300 rounded-lg animate-pulse"></div>
      </div>
    </div>
  );
};

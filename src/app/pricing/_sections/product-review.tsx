export const ProductReview = () => {
  return (
    <div className="">
      <div className="space-y-2">
        <ReviewCard />
      </div>
    </div>
  );
};

import { Star } from "lucide-react";
import Image from "next/image";

const ReviewCard = () => {
  return (
    <div className="w-full p-6 border-b space-y-2 bg-white">
      {/* Date */}
      <p className="text-sm text-gray-400">June 20, 2024</p>

      {/* Stars */}
      <div className="flex items-center space-x-1 text-yellow-500">
        {[...Array(4)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
        <Star size={16} className="text-gray-300" />
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-3">
        <Image
          src="https://randomuser.me/api/portraits/women/1.jpg"
          alt="Kristin Watson"
          className="w-8 h-8 rounded-full object-cover"
          width={1000}
          height={1000}
        />
        <h3 className="font-semibold text-gray-800">Kristin Watson</h3>
      </div>

      {/* Review Content */}
      <p className="text-gray-600 text-sm">
        The Canon EOS R6 is a game-changer! I use it to capture fast-action
        airsoft matches, and the 20 fps burst rate means I never miss a shot.
        Low-light performance is incredible too. Worth every penny.
      </p>
    </div>
  );
};

export default ReviewCard;

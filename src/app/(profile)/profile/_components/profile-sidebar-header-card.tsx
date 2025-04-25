"use client";

import { useGetProfileQuery } from "@/redux/api/users.api";
import Image from "next/image";

export const ProfileSidebarHeaderCard = () => {
  const { data, isLoading } = useGetProfileQuery(undefined);
  return (
    <div className="p-4 border-b border-gray-200">
      {/* Profile Info */}
      {isLoading ? (
        <div className="flex flex-col space-y-4">
          <div className="w-32 h-6 bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="w-48 h-6 bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <Image
            src={
              data?.data?.image ||
              "https://m.gettywallpapers.com/wp-content/uploads/2023/09/Itachi-Uchiha-Pfp-for-Profile-Picture.jpg"
            }
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <p className="text-sm text-gray-600">Hello</p>
            <h2 className="text-lg font-bold text-[#333333]">
              {data?.data?.name}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

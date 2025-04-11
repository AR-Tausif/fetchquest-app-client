import { ProfileSidebar } from "@/components/profile-sidebar";
import { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";
export const metadata: Metadata = {
  title: "Profile Page",
  description: "User profile page built with Tailwind CSS",
};
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  
        <div className="min-h-screen bg-white">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-[#333333] mb-8">
              MY PROFILE
            </h1>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Sidebar */}
              <div className="w-full md:w-80 border border-gray-200 rounded-sm">
                {/* Profile Header */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <Image
                      src="https://m.gettywallpapers.com/wp-content/uploads/2023/09/Itachi-Uchiha-Pfp-for-Profile-Picture.jpg"
                      alt="Profile"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm text-gray-600">Hello</p>
                      <h2 className="text-lg font-bold text-[#333333]">
                        ROBERT FOX
                      </h2>
                    </div>
                  </div>
                </div>

                <ProfileSidebar />
              </div>

              {/* Main Content */}
              <div className="flex-1">{children}</div>
            </div>
          </div>
        </div>
       
  );
}

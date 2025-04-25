import { ProfileSidebar } from "@/components/profile-sidebar";
import { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";
import { ProfileSidebarHeaderCard } from "./profile/_components/profile-sidebar-header-card";
import { Tabs } from "@/components/ui/tabs";
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
        <h1 className="text-4xl font-bold text-[#333333] mb-8">MY PROFILE</h1>
        {/* <Tabs defaultValue="account" className="w-full"> */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="min-h-[70vh] w-full md:w-80 border border-gray-200 rounded-sm">
            {/* Profile Header */}
            <ProfileSidebarHeaderCard />

            <ProfileSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1">{children}</div>
        </div>
        {/* </Tabs> */}
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import USFlagImg from "@/assets/images/usa-flag.png";
import { useGetProfileQuery } from "@/redux/api/users.api";
import { ProfileSkeleton } from "@/components/skeleton/profile-skeleton";
import toTitleCase from "@/utils/titleCaseStr";
import Link from "next/link";
export default function ProfilePage() {
  const { data: myProfile, isLoading: myProfileLoading } =
    useGetProfileQuery(undefined);
  return (
    <>
      {myProfileLoading ? (
        <ProfileSkeleton />
      ) : (
        <>
          {/* Banner Image */}
          <div className="w-full h-44 md:h-56 rounded-md overflow-hidden mb-6">
            <Image
              src="/images/banners/profile-banner-img.png"
              alt="Banner"
              width={800}
              height={224}
              className="w-full h-full object-cover bg-purple-600"
            />
          </div>

          {/* Profile Content */}
          <div className="relative">
            {/* Profile Picture */}
            <div className="absolute -top-16 left-4">
              <div className="relative">
                <Image
                  src="https://m.gettywallpapers.com/wp-content/uploads/2023/09/Itachi-Uchiha-Pfp-for-Profile-Picture.jpg"
                  alt="Profile"
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white"
                />
                {/* <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 border border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </div> */}
              </div>
            </div>

            {/* Edit Profile Button */}
            <div className="flex justify-end mb-8">
              <Link href="/edit-profile">
                <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                  Edit Profile
                </button>
              </Link>
            </div>

            {/* Profile Information */}
            <div className="space-y-6 mt-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-1">Name</h3>
                <p className="text-gray-900">
                  {toTitleCase(myProfile?.data?.name!)}
                </p>
              </div>

              {/* <div>
                <h3 className="text-sm font-medium text-gray-700 mb-1">
                  Display Name
                </h3>
                <p className="text-gray-900">{myProfile?.data?.role}</p>
              </div> */}

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-1">
                  Phone number
                </h3>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-6">
                    <Image
                      src={USFlagImg}
                      alt="US Flag"
                      width={24}
                      height={16}
                    />
                  </span>
                  <p className="text-gray-900">{myProfile?.data?.contact}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-1">
                  {myProfile?.data?.email}
                </h3>
                <p className="text-gray-900">joylawson@gmail.com</p>
              </div>

              {/* <div>
                <h3 className="text-sm font-medium text-gray-700 mb-1">
                  Flat,House No,Building,Company,Apartment
                </h3>
                <p className="text-gray-900">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </p>
              </div> */}

              {/* <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-1">
                    Area,Colony,Street,Sector,Village
                  </h3>
                  <p className="text-gray-900">
                    2972 Westheimer Rd. Santa Ana, Illinois 85486
                  </p>
                </div> */}
            </div>
          </div>
        </>
      )}
    </>
  );
}

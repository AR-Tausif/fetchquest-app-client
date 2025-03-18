import Image from "next/image";
import Link from "next/link";

import { AppButton } from "@/components/buttons/app-button";


export const AboutUs = () => {
  const gamesPhotos = [
    "/images/posters/poster-1.jpg",
    "/images/posters/poster-2.jpg",
    "/images/posters/poster-3.jpg",
    "/images/posters/poster-2.jpg",
    "/images/posters/poster-5.jpg",
    "/images/posters/poster-2.jpg",
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      <div className="flex  gap-8 items-center">
        {/* About Us Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-0.5 w-24 bg-pink-500"></div>
            <h2 className="text-3xl font-bold uppercase tracking-wider text-gray-900 text-center">
              About Us
            </h2>
            <div className="h-0.5 w-24 bg-pink-500"></div>
          </div>

          <div className="space-y-4 text-gray-600">
            <p className="leading-relaxed">
              Lorem Ipsum Dolor Sit Amet Consectetur. Lorem Leo Dictum Dictum
              Tellus Amet.
            </p>

            <p className="leading-relaxed">
              Lorem Ipsum Dolor Sit Amet Consectetur. Congue Nulla Praesent
              Ultrices Nunc Lacus. Neque Turpis Enim Morbi A Tempus Pulvinar
              Vitae Eleifend Vulputate. Nec Laoreet Pellentesque Interdum Cursus
              Volutpat Ultricies. Pellentesque Sed Maecenas Curabitur Aliquet
              Pellentesque Praesent Vitae In Donec. Mi Egestas Dui In Congue
              Porta Urna Congue Massa. Tempor Tellus Mi Cursus Dictumst. Sed.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <Link href="/">
              <AppButton variant="primary">Watch</AppButton>
            </Link>
            <Link href="/">
              <AppButton variant="outline">Get Started</AppButton>
            </Link>
          </div>
        </div>

        {/* Games Grid Section */}
        <div className="w-full md:w-1/2 relative border-blue-500 pt-20 hidden md:block">
          {/* Logo */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 z-10">
            <Image
              src="/images/large-logo-img.png"
              alt="Fetch Quest Games Logo"
              width={1000}
              height={1000}
              className="object-contain"
            />
          </div>

          {/* Games Grid with Border */}
          <div className="border border-pink-200 rounded-lg p-4 pt-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Game 1 */}
              {gamesPhotos.map((gamePhoto, index) => (
                <div key={index} className="overflow-hidden rounded-lg border border-gray-200">
                  <Image
                    src={gamePhoto}
                    alt="EA FC Game"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

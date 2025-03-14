import Image from "next/image";
import Link from "next/link";

import { AppButton } from "@/components/buttons/app-button";


export const AboutUs = () => {
  const gamesPhotos = [
    "https://s3-alpha-sig.figma.com/img/146b/548b/ba314b535d146d9b6d1cced6104e714e?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CiJabbEKoHaIvyH1EIQoWqe13fB6pT2Ns2ifKDT3Yu7nUlz2wiqNKhn8uKYOfRgg2p1xvRMvLUNJ~XHOAxhCX6~ScW5RLONEAq~Hc2dniZHTFNxWkZ-U3WBXNcfHF-54VqoKHMRWlUsqbuwAGe2raQ1RwzBshCCXZWz7~-bfnZpyQtbGHk2bJ6YdxjWE5En0DiYoaQl1OJlMSvYaSroopzhGXSl47Vhbe16qOr5Zo3qZp4EHlTLOoFhEPD2qgsAfRxUqJgtScLFvA3MoF83AfOUuaMt47DSwvQMc0OzTFHTsZ-LCm5TIwkHtPyissGeFwowHcA1Ke9VDxTRgQ6k4yw__",
    "https://s3-alpha-sig.figma.com/img/882e/1980/f968024ff8de096397fa67b411a98c93?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QsZIZFKkONqoU2VrT7pYYX7G7CftHVGWg4woQsxPhLhcQjhXCK84djCRU9Jnjsb3cq0ehF3btjVTD741QL~BJEJ8ZfV7ShkncqnwC7eHqf5eVSFlXWzvniE0hpTAIlvrQhEfbDCW9AwcoSvcOOv28TVES0SHEqaffn3w~TGeabL9u-HMTwf4dG7cWMc0ZmkOK6z6KoVEUIXkMcpebQ2JdUgDHmpHorO0MdOCJW9u3aw9i2R2Me2FsUZpkzRHaTLwju1A1Kx5qAV~LHpdz9zxH~c2tVNSLYrDEgB5GTydYrFr4uGu6HoYFvytyD96mPAWbwN8hKn54p2t0AU03ne3WQ__",
    "https://s3-alpha-sig.figma.com/img/0e1b/b369/e7c890c0b5ad4aaa3b0b01f5e35112b1?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jCSypKcz8HP4W8wDHMSCPgRqLrT4f~xt1oB1RylrXQEl4qZXTpqsqS-99~xfsBOEJj2~jROTMQ1YMbuuQpvV-2GApkTfnxUxbsSjcacUV2RptLd5cEW61C5gYUTfXEPbcyunnbFassVKGO~Vcdo36vhOMAAYLNT~5IUR3~RuEBnQv-oS47ldicrCe8igytE23OIx~cyTq5BqEGwZq9cIxtpLaOJ0pP4Ukf9kdCeJ5MsNUAKQdCtNj~vNsKWV6H1j8KwUFCNMtw0K7jm8yjFcnFVRnBl6qqUj5SXloXeVYUh0oOiW53cjSw~hLXAZFUCjXYWzreACXr7xTOy4fhPrqQ__",
    "https://s3-alpha-sig.figma.com/img/4c8d/ce32/3e89450c7d17888a83f5d4c426fe666f?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bFdEqUajjxfjm1ZYciIBvMN8las3acaSnzTG0BOSJ6DiBTo8fYbe3JFS9D063ejhNNnFdViB-c1GkqqtMLncb021Qj3Il919oqbwhA9jXivvTOdBwKT5N2Sk77MXpKS7Mlej8~K5J7mXoULApILLdA6NVhv5F3WKqP7pkKY9JZB~nfI-0U8KhZOzGx6pNGP1X4AH0YcVFm9dVqktWtONlnOWpa4SB0anF2RUGXq8gwGZ9RdoGb34dyTiF4pnod4jd33557pzu0hWYKz-sQz2ZMkwX-1N1t5~P6i4l8nnx4dWXz~i-Vt0hccwUw4MvB7qjH-mwOk1PazxTkOoPJxP0w__",
    "https://s3-alpha-sig.figma.com/img/ec73/33f9/0ed8364f14df8f70c77614fc8c5d5340?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qz6c0AA0Nmv0Jp1k4VDf26Bb9~ZIvhG6oiHurHEFOxkVgy3~06QtMWsOHf9T6U7UewwdVoLX3Qkg9n377vxiqF0pCYqnv-J4m7QmT20GmoUVWVYxjouGcADEcssokepWYEMvYmBieJ2e9waSIYS2wV6NhbO8mrVD3PGgXa9B1pWGno61ElKUiV8ud-MtEli8wRrVlD50ye7Q8uFHrjXYH3xn6GN2p0YxGUvMBcmvkFJUaVGr1oNqmhcQexypym20zB-4IvJ95gXNxP8S9pVMsbUaEBFvClXu1VWWzSMD51HaIqf5NfN-qDPFGtgKQ9fg1Wor3tx~cVf1glW66QjREQ__",
    "https://s3-alpha-sig.figma.com/img/882e/1980/f968024ff8de096397fa67b411a98c93?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QsZIZFKkONqoU2VrT7pYYX7G7CftHVGWg4woQsxPhLhcQjhXCK84djCRU9Jnjsb3cq0ehF3btjVTD741QL~BJEJ8ZfV7ShkncqnwC7eHqf5eVSFlXWzvniE0hpTAIlvrQhEfbDCW9AwcoSvcOOv28TVES0SHEqaffn3w~TGeabL9u-HMTwf4dG7cWMc0ZmkOK6z6KoVEUIXkMcpebQ2JdUgDHmpHorO0MdOCJW9u3aw9i2R2Me2FsUZpkzRHaTLwju1A1Kx5qAV~LHpdz9zxH~c2tVNSLYrDEgB5GTydYrFr4uGu6HoYFvytyD96mPAWbwN8hKn54p2t0AU03ne3WQ__",
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      <div className="flex  gap-8 items-center">
        {/* About Us Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-0.5 w-24 bg-pink-500"></div>
            <h2 className="text-3xl font-bold uppercase tracking-wider text-gray-900">
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
              width={120}
              height={120}
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
                    width={100}
                    height={100}
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

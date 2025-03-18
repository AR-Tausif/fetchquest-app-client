import { AppButton } from "@/components/buttons/app-button";
import Image from "next/image";

export const FooterTopSection = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-t to-[#53083A] from-[#2D0844] mt-2 ">
      <div className="flex md:flex-row flex-col items-center">
        <div className="w-full md:w-[50%] mb-10 md:mb-0 grow">
          <Image
            className="object-cover object-center !w-full h-full"
            alt="hero"
            src="/images/posters/watching-video.png"
            width={1000}
            height={1000}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 py-10 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed text-[#F4F4F4]">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex flex-col justify-center items-center w-full  gap-4 md:flex-row">
            {/* <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              Join Now
            </button> */}
            {/* <button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
              Visit Our Discord
            </button> */}

            <AppButton
              variant="outline"
              className="border-none bg-white text-blue-700 font-bold"
            >
              Join Now
            </AppButton>
            <AppButton
              variant="outline"
              className="border-none bg-white text-blue-700 font-bold mt-4 md:mt-0"
            >
              Visit Our Discord
            </AppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

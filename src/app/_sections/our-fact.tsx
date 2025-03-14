import Image from "next/image";

import { VideoEmbed } from "@/components/VideoEmbed";
import { AppButton } from "@/components/buttons/app-button";
import { LogoAndSocialIcons } from "@/components/boxes";

export const OurFact = () => {
  return (
    <section className="relative bg-gradient-to-t to-[#53083A] from-[#2D0844] flex flex-col flex-col-reverse justify-between md:flex-row">
      <h2 className="absolute bottom-0 z-50 left-[25%] text-white font-extrabold text-[20vmin] tracking-[5px] [text-stroke:1px_#fff] [-webkit-text-stroke:1px_#fff] [-webkit-text-fill-color:transparent] hidden md:block">
        Careers
      </h2>
      <div className="text-white flex flex-col gap-y-8 py-12 px-40 items-center">
        <h3 className="text-md md:text-3xl uppercase underline underline-offset-8">
          Join Us
        </h3>

        <LogoAndSocialIcons />

        {/* <button
          className="px-8 py-3 rounded-md border border-pink-300 text-white font-medium roboto-fonts"
          type="button"
        >
          Find a job
        </button> */}
        <AppButton
          variant="outline"
          className="text-white border-white font-medium normal-case hover:bg-[#D188FF] hover:border-[#D188FF] transition-all duration-300"
        >
          Find a job
        </AppButton>
      </div>

      <div className="w-full md:w-[55%]">
        <VideoEmbed />
      </div>
    </section>
  );
};

import Image from "next/image";

import { VideoEmbed } from "@/components/VideoEmbed";

// Constants for social media icons
const SOCIAL_ICONS = [
  {
    src: "/images/social-logo/vector.svg",
    alt: "Vector Image",
  },
  {
    src: "/images/social-logo/discord.svg",
    alt: "Discord",
  },
  {
    src: "/images/social-logo/instagram.svg",
    alt: "Instagram",
  },
] as const;

// Image dimensions constants
const SOCIAL_ICON_SIZE = {
  width: 50,
  height: 50,
} as const;

const LOGO_SIZE = {
  width: 224,
  height: 234,
} as const;

export const OurFact = () => {
  return (
    <section className="relative bg-gradient-to-t to-[#53083A] from-[#2D0844] flex justify-between">
      <h2 className="absolute bottom-0 z-50 left-[25%] text-white font-extrabold text-[20vmin] tracking-[5px] [text-stroke:1px_#fff] [-webkit-text-stroke:1px_#fff] [-webkit-text-fill-color:transparent]">Careers</h2>
      <div className="text-white flex flex-col gap-y-8 py-12 px-40">
        <h3 className="text-5xl uppercase underline underline-offset-8">
          Join Us
        </h3>

        <Image
          src="/images/large-logo-img.png"
          alt="Company Logo"
          className="w-[224] h-[234]"
          {...LOGO_SIZE}
          priority
        />

        <div className="flex items-center gap-8">
          {SOCIAL_ICONS.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              {...SOCIAL_ICON_SIZE}
            />
          ))}
        </div>
       

        <button
          className="px-8 py-3 rounded-md border border-pink-300 text-white font-medium roboto-fonts"
          type="button"
        >
          Find a job
        </button>
      </div>

      <div className="w-[55%]">
        <VideoEmbed />
      </div>
    </section>
  );
};

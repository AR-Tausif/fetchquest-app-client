import Image from "next/image";
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
export const LogoAndSocialIcons = ({
  logoClassName = "",
  socialImageClassName = "",
}) => {
  return (
    <>
      <Image
        src="/images/large-logo-img.png"
        alt="Company Logo"
        className={`w-[120px] md:w-[224px] h-[120px] md:h-[234px] ${logoClassName}`}
        {...LOGO_SIZE}
        priority
      />
      <div className="flex items-center gap-8">
        {SOCIAL_ICONS.map((icon) => (
          <Image
            key={icon.alt}
            src={icon.src}
            alt={icon.alt}
            className={`w-[30px] md:w-[50px] h-[30px] md:h-[50px] ${socialImageClassName}`}
            {...SOCIAL_ICON_SIZE}
          />
        ))}
      </div>
    </>
  );
};

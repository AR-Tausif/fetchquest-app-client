import Image from "next/image";
import { LogoAndSocialIcons } from "./boxes";
import { link } from "fs";
import Link from "next/link";

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
  width: 100,
  height: 100,
} as const;

// const LOGO_SIZE = {
//   width: 224,
//   height: 234,
// } as const;

export const Footer = () => {
  const footerLinks = [
    {
      title: "LEGAL",
      links: [
        { href: "/", label: "Code" },
        { href: "/", label: "Privacy" },
        { href: "/", label: "Term Of Use" },
        { href: "/", label: "Customer Support" },
      ],
    },
    {
      title: "Brands",
      links: [
        { href: "/", label: "Duel Masters" },
        { href: "/", label: "Dungeons & Dragons" },
        { href: "/", label: "Magic: The Gathering" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { href: "/", label: "About" },
        { href: "/", label: "Careers" },
        { href: "/", label: "Support" },
      ],
    },
  ];
  return (
    <footer className="robot-fonts bg-gradient-to-t to-[#53083A] from-[#2D0844] text-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center">
          {footerLinks.map((footerItem) => (
            <div
              key={footerItem.title}
              className="lg:w-1/4 md:w-1/2 w-full px-4"
            >
              <h2 className="text-white font-semibold tracking-widest text-sm mb-3">
                {footerItem.title ? footerItem.title : "Take a refresh"}
              </h2>

              <nav className="list-none mb-10">
                {footerItem.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-gray-50"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
          ))}

          <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col justify-center items-center gap-4">
            <LogoAndSocialIcons
              logoClassName="w-[100px] h-[100px] md:w-[120px] md:h-[130px]"
              socialImageClassName="w-50px md:w-[40px]"
            />
          </div>
        </div>
      </div>
      <div className="text-center text-sm">
        <p>
          © 1993-2025 Wizards of the Coast LLC, a subsidiary of Hasbro, Inc. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

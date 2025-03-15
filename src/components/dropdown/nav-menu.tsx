"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavDropdown } from "./nav-dropdown";
import { EmblaCarousel } from "../carousle";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DropdownGameCard } from "../cards";
import { CircleUserRound, Headset, Menu, X } from "lucide-react";
import Image from "next/image";
import { Sheet, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { SheetDemo } from "./mobile-nav-sheet";
import { JoinUs } from "../join-us";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Logo = "/images/website-logo.svg";
export function NavigationMenuDemo() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const onMouseLeave = () => {
    setDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // <ul className="hidden md:flex gap-6 uppercase font-bold">
  //               <li
  //                 className="flex items-center gap-x-2 hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer"
  //                 onClick={() => setDropdownOpen(!dropdownOpen)}
  //               >
  //                 <p>Games</p> <ChevronDown className="primary-icon" />
  //               </li>
  //               <li className="flex items-center gap-x-2 hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer">
  //                 <p>Join Us</p> <ChevronDown className="primary-icon" />
  //               </li>
  //               <li className="hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer active:text-[#da5da3]">
  //                 <Link href="/who-we-are">
  //                   <p>Who we are</p>
  //                 </Link>
  //               </li>
  //               <li>
  //                 <Link href="/blogs">
  //                   <p className="hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer">
  //                     News
  //                   </p>
  //                 </Link>
  //               </li>
  //             </ul>

  const OPTIONS: EmblaOptionsType = { containScroll: false, align: "start" };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const [emblaRef] = useEmblaCarousel(OPTIONS);
  const FontSize = "text-2xl";
  return (
    <NavigationMenu className="flex justify-between lg:justify-center lg:gap-x-[30vw] py-1">
      <NavigationMenuList className="">
        <div className="">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={Logo} alt="Logo" width={50} height={50} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </Link>
        </div>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger
            className={`${FontSize} hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer`}
          >
            Games
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-black">
            {/* <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                 
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul> */}
            <div className="flex justify-center my-4">
              <h4 className="text-black text-2xl font-semibold p-2 px-8 bg-white rounded-sm">Our Games</h4>
            </div>
            <p className="text-white">Up Coming Games</p>
            <EmblaCarousel emblaRef={emblaRef}>
              <div className="embla__container my-4">
                {SLIDES.map((index) => (
                  <div className="embla__slide" key={index}>
                    <DropdownGameCard />
                  </div>
                ))}
              </div>
              {/* TODO: need to clean this code and rebase previous state ui */}
            </EmblaCarousel>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger
            className={`${FontSize} hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer`}
          >
            Join Us
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-black">
            <JoinUs />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:flex">
          <Link href="/who-we-are" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${FontSize} hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer`}
            >
              Who We Are
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="px-4 hidden md:flex">
          <Link href="/who-we-are" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${FontSize} hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer`}
            >
              News
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="justify-self-start hidden md:flex">
        {/* navbar right side */}
        <NavigationMenuItem className="px-4">
          <Link href="/customer-support" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${FontSize} flex gap-x-2 hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer`}
            >
              <Headset className="primary-icon" />
              <p>Customer Support</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="px-4">
          <Link href="/login" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${FontSize} flex gap-x-2 hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer`}
            >
              <CircleUserRound className="primary-icon" />
              <p>My Account</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      {/* Mobile Menu Button */}

      <SheetDemo />
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function GradientText() {
  return (
    <div className="bg-white p-2 bg-white rounded-md">
      <h2 className="nav-dropdown-text-stroke !text-[6vmin] !md:text-[8vmin] ">
        our games
      </h2>
    </div>
  );
}

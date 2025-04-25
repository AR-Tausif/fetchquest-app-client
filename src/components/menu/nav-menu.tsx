"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { CircleUserRound, Headset, ShoppingCart } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";

import { cn } from "@/lib/utils";
import { EmblaCarousel } from "../carousle";
import { DropdownGameCard } from "../cards";
import { JoinUs } from "../join-us";
import { DropdownMenuDemo } from "../dropdown/demo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useAuth } from "@/hooks/useAuth";
import { useGetProfileQuery } from "@/redux/api/users.api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

const LOGO = "/images/website-logo.svg";
const FONT_SIZE = "text-2xl";
const HOVER_STYLE =
  "hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer";

export function NavigationMenuDemo() {
  // State management
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Carousel configuration
  const carouselOptions: EmblaOptionsType = {
    containScroll: false,
    align: "start",
  };
  const [emblaRef] = useEmblaCarousel(carouselOptions);
  const slides = Array.from(Array(2).keys());

  // Event handlers
  const onMouseLeave = () => setDropdownOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <NavigationMenu className="flex justify-between lg:justify-center lg:gap-x-[20vw] py-1">
      {/* Left side navigation */}
      <NavigationMenuList>
        {/* Logo */}
        <LogoSection />

        {/* Main navigation items */}
        <MainNavigationItems emblaRef={emblaRef} slides={slides} />
      </NavigationMenuList>

      {/* Right side navigation */}
      <NavigationMenuList className="justify-self- hidden md:flex">
        <CustomerSupportLink />
        <UserAccountLink />
        <ShoppingCartArea />
      </NavigationMenuList>

      {/* Mobile menu */}
      <DropdownMenuDemo />
    </NavigationMenu>
  );
}

// Component sections
const LogoSection = () => (
  <div>
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image src={LOGO} alt="Logo" width={90} height={90} />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" />
    </Link>
  </div>
);

const MainNavigationItems = ({
  emblaRef,
  slides,
}: {
  emblaRef: any;
  slides: number[];
}) => (
  <>
    {/* Games dropdown */}
    <NavigationMenuItem className="hidden md:flex">
      <NavigationMenuTrigger className={`${FONT_SIZE} ${HOVER_STYLE}`}>
        Games
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-black">
        <GamesDropdownContent emblaRef={emblaRef} slides={slides} />
      </NavigationMenuContent>
    </NavigationMenuItem>

    {/* Join Us dropdown */}
    <NavigationMenuItem className="hidden md:flex">
      <NavigationMenuTrigger className={`${FONT_SIZE} ${HOVER_STYLE}`}>
        Join Us
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-black">
        <JoinUs />
      </NavigationMenuContent>
    </NavigationMenuItem>

    {/* Who We Are link */}
    <NavigationMenuItem className="hidden md:flex">
      <Link href="/who-we-are" legacyBehavior passHref>
        <NavigationMenuLink className={`${FONT_SIZE} ${HOVER_STYLE}`}>
          Who We Are
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>

    {/* News link */}
    <NavigationMenuItem className="px-4 hidden md:flex">
      <Link href="/blogs" legacyBehavior passHref>
        <NavigationMenuLink className={`${FONT_SIZE} ${HOVER_STYLE}`}>
          News
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  </>
);

const GamesDropdownContent = ({
  emblaRef,
  slides,
}: {
  emblaRef: any;
  slides: any;
}) => {
  const { gameSlide } = useGetAllGames();
  return (
    <div className="w-screen ps-20 pe-8">
      <div className="flex justify-center my-4">
        <img
          src="/images/our-games-dropdown.png"
          alt="our games dropdown content image"
          className="w-[25%]"
        />
      </div>
      <p className="text-white">Up Coming Games</p>
      <EmblaCarousel emblaRef={emblaRef}>
        <div className="embla__container my-4 mx-14">
          {gameSlide.map((game) => (
            <div className="embla__slide" key={game.id}>
              <DropdownGameCard gameContent={game} />
            </div>
          ))}
        </div>
      </EmblaCarousel>
    </div>
  );
};

const CustomerSupportLink = () => (
  <NavigationMenuItem className="px-4">
    <Link href="/customer-support" legacyBehavior passHref>
      <NavigationMenuLink
        className={`${FONT_SIZE} flex gap-x-2 ${HOVER_STYLE}`}
      >
        <Headset className="primary-icon" />
        <p>Customer Support</p>
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
);
const ShoppingCartArea = () => {
  const cartTotalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  return (
    <NavigationMenuItem className="px-4">
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <ShoppingCart size={22} />
            <span className="absolute -top-1 -right-1 bg-[#d33246] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              {cartTotalQuantity}
            </span>
          </button>
        </SheetTrigger>
        <ShoppingCartSheetContent />
      </Sheet>
    </NavigationMenuItem>
  );
};

import Cookies from "js-cookie";
import { setUser } from "@/redux/features/auth.slice";
import { useGetAllGames } from "@/hooks/rtk-queries/useGetAllGames";
import { Sheet, SheetTrigger } from "../ui/sheet";
import { ShoppingCartSheetContent } from "../sheets";
const UserAccountLink = () => {
  const { isAuthenticated } = useAuth();
  const { data: myProfile, isLoading: myProfileLoading } =
    useGetProfileQuery(undefined);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(setUser({ user: null, token: null }));
    Cookies.remove("auth");

    router.push("/login");

    // router.push("/login");
    // window.location.href = "/login";
  };

  if (myProfileLoading) {
    return (
      <NavigationMenuItem className="px-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-28 h-6 bg-gray-300 rounded-sm animate-pulse"></div>
        </div>
      </NavigationMenuItem>
    );
  }

  if (!isAuthenticated) {
    return (
      <NavigationMenuItem className="px-4">
        <Link href="/login" legacyBehavior passHref>
          <NavigationMenuLink
            className={`${FONT_SIZE} flex justify-between items-center gap-x-2 ${HOVER_STYLE}`}
          >
            <CircleUserRound className="primary-icon" />
            <p className="">Login</p>
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem className="px-4">
      <NavigationMenuLink>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className={`${FONT_SIZE} flex gap-x-2 ${HOVER_STYLE}`}>
              <Image
                src={myProfile?.data?.image || "https://i.pinimg.com/736x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg"}
                alt="user account image"
                className="rounded-full"
                width={32}
                height={32}
              />
              <p>{myProfile?.data?.name}</p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

// Helper components (ListItem and GradientText remain unchanged)
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => (
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
));
ListItem.displayName = "ListItem";

export function GradientText() {
  return (
    <div className="bg-white p-2 bg-white rounded-md">
      <h2 className="nav-dropdown-text-stroke !text-[6vmin] !md:text-[8vmin]">
        our games
      </h2>
    </div>
  );
}

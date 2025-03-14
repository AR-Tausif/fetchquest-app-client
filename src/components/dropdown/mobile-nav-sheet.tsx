import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { GradientText } from "./nav-menu";
import { EmblaCarousel } from "../carousle";
import { DropdownGameCard } from "../cards";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { CircleUserRound, Headset, Menu } from "lucide-react";
const Logo = "/images/website-logo.svg";
export function SheetDemo() {

    const OPTIONS: EmblaOptionsType = { containScroll: false, align: "start" };
    const SLIDE_COUNT = 5;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
    const [emblaRef] = useEmblaCarousel(OPTIONS);
    const FontSize = "text-2xl"
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="inline-block md:hidden">
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <ul className="space-y-4 mt-6">
                    <Link href="/#our-game-section" legacyBehavior passHref>
                        <li className={`${FontSize} flex gap-x-2 hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer`}>

                            <p>Games</p>

                        </li>
                    </Link>
                    <Link href="/#footer-section" legacyBehavior passHref>
                        <li className={`${FontSize} flex gap-x-2 hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer`}>

                            <p>Join Us</p>
                        </li>
                    </Link>
                    <Link href="/who-we-are" legacyBehavior passHref>
                        <li className={`${FontSize} flex gap-x-2 hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer`}>

                            <p>Who we are</p>
                        </li>
                    </Link>
                    <Link href="/blogs" legacyBehavior passHref>
                        <li className={`${FontSize} flex gap-x-2 hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer`}>

                            <p>News</p>
                        </li>
                    </Link>
                </ul>
                <ul className="space-y-4 my-8">
                    <Link href="/customer-support" legacyBehavior passHref>
                        <li className={`${FontSize} flex gap-x-2 hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer`}>
                            <Headset className="primary-icon" />
                            <p>Customer Support</p>

                        </li>
                    </Link>
                    <Link href="/login" legacyBehavior passHref>
                        <li className={`${FontSize} flex gap-x-2 hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer`}>
                            <CircleUserRound className="primary-icon" />
                            <p>My Account</p>
                        </li>
                    </Link>
                </ul>
            </SheetContent>
        </Sheet>
    )
}

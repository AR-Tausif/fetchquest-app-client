"use client"
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function DropdownMenuDemo() {
  const [open, setOpen] = useState(false);
  const mobileMenuNavData = [
    {
      name: "Games",
      href: "/#our-game-section",
    },
    {
      name: "Join Us",
      href: "/#footer-section",
    },
    {
      name: "Who We Are",
      href: "/who-we-are",
    },
    {
      name: "News",
      href: "/blogs",
    },
  ];
  
    const handleItemClick = () => {
      setOpen(false);
    };
  
    return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="inline-block md:hidden">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 inline-block md:hidden">
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {mobileMenuNavData.map((navItem) => (
              <DropdownMenuItem key={navItem.name} onSelect={handleItemClick}>
                <Link href={navItem.href} legacyBehavior passHref>
                  <p className={`flex gap-x-2 hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer`}>
                    {navItem.name}
                  </p>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onSelect={handleItemClick}>
              <Link href={"/customer-support"} legacyBehavior passHref>
                <p className={`flex gap-x-2 hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer`}>
                  Customer Support
                </p>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={handleItemClick}>
              <Link href={"/sign-up"} legacyBehavior passHref>
                <p className={`flex gap-x-2 hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer`}>
                  My Account
                </p>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
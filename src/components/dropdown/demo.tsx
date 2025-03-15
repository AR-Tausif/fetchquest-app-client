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

export function DropdownMenuDemo() {
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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="inline-block md:hidden">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 inline-block md:hidden">
        {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {mobileMenuNavData.map((navItem) => (
            <DropdownMenuItem key={navItem.name}>
              <Link href={navItem.href} legacyBehavior passHref>
                <p
                  className={`flex gap-x-2 hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer`}
                >
                  {navItem.name}
                </p>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href={"/customer-support"} legacyBehavior passHref>
                <p
                  className={`flex gap-x-2 hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer`}
                >
                  Customer Support
                </p>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/sign-up"} legacyBehavior passHref>
                <p
                  className={`flex gap-x-2 hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer`}
                >
                  My Account
                </p>
              </Link>
            </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

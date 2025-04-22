import { FC } from "react";

import { Container } from "@/components/container";

import { bebasFont } from "./top-headings/SectionHeading";

import { NavigationMenuDemo } from "./menu/nav-menu";

const Logo = "/images/website-logo.svg";

interface NavbarProps {
  className?: string;
}
export const Navbar: FC<NavbarProps> = () => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const onMouseLeave = () => {
  //   setDropdownOpen(false);
  // };

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!mobileMenuOpen);
  // };

  return (
    <nav
      className={`*:bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 border relative ${bebasFont.className} font-thin text-2xl`}
    >
      <Container>
        <NavigationMenuDemo />
      </Container>
      {/* <NavDropdown dropdownOpen={dropdownOpen} onMouseLeave={onMouseLeave} /> */}
    </nav>
  );
};

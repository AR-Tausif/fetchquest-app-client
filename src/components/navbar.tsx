"use client";
import { ChevronDown, CircleUserRound, Headset, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/container";
import { NavDropdown } from "@/components/dropdown";

const Logo = "/images/website-logo.svg";

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onMouseLeave = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 border relative">
      <Container>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-3xl py-2">
          <div className="flex items-center gap-x-3">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image src={Logo} alt="Flowbite Logo" width={50} height={50} />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </Link>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-6 uppercase font-bold">
              <li
                className="flex items-center gap-x-2 hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <p>Games</p> <ChevronDown className="primary-icon" />
              </li>
              <li className="flex items-center gap-x-2 hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer">
                <p>Join Us</p> <ChevronDown className="primary-icon" />
              </li>
              <li className="hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer active:text-[#da5da3]">
                <Link href="/who-we-are"><p>Who we are</p></Link>
              </li>
              <li>
                <Link href="/blogs">
                  <p className="hover:text-[#da5da3] transition-all ease-in-out duration-300 cursor-pointer">News</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-500 hover:text-gray-600"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Right Menu */}
          <ul className="hidden md:flex gap-6 font-bold uppercase">
            <Link href="customer-support">
              <li className="flex gap-x-2">
                <Headset className="primary-icon" />
                <p>Customer Support</p>
              </li>
            </Link>
            <Link href="/sign-up">
              <li className="flex gap-x-2">
                <CircleUserRound className="primary-icon" />
                <p>My Account</p>
              </li>
            </Link>
          </ul>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t z-50">
            <ul className="flex flex-col py-4 px-6 space-y-4 uppercase font-bold">
              <li
                className="flex items-center justify-between hover:text-[#da5da3] transition-all"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <p>Games</p> <ChevronDown className="primary-icon" />
              </li>
              <li className="flex items-center justify-between hover:text-[#da5da3] transition-all">
                <p>Join Us</p> <ChevronDown className="primary-icon" />
              </li>
              <li className="hover:text-[#da5da3] transition-all">
                <Link href="/who-we-are"><p>Who we are</p></Link>
              </li>
              <li className="hover:text-[#da5da3] transition-all">
                <Link href="/blogs"><p>News</p></Link>
              </li>
              <div className="border-t pt-4">
                <Link href="customer-support">
                  <li className="flex gap-x-2 hover:text-[#da5da3] transition-all py-2">
                    <Headset className="primary-icon" />
                    <p>Customer Support</p>
                  </li>
                </Link>
                <Link href="/sign-up">
                  <li className="flex gap-x-2 hover:text-[#da5da3] transition-all py-2">
                    <CircleUserRound className="primary-icon" />
                    <p>My Account</p>
                  </li>
                </Link>
              </div>
            </ul>
          </div>
        )}
      </Container>
      <NavDropdown dropdownOpen={dropdownOpen} onMouseLeave={onMouseLeave} />
    </nav>
  );
};
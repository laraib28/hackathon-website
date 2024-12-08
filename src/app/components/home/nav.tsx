"use client";

import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import Responsive from "./responsive";  // Make sure the filename is correct (case-sensitive)

const Navbar = () => {
  return (
    <nav className="w-full bg-white px-6 py-4 flex items-center justify-between border-b">
      {/* Logo */}
      <div className="font-extrabold text-3xl">
        <Link href="/">SHOP.CO</Link>
      </div>

      {/* Menu Items (only show on medium and larger screens) */}
      <div className="hidden md:flex space-x-6 text-gray-500 pl-14 text-sm font-semibold">
        <Link href="/shop" className="hover:text-black">
          Shop
        </Link>
        <Link href="/on-sale" className="hover:text-black">
          On Sale
        </Link>
        <Link href="/new-arrivals" className="hover:text-black">
          New Arrivals
        </Link>
        <Link href="/brands" className="hover:text-black">
          Brands
        </Link>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center flex-1 mx-9">
        <div className="w-full max-w-lg relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full pl-10 pr-4 py-3 rounded-full bg-gray-100 text-sm outline-none"
          />
        </div>
      </div>

      {/* Icons */}
      <div className="hidden md:flex items-center space-x-4 text-gray-700">
        <IoCartOutline className="text-xl font-semibold hover:text-black cursor-pointer" />
        <FaRegUser className="font-bold hover:text-black cursor-pointer" />
      </div>

      {/* Responsive Menu */}
      <Responsive />  {/* This handles the mobile menu */}
    </nav>
  );
};

export default Navbar;

"use client";

import React from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

const Responsive = () => {
  return (
    <div>
      <DropdownMenu>
        {/* Menu Trigger */}
        <DropdownMenuTrigger asChild>
          <button className="p-2 md:hidden" aria-label="Menu">
            <MenuIcon className="h-6 w-6" />
          </button>
        </DropdownMenuTrigger>

        {/* Dropdown Content */}
        <DropdownMenuContent align="end" className="w-48 bg-white shadow-lg rounded-md p-2">
          <DropdownMenuItem>
            <Link href="/" className="block w-full px-4 py-2 hover:bg-gray-100">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/about" className="block w-full px-4 py-2 hover:bg-gray-100">About</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact" className="block w-full px-4 py-2 hover:bg-gray-100">Contact</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/sign-up" className="block w-full px-4 py-2 hover:bg-gray-100">Sign Up</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Responsive;

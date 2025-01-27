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
    <div className="md:hidden"> {/* Only show on small screens */}
    <DropdownMenu>
      {/* Menu Trigger */}
      <DropdownMenuTrigger asChild>
        <button className="p-2" aria-label="Menu">
          <MenuIcon className="h-6 w-6" />
        </button>
      </DropdownMenuTrigger>
  
      {/* Dropdown Content */}
      <DropdownMenuContent
        align="end"
        className="w-48 bg-white shadow-lg rounded-md p-2"
      >
        <DropdownMenuItem>
          <Link href="/" className="block w-full px-4 py-2 hover:bg-gray-100">
            Shop
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/onsale"
            className="block w-full px-4 py-2 hover:bg-gray-100"
          >
            On Sale
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/newarrival"
            className="block w-full px-4 py-2 hover:bg-gray-100"
          >
            New Arrival
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/brands"
            className="block w-full px-4 py-2 hover:bg-gray-100"
          >
            Brand
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
  
  );
};

export default Responsive;
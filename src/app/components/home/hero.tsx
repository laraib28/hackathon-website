"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);

  const handleClose = () => {
    setShowHeader(false);
  };

  return (
    <>
      {showHeader && (
        <header className="w-full bg-black text-gray-300 px-4 py-2 flex items-center">
          <div className="flex-1 text-center">
            <h1 className="font-medium text-sm md:text-base lg:text-lg">
              Sign up and get 20% off to your first order.{' '}
              <Link href="/" className="underline">
                ShopNow
              </Link>
            </h1>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-300 hover:text-white text-lg font-bold"
            aria-label="Close"
          >
            ✕
          </button>
        </header>
      )}
    </>
  );
};

export default Header;

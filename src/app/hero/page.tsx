"use client";

import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#F2F0F1]">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row py-8 lg:py-12">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold pt-12 lg:pt-20">
            <h1>FIND CLOTHES</h1>
            <h1>THAT MATCHES</h1>
            <h1>YOUR STYLE</h1>
          </div>
          <div className="text-gray-500 text-xs sm:text-sm lg:text-base mb-4 sm:mb-6">
            <p>
              Browse through our diverse range of meticulously crafted garments,
              designed
            </p>
            <p>to bring out your individuality and cater to your sense of style.</p>
          </div>
          <div className="mb-6 sm:mb-8">
            <button className="bg-gray-950 text-white px-8 sm:px-11 py-2 text-xs sm:text-sm rounded-full hover:bg-gray-800">
              Shop Now
            </button>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold">200+</h3>
              <p className="text-gray-500 text-xs sm:text-sm">International Brands</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold">2,000+</h3>
              <p className="text-gray-500 text-xs sm:text-sm">High-Quality Products</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold">30,000+</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <div className="relative -mt-6 sm:-mt-10">
            <Image
              src="/images/banner.jpeg"
              alt="Fashion Models"
              width={400} 
              height={250} 
              className="object-cover rounded-lg"
            />
            {/* Decorative Stars */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-black text-2xl sm:text-3xl font-bold">
              <Image
              src='/images/star.png'
              alt="star"
              height={50}
              width={50}/>
            </div>
            <div className="absolute top-48 left-4 sm:left-6 text-black text-2xl sm:text-3xl font-bold">
            <Image
              src='/images/s.star.png'
              alt="star"
              height={50}
              width={50}/>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="bg-black text-white py-4 sm:py-6 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-y-4 gap-x-8">
          <Image
            src="/images/Vector.png"
            alt="Zara"
            width={100}
            height={100}
            className="h-8 sm:h-10 mx-auto"
          />
          <Image
            src="/images/zara-logo-1 1.png"
            alt="Versace"
            width={91}
            height={38}
            className="h-8 sm:h-10 mx-auto"
          />
          <Image
            src="/images/Vector (1).png"
            alt="Gucci"
            width={100}
            height={40}
            className="h-8 sm:h-10 mx-auto"
          />
          <Image
            src="/images/prada-logo-1 1.png"
            alt="Prada"
            width={156}
            height={36}
            className="h-8 sm:h-10 mx-auto"
          />
          <Image
            src="/images/Group.png"
            alt="Calvin Klein"
            width={206}
            height={33.35}
            className="h-8 sm:h-10 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

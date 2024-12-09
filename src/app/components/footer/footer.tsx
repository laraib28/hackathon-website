import Image from "next/image";
import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiTwitter, CiFacebook } from "react-icons/ci";
import { FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-700 relative">
    {/* Gray Background Extension */}
    <div className="absolute inset-0 top-10 bg-gray-100 -z-10"></div>
  
    {/* Top Section */}
    <div className="bg-black rounded-3xl h-auto md:h-[200px] w-full max-w-[900px] p-6 md:p-12 mx-auto mt-5 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Heading Section */}
        <div className="text-gray-50 text-2xl md:text-4xl font-bold text-center md:text-left">
          <h1>STAY UPTO DATE ABOUT</h1>
          <h1>OUR LATEST OFFER</h1>
        </div>
  
        {/* Subscription Section */}
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <div className="flex items-center bg-gray-100 text-gray-400 px-4 py-2 rounded-full">
            <MdOutlineMailOutline className="mr-2" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent outline-none flex-1 text-sm"
            />
          </div>
          <button className="px-4 md:px-6 py-2 bg-gray-50 rounded-full font-bold">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  
    {/* Links Section */}
    <div className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {/* Shop Description */}
        <div>
          <h3 className="font-extrabold text-3xl text-gray-950 ">SHOP.CO</h3>
          <p className="text-gray-500">
            We have clothes that suit your style and which you're proud to wear.
            From women to men.
          </p>
          <div className="flex space-x-4 mt-4">
            <CiTwitter className="text-2xl cursor-pointer" />
            <CiFacebook className="text-2xl cursor-pointer" />
            <FaInstagram className="text-2xl cursor-pointer" />
            <FaGithub className="text-2xl cursor-pointer" />
          </div>
        </div>
  
        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">COMPANY</h3>
          <ul className="text-gray-600 space-y-2">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>
  
        {/* Help Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">HELP</h3>
          <ul className="text-gray-600 space-y-2">
            <li>
              <a href="#">Customer Support</a>
            </li>
            <li>
              <a href="#">Delivery Details</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
  
        {/* FAQ Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">FAQ</h3>
          <ul className="text-gray-600 space-y-2">
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Manage Deliveries</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Payments</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  
    {/* Bottom Section */}
    <div className="bg-gray-200 py-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-6">
        <p className="text-sm text-gray-600 text-center md:text-left">
          Shop.co &copy; 2000-2023, All Rights Reserved
        </p>
        <div className="flex space-x-4">
          <Image
            src="/images/visa.webp"
            alt="Visa"
            width={50}
            height={50}
            className="w-10 h-10"
          />
          <Image
            src="/images/paypal.png"
            alt="PayPal"
            width={50}
            height={50}
            className="w-10 h-10"
          />
          <Image
            src="/images/applepay.jpeg"
            alt="Apple Pay"
            width={50}
            height={50}
            className="w-10 h-10"
          />
          <Image
            src="/images/gpay.png"
            alt="Google Pay"
            width={50}
            height={50}
            className="w-10 h-10"
          />
        </div>
      </div>
    </div>
  </footer>
  )}
  export default Footer
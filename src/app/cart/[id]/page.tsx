import Image from 'next/image';
import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiTag } from "react-icons/fi";

const Cart = () => {
  const product = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      image: "/images/casual1.png",
      price: "$145",  
      size: 'Size Large',
      color: 'Color White',
    },
    {
      id: 2,
      name: "Checkered Shirt",
      image: "/images/arrival3.png",
      price: "$180",
      size: 'Size Medium',
      color: 'Color Red',
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      image: "/images/arrival2.png",
      price: "$240",
      size: 'Size Large',
      color: 'Color Blue',
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Cart Page */}
      <main className="container mx-auto py-10 pl-14">
        <div className="flex gap-3 p- ml-8 ">
          <h1 className="font-semibold text-gray-500">Home</h1>
          <h1 className="font-semibold text-gray-900">Cart</h1>
        </div>

        <h2 className="font-extrabold text-4xl mb-6 ml-8">YOUR CART</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          {/* Cart Items */}
          <div className="col-span-2 space-y-6 bg-white shadow p-4 rounded-2xl border w-[715px]">
            {product.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-4 border-b last:border-b-0"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={100}
                    width={100}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <h1>{item.size}</h1>
                    <h1>{item.color}</h1>
                    <p className="text-lg font-semibold">{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="bg-gray-200 p-4 py-3 px-14 text-lg rounded-full">- + 1</button>
                  <button className="text-red-500 pb-28">
                    <RiDeleteBin6Line className='' />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow p-6 border rounded-2xl w-[350px] h-auto mr-8">

            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="text-gray-900">$665</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Discount (-20%)</span>
                <span className="text-red-600">-$113</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Delivery Fee</span>
                <span className="text-gray-900">$15</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span className="text-gray-500">Total</span>
                <span className="text-gray-900">$467</span>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-2">
              {/* Promo Code Input with Icon */}
              <div className="flex items-center w-full">
                <FiTag className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="w-full p-2 border rounded mb-2"
                />
              </div>
              {/* Apply Button */}
              <button className="w-full bg-black text-white py-2 rounded-full mt-2">Apply</button>
            </div>
            <button className="w-full bg-black text-white py-2 rounded-full mt-4">Go to Checkout</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;

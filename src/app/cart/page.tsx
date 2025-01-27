"use client";

import React from "react";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store"; // Ensure RootState is correctly imported
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice"; // Ensure your actions are correctly imported

interface CartItem {
  slug: string;
  name: string;
  image: string;
  price: string | number;
  size: string;
  color: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Handle item removal from cart
  const handleRemove = (slug: string) => {
    dispatch(removeFromCart(slug));
  };

  // Handle item quantity increment
  const handleAdd = (slug: string) => {
    dispatch(incrementQuantity(slug));
  };

  // Handle item quantity decrement
  const handleDecrement = (slug: string) => {
    dispatch(decrementQuantity(slug));
  };

  // Calculate the total price for the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice =
        typeof item.price === "string"
          ? parseFloat(item.price.replace("$", "")) // Convert string to number
          : item.price;
      return total + itemPrice * item.quantity;
    }, 0);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto py-10 px-4 lg:px-14">
        <div className="flex gap-3 items-center mb-4">
          <h1 className="font-semibold text-gray-500">Home</h1>
          <span className="text-gray-500">/</span>
          <h1 className="font-semibold text-gray-900">Cart</h1>
        </div>

        <h2 className="font-extrabold text-3xl sm:text-4xl mb-6">YOUR CART</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6 bg-white shadow p-4 rounded-xl border">
            {cartItems.length > 0 ? (
              cartItems.map((item: CartItem) => (
                <div
                  key={item.slug}
                  className="flex flex-col sm:flex-row justify-between items-center py-4 border-b last:border-b-0"
                >
                  <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        height={100}
                        width={100}
                        className="w-20 h-20 object-cover rounded"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-gray-300 rounded flex items-center justify-center">
                        No Image
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <h1 className="text-sm text-gray-600">{item.size}</h1>
                      <h1 className="text-sm text-gray-600">{item.color}</h1>
                      <p className="text-lg font-semibold mt-1">
                        ${typeof item.price === "string"
                          ? parseFloat(item.price.replace("$", ""))
                          : item.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      className="bg-gray-200 px-6 py-2 text-sm rounded-full"
                      onClick={() => handleAdd(item.slug)}
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="bg-gray-200 px-6 py-2 text-sm rounded-full"
                      onClick={() => handleDecrement(item.slug)}
                    >
                      -
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => handleRemove(item.slug)}
                    >
                      <RiDeleteBin6Line className="text-xl" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>

          <div className="bg-white shadow p-6 border rounded-xl">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="text-gray-900">${calculateTotal()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Discount (-20%)</span>
                <span className="text-red-600">
                  -${(calculateTotal() * 0.2).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Delivery Fee</span>
                <span className="text-gray-900">$15</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span className="text-gray-500">Total</span>
                <span className="text-gray-900">
                  ${(calculateTotal() * 0.8 + 15).toFixed(2)}
                </span>
              </div>
            </div>
            <div className="mt-4 flex flex-col space-y-2">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="w-full p-2 border rounded"
                />
              </div>
              <button className="w-full bg-black text-white py-2 rounded-full">
                Apply
              </button>
            </div>
            <button className="w-full bg-black text-white py-2 rounded-full mt-4">
              Go to Checkout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;

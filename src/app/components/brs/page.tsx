import React from 'react';
import Image from 'next/image';

const BrowseByProduct = () => {
  return (
    <div className="bg-gray-100 text-gray-900 pt-16 max-w-screen-xl mx-auto h-auto rounded-[40px] p-6 sm:p-9">
      <div className="text-2xl sm:text-4xl font-bold text-center mb-6">
        <h1>BROWSE BY DRESS STYLE</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Casual */}
        <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg w-full">
          <div className="relative w-full h-48">
            <Image
              src="/images/casual.png"
              alt="Casual"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h2 className="mt-4 text-gray-900 font-bold text-lg sm:text-2xl">Casual</h2>
        </div>
        {/* Formal */}
        <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg w-full">
          <div className="relative w-full h-48">
            <Image
              src="/images/formal.png"
              alt="Formal"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h2 className="mt-4 text-gray-900 font-bold text-lg sm:text-2xl">Formal</h2>
        </div>
        {/* Party */}
        <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg w-full">
          <div className="relative w-full h-48">
            <Image
              src="/images/party.png"
              alt="Party"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h2 className="mt-4 text-gray-900 font-bold text-lg sm:text-2xl">Party</h2>
        </div>
        {/* Gym */}
        <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg w-full">
          <div className="relative w-full h-48">
            <Image
              src="/images/gym.png"
              alt="Gym"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h2 className="mt-4 text-gray-900 font-bold text-lg sm:text-2xl">Gym</h2>
        </div>
      </div>
    </div>
  );
};

export default BrowseByProduct;

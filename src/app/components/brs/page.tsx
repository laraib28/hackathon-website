import React from 'react';
import Image from 'next/image';

const BrowseByProduct = () => {
  return (
    <div className="bg-gray-100 text-gray-900 pt-16 w-[900px] h-auto rounded-[40px] mx-auto p-9">
      <div className="text-4xl font-bold text-center mb-6">
        <h1>BROWSE BY DRESS STYLE</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 p-5">
        {/* Casual */}
        <div className="relative flex flex-col items-center p-4 bg-white shadow-md rounded-lg w-[60%]">
          <div className="w-full h-48">
            <Image
              src="/images/casual.png"
              alt="Casual"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h2 className="mt-4 text-gray-900 font-bold text-2xl">Casual</h2>
        </div>
        {/* Formal */}
        <div className="relative flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
          <div className="relative w-full h-48">
            <Image
              src="/images/formal.png"
              alt="Formal"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h2 className="mt-4 text-gray-900 font-bold text-2xl">Formal</h2>
        </div>
        {/* Party */}
        <div className="relative flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
          <div className="relative w-full h-48">
            <Image
              src="/images/party.png"
              alt="Party"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h2 className="mt-4 text-gray-900 font-bold text-2xl">Party</h2>
        </div>
        {/* Gym */}
        <div className="relative flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
          <div className="relative w-full h-48">
            <Image
              src="/images/gym.png"
              alt="Gym"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h2 className="mt-4 text-gray-900 font-bold text-2xl">Gym</h2>
        </div>
      </div>
    </div>
  );
};

export default BrowseByProduct;

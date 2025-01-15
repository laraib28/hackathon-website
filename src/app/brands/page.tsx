import React from 'react';
import Image from 'next/image';

const brands = () => {
  return (
    <div className="bg-gray-100 text-gray-900 pt-16 w-[90%] max-w-[1100px] mt-14 mx-auto h-auto rounded-[40px] p-6 sm:p-9">
      
      {/* Heading */}
      <div className="text-center text-gray-950 text-3xl font-extrabold mb-8">
        <h1>BROWSE BY DRESS STYLE</h1>
      </div>
      
      {/* Grid Section */}
      <div className="grid gap-x-2 gap-y-6 items-center 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-[307px_1fr]">
        
        {/* Casual */}
        <div className="relative w-[407] h-[269px] border rounded-3xl overflow-hidden">
          <h1 className="absolute top-4 left-4 text-black text-lg font-bold z-10">Casual</h1>
          <Image 
            src="/images/casual.png" 
            alt="casual" 
            layout="fill" 
            objectFit="cover" 
          />
        </div>

        {/* Formal */}
        <div className="relative w-[684] h-[269px] border rounded-3xl overflow-hidden">
          <h1 className="absolute top-4 left-4 text-black text-lg font-bold z-10">Formal</h1>
          <Image 
            src="/images/formal.png" 
            alt="formal" 
            layout="fill" 
            objectFit="cover" 
          />
        </div>

        {/* Party */}
        <div className="relative w-[684] h-[269px] border rounded-3xl overflow-hidden">
          <h1 className="absolute top-4 left-4 text-black text-lg font-bold z-10">Party</h1>
          <Image 
            src="/images/party.png" 
            alt="party" 
            layout="fill" 
            objectFit="cover" 
          />
        </div>

        {/* Gym */}
        <div className="relative w-[407] h-[269px] border rounded-3xl overflow-hidden">
          <h1 className="absolute top-4 left-4 text-black text-lg font-bold z-10">Gym</h1>
          <Image 
            src="/images/gym.png" 
            alt="gym" 
            layout="fill" 
            objectFit="cover" 
          />
        </div>
      </div>
    </div>
  );
};
     
export default brands;

import React from 'react';
import Image from 'next/image';

const BrowseByProduct = () => {
 
    const products = [
        { id: 1, name: 'Casual', image: '/images/casual.png', width: '40%' },
        { id: 2, name: 'Formal', image: '/images/formal.png', width: '45%' },
        { id: 3, name: 'Party', image: '/images/party.png', width: '50%' },
        { id: 4, name: 'Gym', image: '/images/gym.png', width: '35%' },
  ];

  return (
    <div className='bg-gray-100 text-gray-900 pt-8 w-[900px] h-[700px] rounded-[40px] mx-auto p-9 '>
      <div className='text-4xl font-bold text-center mb-6'>
        <h1>BROWSE BY DRESS STYLE</h1>
      </div>
      <div className='grid grid-cols-2 gap-3 p-5'>
        <div className='flex flex-col items-center p-4 rounded-lg w-[60%] pl-8'>
          <h2 className=' mb-2'>{products[0].name}</h2>
          <div className='relative w-full h-48 mb-2'>
            <Image
              src={products[0].image}
              alt={products[0].name}
              layout='fill'
            
              className='rounded-lg'
            />
          </div>
        </div>
        <div className='flex flex-col  p-4 rounded-lg w-[100%]'>
          <h2 className=' mb-2'>{products[1].name}</h2>
          <div className='relative w-full h-48 mb-2'>
            <Image
              src={products[1].image}
              alt={products[1].name}
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
            />
          </div>
        </div>
        <div className='flex flex-col items-center p-4 rounded-lg w-full'>
          <h2 className=' mb-2'>{products[2].name}</h2>
          <div className='relative w-full h-48 mb-2'>
            <Image
              src={products[2].image}
              alt={products[2].name}
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
            />
          </div>
        </div>
        <div className='flex flex-col items-center p-4 rounded-lg w-[70%]'>
          <h2 className=' mb-2'>{products[3].name}</h2>
          <div className='relative w-full h-48 mb-2'>
            <Image
              src={products[3].image}
              alt={products[3].name}
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByProduct;

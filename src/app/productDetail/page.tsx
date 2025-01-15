import React from 'react'
import Image from 'next/image'
import { FaStarHalf } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";

const productDetail = () => {
  const products = [
    {
        id: 1,
        name: 'Polo with Contret Trims',
        image: '/images/pd1.png',
        rating: 4.5,
        price: '$120',
        discountprice:'$242'
    },
    {
        id: 2,
        name: 'Gradient Graphic T-shirt',
        image: '/images/casual1.png',
        rating: 3.5,
        price: '$145',
        
    },
    {
        id: 3,
        name: 'Polo with Tipping Details',
        image: '/images/casual3.png',
        rating: 4.5,
        price: '$180'
    },
    {
        id: 4,
        name: 'Black Stripped T-shirt',
        image: '/images/pd4.png',
        rating: 4.5,
        price: '$120',
        discountprice: '$150'
    },
  ]
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <>
            {'★'.repeat(fullStars)}
            {halfStar && '☆'}
            {'☆'.repeat(emptyStars)}
        </>
    );
};
  return (
    <div className='max-w-[1440]'>
      <div className='text-gray-700 font-semibold'>
        <ul className='flex gap-4 p-8'>
            <li>Home</li>
            <li>Shop</li>
            <li>Men</li>
            <li>T-shirt</li>
        </ul>
      </div>
     
      <div className='flex justify-between'>
         {/* right side */}
        <div className='gap-4 p-4 ml-4 '>
            <Image src="/images/pds1.png"
            alt='product'
            height={150}
            width={150} className='mb-4 border rounded-3xl'/>

            <Image src="/images/pds2.png"
            alt='product'
            height={150}
            width={150} className='border rounded-3xl'/>

            <Image src="/images/pds3.png"
            alt='product'
            height={150}
            width={150} className='mt-4 border rounded-3xl' />
        </div>
        {/* center side */}
            <div>
                <Image src="/images/pdmain.png"
                alt='product'
                width={444}
                height={530}
                className='border rounded-3xl'
                />
        </div>
{/* left ide */}
<div>
   
<h1 className='text-gray-900 font-extrabold text-3xl '>ONE LIFE GRAPHIC T-SHIRT</h1>
<div className='flex font-semibold text-gray-600 gap-2 '>
<FaStar  className='text-yellow-300 text-xl' />
<FaStar className='text-yellow-300 text-xl' />
<FaStar  className='text-yellow-300 text-xl'/>
<FaStar className='text-yellow-300 text-xl' />
<FaStarHalf className='text-yellow-300 text-xl'/>
<h1 >4.5/ <span className='text-gray-400'> 5</span></h1>
</div>
<div className="flex items-center space-x-2">
  <span className="text-3xl font-bold text-black">$260</span>
  <span className="text-xl line-through text-gray-500">$300</span>
  <span className="text-sm text-red-600 bg-red-100 px-2 py-1 rounded-lg">-40%</span>
</div>
<h1>This graphic t-shirt which is perfect for any occasion. Crafted a soft and</h1>
<h1>breathable fabric. it offers superior comfort and style.</h1>

<div>
  <h1 className='text-gray-500'>Select Color</h1>
</div>
<div className=' flex gap-3'>
<Image src="/images/circle1.png" alt='circle' width={30} height={20}/>
<Image src="/images/circle2.png" alt='circle' width={30} height={20}/>
<Image src="/images/cricle3.png" alt='circle' width={30} height={20}/>
</div>
<div>
  <h1>Choose Sizes</h1>
  <div className='flex gap-3'>
    <button className='bg-gray-200 rounded-full w-20 h-7 text-gray-500 hover:cursor-pointer hover:bg-black'>Small</button>
    <button className='bg-gray-200 rounded-full w-20 h-7 text-gray-500 hover:cursor-pointer hover:bg-black'>Medium</button>
    <button className='bg-gray-200 rounded-full w-20 h-7 text-gray-500 hover:cursor-pointer hover:bg-black'>Large</button>
    <button className='bg-gray-200 rounded-full w-20 h-7 text-gray-500 hover:cursor-pointer hover:bg-black'>X-Large</button>
  </div>
  <div className='flex gap-3 pt-5'>
  <button className='bg-gray-200 rounded-full w-28 h-9 text-gray-500 mt-3'>- 1 +</button>
  <button className=' rounded-full w-60 h-8 bg-black mt-3 text-white'>Add to cart</button>
  </div>
</div>
</div>
{/* end */}
   </div>
   <div className='flex justify-between p-10  text-gray-400   font-semibold'>
    <h1 className='pl-7 hover:text-gray-800'>Product Details</h1>
    <h1 className='hover:text-gray-800'>Rating & Reviews</h1>
    <h1 className='pr-20 hover:text-gray-800'>FAQs</h1>
   </div>
   <div>
    <div className='flex justify-between p-5 px-14'>
    <h1 className='font-semibold text-xl'>All Reviews  (45)</h1>
    
    <div className='flex justify-between gap-3'>
    <Image src='/images/latest.png' alt='latest' width={20} height={20} className='bg-gray-200 '/>
    <button className='bg-gray-200 rounded-full w-28 h-9 text-gray-500 mt-3'>Latest v</button>
    <button className=' rounded-full w-40 h-10 bg-black mt-3 text-white'>Write a Review</button>
    </div>
    </div>
   </div>
   <div className='p-8 grid grid-cols-2 gap-3'>
      <Image src='/images/r1.png' alt='rewie' height={500} width={500} className='w-[500]'/>
      <Image src='/images/r2.png' alt='rewie' height={500} width={500} className='w-[500]'/>
      <Image src='/images/r3.png' alt='rewie' height={500} width={500} className='w-[500]'/>
      <Image src='/images/r4.png' alt='rewie' height={500} width={500} className='w-[500]'/>
      <Image src='/images/r5.png' alt='rewie' height={500} width={500} className='w-[500]'/>
      <Image src='/images/r6.png' alt='rewie' height={500} width={500} className='w-[500]'/>

    </div>
    <div className='text-right mr-7'>
    <button className='border rounded-full w-44 h-9  mt-3'>Load More Reviews</button>
    </div>
    <div className='text-3xl text-gray-900 text-center font-bold'>YOU MIGHT ALSO LIKE</div>
    <div>
      <div>
        <div className="px-10 lg:px-20"> {/* Increased horizontal padding */}
                    <div className="text-center font-extrabold text-4xl pt-10 pb-10">
                        <h1>NEW ARRIVAL</h1>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {products.map((product) => (
                            <div key={product.id} className="text-center">
                                <Image 
                                    src={product.image}
                                    alt={product.name}
                                    width={220} 
                                    height={220} 
                                    className="rounded-2xl"
                                />
                                <h3 className="font-semibold text-lg mt-2 hover:cursor-pointer">{product.name}</h3>
                                <p className="text-yellow-500 text-sm mt-1">{renderStars(product.rating)}</p> {/* Added Stars */}
                                <div className="flex items-center justify-center space-x-2 mt-2">
                                    <p className="text-red-600 font-bold text-lg">{product.price}</p>
                                    {product.discountprice && (
                                        <p className="text-gray-400 text-sm line-through">
                                            {product.discountprice}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
      </div>
    </div>
   </div>
   
  )
}

export default productDetail

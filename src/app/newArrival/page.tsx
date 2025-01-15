import Image from 'next/image';
import React from 'react';
const newArrival = () => {
    const products = [
        {
            id: 1,
            name: 'T-shirt with Tape Details',
            image: '/images/arrival1.png',
            rating: 4.5,
            price: '$120'
        },
        {
            id: 2,
            name: 'Skinny Fit Jeans',
            image: '/images/arrival2.png',
            rating: 3.5,
            price: '$260',
            discountprice: '$240'
        },
        {
            id: 3,
            name: 'Checkered Shirt',
            image: '/images/arrival3.png',
            rating: 4.5,
            price: '$180'
        },
        {
            id: 4,
            name: 'Sleeve Striped T-shirt',
            image: '/images/arrival4.png',
            rating: 4.5,
            price: '$160',
            discountprice: '$130'
        }
    ];

    // Helper function to render stars based on rating
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
            <div className="text-center pt-4">
                <button
                    className="text-gray-900 hover:text-white font-semibold border rounded-full px-20 py-2"
                >
                    View All      
                </button>
            </div>
        </div>
    );
};

export default newArrival;

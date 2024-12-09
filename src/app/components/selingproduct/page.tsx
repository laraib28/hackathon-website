import Image from 'next/image'
import React from 'react'

const SellingProduct = () => {
    const products = [
        {
            id: 1,
            name: 'Vertical Striped Shirt',
            image: '/images/selling1.png',
            rating: 5.0/5, 
            discountprice: '$232',
            price:'$212',
            
        },
        {
            id: 2,
            name: 'Courage Graphic T-shirt',
            image: '/images/selling2.png',
            rating: 4.0/5,
            price: '$145',
            
        },
        {
            id: 3,
            name: 'Loose Fit Bermuda Shorts',
            image: '/images/selling3.png',
            rating: 3.0/5,
            price: '$80'
        },
        {
            id: 4,
            name: 'Faded Skinny Jeans',
            image: '/images/selling4.png',
            rating: 4.5/5,
            price: '$210',
            discountprice: '$130'
        }
    ]
  
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
            <h1>TOP SELLING</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {products.map((product) => (
                <div key={product.id} className="text-center">
                    <Image 
                        src={product.image}
                        alt={product.name}
                        width={220} // Adjusted width
                        height={220} // Adjusted height
                        className="rounded-2xl"
                    />
                    <h3 className="font-semibold text-lg mt-2">{product.name}</h3>
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

export default SellingProduct;

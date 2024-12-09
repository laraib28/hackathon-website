import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const Category = () => {
  // Products Data
  const products = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      image: "/images/casual1.png",
      rating: 3.5,
      discountprice: "$220",
      price: "$260",
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      image: "/images/casual2.png",
      rating: 4.5,
      price: "$180",
    },
    {
      id: 3,
      name: "Black Striped T-shirt",
      image: "/images/casual3.png",
      rating: 5.0,
      price: "$150",
      discountprice: "$120",
    },
    {
      id: 4,
      name: "Skinny Fit Jeans",
      image: "/images/arrival2.png",
      rating: 3.5,
      discountprice: "$240",
      price: "$260",
    },
    {
      id: 5,
      name: "Checkered Shirt",
      image: "/images/arrival3.png",
      rating: 4.5,
      price: "$180",
    },
    {
      id: 6,
      name: "Sleeve Striped T-shirt",
      image: "/images/arrival4.png",
      rating: 4.5,
      price: "$160",
      discountprice: "$130",
    },
    {
      id: 7,
      name: "Vertical Striped Shirt",
      image: "/images/selling1.png",
      rating: 4.5,
      price: "$120",
    },
    {
      id: 8,
      name: "Courage Graphic T-shirt",
      image: "/images/selling2.png",
      rating: 4.0,
      price: "$145",
    },
   
  ];

  return (
    <div className="min-h-screen">
      <main className="max-w-screen-xl mx-auto py-6 grid grid-cols-12 gap-4">
       {/* Sidebar Filters */}
       <aside className="col-span-12 sm:col-span-3 border bg-white rounded-3xl shadow-sm p-3 mt-4 h-[870px]">
          <h2 className="font-bold mb-3 text-gray-700">Filters</h2>
  <div className="mb-4">
    <h3 className="font-semibold mb-1 text-gray-500">Category</h3>
    <ul className="space-y-1 text-gray-400 text-sm">
      <li>Shirts</li>
      <li>T-Shirts</li>
      <li>Jeans</li>
      <li>Pants</li>
      <li>Dresses</li>
    </ul>
  </div>
  <div className="mb-4">
    <h3 className="font-semibold mb-1 text-gray-500">Price</h3>
    <input type="range" min="0" max="500" className="w-full" />
  </div>
  <div className="mb-4">
    <h3 className="font-semibold mb-1 text-gray-500">Colors</h3>
    <div className="grid grid-cols-5 gap-1">
      <span className="block w-5 h-5 bg-green-500 rounded-full"></span>
      <span className="block w-5 h-5 bg-red-500 rounded-full"></span>
      <span className="block w-5 h-5 bg-yellow-500 rounded-full"></span>
      <span className="block w-5 h-5 bg-orange-500 rounded-full"></span>
      <span className="block w-5 h-5 bg-blue-300 rounded-full"></span>
      <span className="block w-5 h-5 bg-blue-600 rounded-full"></span>
      <span className="block w-5 h-5 bg-purple-500 rounded-full"></span>
      <span className="block w-5 h-5 bg-white rounded-full border"></span>
      <span className="block w-5 h-5 bg-black rounded-full"></span>
    </div>
  </div>
  <div className="mb-4">
    <h3 className="font-semibold mb-1 text-gray-500">Size</h3>
    <div className="grid grid-cols-2 gap-1 text-gray-400 text-sm">
      <button className="border px-1 py-1 bg-gray-100 rounded-full">
        XXS
      </button>
      <button className="border px-1 py-1 bg-gray-100 rounded-full">
        XS
      </button>
      <button className="border px-1 py-1 bg-gray-100 rounded-full">
        S
      </button>
      <button className="border px-1 py-1 bg-gray-100 rounded-full">
        M
      </button>
      <button className="border px-1 py-1 bg-black text-white rounded-full">
        L
      </button>
      <button className="border px-1 py-1 bg-gray-100 rounded-full">
        XL
      </button>
      <button className="border px-1 py-1 bg-gray-100 rounded-full">
        XXL
      </button>
      <button className="border px-1 py-1 bg-gray-100 rounded-full">
        3XL
      </button>
    </div>
  </div>
  <div className="mb-4">
    <h3 className="font-semibold mb-1 text-gray-500">Dress Style</h3>
    <ul className="space-y-1 text-gray-400 text-sm">
      <li>Casual</li>
      <li>Formal</li>
      <li>Party</li>
      <li>Gym</li>
    </ul>
  </div>
  <div className="text-center">
    <button className="bg-black text-white px-8 py-2 rounded-full">
      Apply Filter
    </button>
  </div>
</aside>

        {/* Products Grid */}
        <section className="col-span-12 sm:col-span-9">
          <h2 className="text-2xl font-bold mb-4">Casual</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl shadow-sm p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-3xl mb-4"
                />
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.round(product.rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <p className="font-bold">
                  {product.discountprice ? (
                    <>
                      <span className="line-through text-gray-500 mr-2">
                        {product.price}
                      </span>
                      <span>{product.discountprice}</span>
                    </>
                  ) : (
                    product.price
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
            <button className="border px-4 py-2 rounded-lg mb-4 sm:mb-0">
              Previous
            </button>
            <div className="flex gap-3 items-center mb-4 sm:mb-0">
              <button className="border px-3 py-1 rounded-lg">1</button>
              <button className="border px-3 py-1 rounded-lg">2</button>
              <button className="border px-3 py-1 rounded-lg">3</button>
              <button className="border px-3 py-1 rounded-lg">...</button>
              <button className="border px-3 py-1 rounded-lg">8</button>
              <button className="border px-3 py-1 rounded-lg">9</button>
              <button className="border px-3 py-1 rounded-lg">10</button>
            </div>
            <button className="border px-4 py-2 rounded-lg mb-4 sm:mb-0">
              Next
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Category;
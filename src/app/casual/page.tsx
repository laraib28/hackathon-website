import React from "react";
import Link from "next/link";
import Image from "next/image";

const Casual = () => {
  const category = [
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
      name: "T-shirt with Tape Details",
      image: "/images/arrival1.png",
      rating: 4.5,
      price: "$120",
      slug: "t-shirt-with-tape-details",
    },
    {
      id: 5,
      name: "Skinny Fit Jeans",
      image: "/images/arrival2.png",
      rating: 3.5,
      price: "$260",
      discountprice: "$240",
      slug: "skinny-fit-jeans",
    },
    {
      id: 6,
      name: "Checkered Shirt",
      image: "/images/arrival3.png",
      rating: 4.5,
      price: "$180",
      slug: "checkered-shirt",
    },
    {
      id: 7,
      name: "Vertical Striped Shirt",
      image: "/images/selling1.png",
      rating: 5.0,
      discountPercent: 20,
      price: 232,
      slug: "vertical-striped-shirt",
    },
    {
      id: 8,
      name: "Courage Graphic T-shirt",
      image: "/images/selling2.png",
      rating: 4.0,
      price: 145,
      slug: "courage-graphic-t-shirt",
    },
    {
      id: 9,
      name: "Loose Fit Bermuda Shorts",
      image: "/images/selling3.png",
      rating: 3.0,
      price: 80,
      slug: "loose-fit-bermuda-shorts",
    },
  ];

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {"★".repeat(fullStars)}
        {halfStars ? "☆" : ""}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="bg-white min-h-screen p-4">
      {/* Filters Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        <aside className="w-full lg:w-1/4 bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Categories</h3>
            <ul className="space-y-1">
              {["T-Shirts", "Shirts", "Hoodies", "Jeans"].map((category) => (
                <li key={category} className="text-gray-700 cursor-pointer hover:text-black">
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Price</h3>
            <div className="flex justify-between items-center">
              <span>$60</span>
              <span>$200</span>
            </div>
            <input
              type="range"
              className="w-full mt-2"
              min="60"
              max="200"
            />
          </div>

          {/* Colors */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Colors</h3>
            <div className="flex flex-wrap gap-2">
              {["red", "blue", "green", "yellow", "black", "white"].map((color) => (
                <div
                  key={color}
                  className="w-6 h-6 rounded-full border cursor-pointer"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Dress Style */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Dress Style</h3>
            <ul className="space-y-1">
              {["Casual", "Formal", "Party", "Gym"].map((style) => (
                <li key={style} className="text-gray-700 cursor-pointer hover:text-black">
                  {style}
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full py-2 bg-black text-white rounded-md mt-4">
            Apply Filter
          </button>
        </aside>

        {/* Products Section */}
        <main className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Casual</h2>
            <span className="text-gray-500">Showing 1-10 of 100 Products</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {category.map((product) => (
              <Link key={product.id} href={`/newArrivalS/${product.slug || "#"}`}>
                <div className="text-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={220}
                    height={220}
                    className="rounded-2xl"
                  />
                  <h3 className="font-semibold text-lg mt-2 hover:cursor-pointer">
                    {product.name}
                  </h3>
                  <p className="text-yellow-500 text-sm mt-1">
                    {renderStars(product.rating)}
                  </p>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <p className="text-red-600 font-bold text-lg">{product.price}</p>
                    {product.discountprice && (
                      <p className="text-gray-400 text-sm line-through">
                        {product.discountprice}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-8">
            <button className="py-1 px-3 border rounded-md">Previous</button>
            <div className="space-x-2">
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className="py-1 px-3 border rounded-md text-gray-700 hover:bg-gray-200"
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="py-1 px-3 border rounded-md">Next</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Casual;

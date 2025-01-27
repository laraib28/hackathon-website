"use client"; // Marking as a client-side component
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { UseDispatch } from "react-redux";

interface Params {
  params: { slug: string };
}

export interface OnSales {
  name: string;
  slug: {
    current: string;
  };
  price: number;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
  category: string;
  discountPercent?: number;
  rating?: number;
  colors?: string[];
  sizes?: string[];
  tags: string[];
}

const SlugPage = ({ params }: Params) => {
  const { slug } = params;

  const [product, setProduct] = useState<OnSales | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await client.fetch(
        `*[_type == "products" && slug.current == $slug][0] {
          name,
          "slug":slug.current,
          price,
          description,
          image {
            asset -> {
              url
            }
          },
          category,
          discountPercent,
          rating,
          colors,
          sizes,
          tags
        }`,
        { slug }
      );
      setProduct(data);
      setPrice(data.price); // Initialize the price with the base price
    };

    fetchProduct();
  }, [slug]);

  const handleAddToCart = () => {
    toast.success(`Your product "${product?.name}" has been added to the cart!`, {
      position: "top-center",
    });
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Toast Container */}
     

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Product Image */}
        <div className="lg:w-1/2">
          <Image
            src={product.image.asset.url}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <p className="text-red-600 font-bold text-2xl mb-2">${price}</p>
          {product.discountPercent && (
            <p className="text-gray-500 text-sm line-through mb-4">
              ${(product.price * (100 + product.discountPercent)) / 100}
            </p>
          )}

          {/* Size Selector */}
          {product.sizes && (
            <div className="mb-6">
              <h3 className="font-medium text-lg mb-2">Select Size:</h3>
              <div className="flex gap-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-6 py-2 border rounded-md text-lg ${
                      selectedSize === size
                        ? "bg-blue-500 text-white"
                        : "bg-white text-blue-500 border-blue-500"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selector */}
          {product.colors && (
            <div className="mb-6">
              <h3 className="font-medium text-lg mb-2">Select Color:</h3>
              <div className="flex gap-4">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-12 h-12 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="mb-6">
            <h3 className="font-medium text-lg mb-2">Quantity:</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 border rounded-md text-blue-500 hover:bg-gray-100"
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 border rounded-md text-blue-500 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize || !selectedColor}
            className={`w-full py-3 text-white font-bold text-lg rounded-md ${
              selectedSize && selectedColor
                ? "bg-blue-500 hover:bg-black"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Add to Cart
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default SlugPage;

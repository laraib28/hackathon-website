"use client"; // Ensures compatibility with useState and useEffect

import React, { useEffect, useState } from "react";
import  NewArrival from "../newArrival/page";
import { OnSales } from "../onSale/page";
import { productDetail } from "../productDetail/page";
import Image from "next/image";
import Link from "next/link";

const ViewAll = () => {
//   const [newArrivals, setNewArrivals] = useState<NewArrival[] | null>(null);
//   const [onSales, setOnSales] = useState<OnSales[] | null>(null);
//   const [productDetails, setProductDetails] = useState<productDetail[] | null>(null);

  useEffect(() => {
    // Fetch data for New Arrivals
    const fetchNewArrivals = async () => {
      const response = await fetch("/api/newArrivals");
      const data = await response.json();
      setNewArrivals(data);
    };

    // Fetch data for On Sale products
    <NewArrival/>
    const fetchOnSales = async () => {
      const response = await fetch("/api/onSales");
      const data = await response.json();
      setOnSales(data);
    };

    // Fetch data for Product Details
    const fetchProductDetails = async () => {
      const response = await fetch("/api/productDetails");
      const data = await response.json();
      setProductDetails(data);
    };

    fetchNewArrivals();
    fetchOnSales();
    fetchProductDetails();
  }, []);

  const renderProduct = (product: NewArrival | OnSales | productDetail) => {
    const imageUrl = product.image?.asset?.url || "/placeholder.png"; // Fallback image
    const price = product.price || 0; // Fallback to 0 if price is not found

    return (
      <div key={product.slug} className="text-center border p-4">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={imageUrl}
            alt={product.name || "Product Image"}
            width={220}
            height={220}
            className="rounded-xl"
          />
          <h3 className="font-semibold text-lg mt-2">{product.name}</h3>
          <p className="text-yellow-500 text-sm mt-1">★★★★★</p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <p className="text-red-600 font-bold text-lg">${price.toFixed(2)}</p>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div className="px-10 lg:px-20">
      <div className="text-center font-extrabold text-4xl pt-10 pb-10">
        <h1>View All Products</h1>
      </div>

      <div className="text-center mb-10">
        <h2 className="font-bold text-2xl mb-4">New Arrivals</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {newArrivals?.map(renderProduct)}
        </div>
      </div>

      <div className="text-center mb-10">
        <h2 className="font-bold text-2xl mb-4">On Sale</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {onSales?.map(renderProduct)}
        </div>
      </div>

      <div className="text-center mb-10">
        <h2 className="font-bold text-2xl mb-4">Product Details</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {productDetails?.map(renderProduct)}
        </div>
      </div>
    </div>
  );
};

export default ViewAll;

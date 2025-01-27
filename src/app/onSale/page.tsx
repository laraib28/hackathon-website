"use client";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Image from "next/image";

interface OnSale {
  name: string;
  slug: string;
  price: number;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
  category: string;
  discountPercent: number;
  rating: number;
  colors: string[];
  sizes: string[];
  tags: string[];
  quantity: number;
}

const OnSale: React.FC = () => {
  const [products, setProducts] = useState<OnSale[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: { color: string; size: string };
  }>({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: OnSale[] = await client.fetch(
          `*[_type == "products" && "OnSale" in tags] {
            name,
            "slug": slug.current,
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
            tags,
            quantity
          }`
        );
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product: OnSale) => {
    const options = selectedOptions[product.slug] || {};
    const color = options.color || product.colors?.[0] || "";
    const size = options.size || product.sizes?.[0] || "";

    if (product.colors?.length && !color) {
      toast.error("Please select a color before adding to the cart.");
      return;
    }

    if (product.sizes?.length && !size) {
      toast.error("Please select a size before adding to the cart.");
      return;
    }

    dispatch(
      addToCart({
        slug: product.slug,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image.asset.url,
        color: color,
        size: size,
      })
    );

    toast.success(`Added ${product.name} to cart`);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>, product: OnSale) => {
    const newColor = e.target.value;
    setSelectedOptions((prev) => ({
      ...prev,
      [product.slug]: { ...prev[product.slug], color: newColor },
    }));
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>, product: OnSale) => {
    const newSize = e.target.value;
    setSelectedOptions((prev) => ({
      ...prev,
      [product.slug]: { ...prev[product.slug], size: newSize },
    }));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {loading ? (
        <p>Loading products...</p>
      ) : (
        products?.map((product) => (
          <div key={product.slug} className="text-center p-4 border rounded-lg shadow-sm">
            <Link href={`/OnSaleS/${product.slug}`}>
              <Image
                src={product.image.asset.url}
                alt={product.name || "Product Image"}
                width={220}
                height={220}
                className="rounded-xl"
                onError={(e) => (e.currentTarget.src = "/placeholder.png")}
              />
              <h3 className="font-semibold text-lg mt-2 truncate">{product.name}</h3>
              <p className="text-yellow-500 text-sm mt-1">{renderStars(product.rating || 0)}</p>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <p className="text-red-600 font-bold text-lg">${product.price.toFixed(2)}</p>
                {product.discountPercent > 0 && (
                  <p className="text-gray-400 text-sm line-through">
                    ${((product.price * 100) / (100 - product.discountPercent)).toFixed(2)}
                  </p>
                )}
              </div>
            </Link>

            {product.colors?.length > 0 && (
              <select
                className="border rounded px-2 py-1 mt-2"
                value={selectedOptions[product.slug]?.color || ""}
                onChange={(e) => handleColorChange(e, product)}
              >
                <option value="">Select Color</option>
                {product.colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            )}

            {product.sizes?.length > 0 && (
              <select
                className="border rounded px-2 py-1 mt-2"
                value={selectedOptions[product.slug]?.size || ""}
                onChange={(e) => handleSizeChange(e, product)}
              >
                <option value="">Select Size</option>
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            )}

            <button
              onClick={() => handleAddToCart(product)}
              className="bg-green-500 text-white rounded-full py-2 px-4 mt-4 hover:bg-green-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default OnSale;

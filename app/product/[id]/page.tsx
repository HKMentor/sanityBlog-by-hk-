"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/component/CartContext";
import Navbar from "@/app/component/Nav"; // ✅ Import Navbar

const products = [
  { id: 1, image: "/images/product01.jpeg", name: "Coffee Soap", price: 600, desc: "Organic coffee soap for deep cleansing." },
  { id: 2, image: "/images/product2.jpeg", name: "HKEssential Hair Oil", price: 1500, desc: "100% natural hair oil for strong and shiny hair." },
  { id: 3, image: "/images/product3.jpeg", name: "Rice Soap", price: 500, desc: "Brightening rice soap for smooth skin." },
];

const ProductDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart(); // Access cart context
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p className="text-center text-xl mt-10">Product Not Found</p>;
  }

  return (
    <>
      <Navbar /> {/* ✅ Attach Navbar at the top */}

      <div className="container mx-auto py-16 px-6">
        <button onClick={() => router.back()} className="mb-4 text-blue-600">← Back</button>

        <div className="flex flex-col md:flex-row gap-10">
          <Image src={product.image} alt={product.name} width={400} height={400} className="rounded-lg shadow-lg" />
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-600">{product.desc}</p>
            <p className="text-2xl font-semibold text-green-600">Rs {product.price}</p>

            <div className="flex items-center space-x-4">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-3 py-1 bg-gray-300 rounded">-</button>
              <span className="text-xl">{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)} className="px-3 py-1 bg-gray-300 rounded">+</button>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, quantity, image: product.image })}
                className="px-6 py-2 bg-blue-600 text-white rounded"
              >
                Add to Cart
              </button>
<a href="https://www.instagram.com/hkessentials195/"><button className="px-6 py-2 bg-green-600 text-white rounded">Buy Now</button>
</a>            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

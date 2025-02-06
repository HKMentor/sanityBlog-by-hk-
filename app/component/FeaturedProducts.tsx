"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  desc: string;
}

const products: Product[] = [
  { id: 1, image: "/images/product01.jpeg", name: "Coffee Soap", price: 600, desc: "Organic coffee soap for deep cleansing." },
  { id: 2, image: "/images/product2.jpeg", name: "HKEssential Hair Oil", price: 1500, desc: "100% natural hair oil for strong and shiny hair." },
  { id: 3, image: "/images/product3.jpeg", name: "Rice Soap", price: 500, desc: "Brightening rice soap for smooth skin." },
];

const FeaturedProducts = () => {
  const router = useRouter();

  return (
    <section className="py-16 bg-yellow-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Featured Products
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer w-72 h-72"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5, ease: "easeInOut" }}
              onClick={() => router.push(`/product/${product.id}`)} // 🛒 Route to Detail Page
            >
              <Image
                src={product.image}
                alt={product.name}
                width={288}
                height={288}
                className="rounded-lg object-cover w-full h-full aspect-square"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out">
                <p className="text-white text-lg font-semibold">{product.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

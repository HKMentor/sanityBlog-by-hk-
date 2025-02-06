"use client";
import Image from "next/image";
import React, { useState } from "react";
import Header from "../component/Header";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: "Coffee Soap", price: 600, quantity: 1, image: "/images/product01.jpeg" },
  ]);

  const updateQuantity = (id: number, amount: number) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    ));
    
  };

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    
    <div className="container mx-auto py-12  px-14">
             <Header/>
     
      <h1 className="text-3xl font-bold mb-4 text-center sm:text-left mt-10">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg text-center">Your cart is empty</p>
      ) : (
        <>

          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row justify-between items-center sm:items-start border-b pb-4 mb-4">
              <div className="flex justify-center sm:justify-start sm:w-1/3">
                <Image src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" width={300} height={300} />
              </div>
              <div className="sm:w-1/3 sm:text-left text-center mt-4 sm:mt-0">
                <p className="text-lg">{item.name}</p>
              </div>
              <div className="flex items-center space-x-4 sm:w-1/3 justify-center sm:justify-start mt-4 sm:mt-0">
                <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 bg-gray-300 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 bg-gray-300 rounded">+</button>
              </div>
              <div className="sm:w-1/3 text-center sm:text-left mt-4 sm:mt-0">
                <p className="text-lg">Rs {item.price * item.quantity}</p>
              </div>
              <div className="sm:w-1/3 text-center sm:text-left mt-4 sm:mt-0">
                <button onClick={() => removeItem(item.id)} className="px-3 py-1 bg-red-600 text-white rounded">Remove</button>
              </div>
            </div>
          ))}
          <p className="text-xl font-semibold mt-4 text-center sm:text-left">Total: Rs {totalPrice}</p>
          
          {/* Buy Now Button */}
          <div className="mt-6 text-center">
            <a href="https://www.instagram.com/hkessentials195/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
              Buy Now on Instagram
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

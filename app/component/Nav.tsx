"use client";
import Link from "next/link";
import { useCart } from "../component/CartContext"; // Adjust path if needed
import { ShoppingCart } from "react-feather";

const Navbar = () => {
  const { totalQuantity } = useCart(); // Error happens here if not wrapped in CartProvider

  return (
    <nav className="bg-red-500 shadow-md p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">HK Essentials</Link>
      <div className="relative">
        <Link href="/cart">
          <ShoppingCart size={28} className="cursor-pointer" />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              {totalQuantity}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

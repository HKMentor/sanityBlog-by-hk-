import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <header className="text-gray-700 font-serif body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-b-4 border-cyan-800 ">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link href="/pages/blog" className="mr-5 hover:text-gray-900">Blog </Link>
      <Link  href="/pages/about"className="mr-5 hover:text-gray-900">About</Link>
      <Link href="/pages/contact" className="hover:text-gray-900">Contact</Link>
    </nav>
    <h1 className="flex order-first lg:order-none lg:w-1/5 title-font font-bold text-4xl items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
    Hooria<span className=" text-4xl text-red-600">Blogs</span>
    </h1>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button className="inline-flex items-center bg-blue-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-black mt-4 md:mt-0">
        Sign Up  
      </button>

      <button className="inline-flex items-center bg-yellow-300 ml-2 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-black mt-4 md:mt-0">
        Login
      
      </button>
      
    </div>
    
  </div>
</header>

  )
}

export default Header

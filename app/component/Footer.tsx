import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-gray-600 border-t-2 border-cyan-800">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image src="/images/hk.png" width={100} height={100} alt="logo" />
          HooriaBlog
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 hooria_codehub —
          <Link
            href="https://www.instagram.com/hkessentials195?igsh=MWtndzUwbDJ4MTFlag%3D%3D"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @instagram
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-3">
          <a href="https://www.facebook.com/profile.php?id=61553411646244&ref=ig_profile_ac" className="text-blue-400 hover:text-gray-700">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/hooria_codehub/" className="text-pink-600 hover:text-gray-700">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/hooria-fatima-54753927b/" className="text-blue-700 hover:text-gray-700">
            <FaLinkedinIn className="w-5 h-5" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

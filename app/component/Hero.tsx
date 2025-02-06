import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-14 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-bold text-3xl mb-4 text-gray-900">
              Capturing Moments, Creating Memories
            </h1>
            <p className="leading-relaxed text-lg text-gray-700">
              Explore the world through the lens. Discover breathtaking landscapes, stunning portraits, and creative photography techniques.
            </p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">5K+</h2>
            <p className="leading-relaxed">Happy Readers</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">3.2K</h2>
            <p className="leading-relaxed">Photography Tips</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">100+</h2>
            <p className="leading-relaxed">Photography Guides</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">10+</h2>
            <p className="leading-relaxed">Photography Categories</p>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <Image
            className="object-cover object-center w-full h-full"
            src="/images/photo.jpg"
            alt="Photography Showcase"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

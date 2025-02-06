// pages/about.tsx (or wherever you'd like your About Us page)

import Header from "@/app/component/Header";
import Image from "next/image";

const About = () => {
  return (
    <div>
    <Header/>

    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          About Us
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Were a passionate team dedicated to bringing you the best products and experiences.
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="max-w-3xl text-left">
          {/* Introduction Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Who We Are</h2>
            <p className="text-lg text-gray-600">
              We are a small but driven team of individuals with a shared vision to provide high-quality products 
              that make a difference in peoples lives. Our brand is built on trust, quality, and customer satisfaction.
            </p>
          </section>

          {/* Image Section */}
          <section className="mt-8 flex justify-center">
            <Image
              src="/images/hk.jpeg" // Replace with your image path
              alt="Team photo or your logo"
              width={300}
              height={300}
              className="rounded-full border-4 border-gray-200"
            />
          </section>

          {/* Mission Statement */}
          <section className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-lg text-gray-600">
              Our mission is to offer the finest quality products that enhance the everyday lives of our customers.
              Were committed to excellence and innovation, and we are always striving to improve and evolve.
            </p>
          </section>

          {/* Values Section */}
          <section className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Our Values</h2>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>Integrity: We believe in doing the right thing, even when no one is watching.</li>
              <li>Quality: Every product we offer is carefully selected and crafted for perfection.</li>
              <li>Customer-Centric: Our customers are at the heart of everything we do.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;

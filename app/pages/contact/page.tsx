// app/contact/page.tsx

import Header from "@/app/component/Header";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div>
                <Header/>

    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-cyan-800 mb-6">
          Get in Touch with Us
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          We would love to hear from you! Whether you have a question, suggestion, or just want to say hello, feel free to reach out.
        </p>
        
        {/* Contact Form */}
        <div className="flex justify-center">
          <form className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <div className="mb-6">
              <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 text-white font-bold text-lg rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Office</h2>
          <div className="flex justify-center space-x-10">
            <div className="flex flex-col items-center">
              <h3 className="text-xl text-gray-800 mb-2">Address</h3>
              <p className="text-lg text-gray-600">123, Some Street, City Name, Country</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl text-gray-800 mb-2">Phone</h3>
              <p className="text-lg text-gray-600">(123) 456-7890</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl text-gray-800 mb-2">Email</h3>
              <p className="text-lg text-gray-600">infohkmentor@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Image or Map */}
        <div className="mt-12">
          <Image
            src="/images/office.jpg"
            alt="Contact Us"
            width={500}
            height={500}
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
    </div>

  );
};

export default ContactPage;

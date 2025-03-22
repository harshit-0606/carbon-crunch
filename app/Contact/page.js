import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-3xl w-full bg-white shadow-2xl p-8 rounded-xl border border-gray-200">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
          Feel Free to <span className="text-green-600">Contact Us</span>
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Have any questions? Fill out the form below and we'll get back to you soon.
        </p>

        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="text-black border border-gray-300 p-4 rounded-md w-full focus:ring-2 focus:ring-green-400 outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="text-black border border-gray-300 p-4 rounded-md w-full focus:ring-2 focus:ring-green-400 outline-none"
          />
          <input
            type="text"
            placeholder="Address"
            className="text-black border border-gray-300 p-4 rounded-md w-full focus:ring-2 focus:ring-green-400 outline-none"
          />
          <textarea
            placeholder="Enter your query"
            rows="5"
            className="text-black border border-gray-300 p-4 rounded-md w-full focus:ring-2 focus:ring-green-400 outline-none"
          />
          <button className="bg-green-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";

const HeadingSection = () => {
  return (
    <div className="text-center mt-20 px-8">
      {/* Stylish Subtitle */}
      <p className="text-lg font-semibold text-gray-800 tracking-wider uppercase italic">
        <span className="bg-green-100 px-3 py-1 rounded-lg shadow-sm">
          Why <span className="text-green-600 font-extrabold">Carboncrunch</span>
        </span>
      </p>

      {/* Main Heading */}
      <h2 className="text-6xl font-extrabold text-gray-900 mt-5 leading-snug">
        Leading Sustainability with{" "}
        <span className="text-green-600">Carboncrunch</span>
      </h2>

<p className="text-xl text-gray-700 mt-3 max-w-3xl mx-auto font-medium">
        <span className="font-bold text-gray-900">Accounting is a framework used to measure and report greenhouse gas emissions.</span>
      </p>
    </div>
  );
};

export default HeadingSection;


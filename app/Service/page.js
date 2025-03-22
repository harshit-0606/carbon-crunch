"use client";

import React from "react";

function Service() {
  return (
    <section className="pt-24 pb-12 bg-gray-100 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">Our Services</h2>
        <p className="text-lg text-gray-700 mb-12">
          At Carbon Crunch, we are dedicated to helping businesses reduce their environmental impact
          through strategic and effective solutions. Our services are designed to optimize sustainability
          and promote eco-friendly practices.
        </p>

        <h3 className="text-3xl font-bold text-gray-800 mt-12">Sustainability Analysis</h3>
        <p className="text-lg text-gray-700 mb-8">
          We conduct detailed sustainability assessments to evaluate your business’s carbon footprint.
          Our team provides actionable insights to minimize emissions and implement greener practices.
        </p>

        <h3 className="text-3xl font-bold text-gray-800 mt-12">Energy Optimization</h3>
        <p className="text-lg text-gray-700 mb-8">
          We help businesses reduce energy consumption by implementing efficiency measures and transitioning
          to renewable energy sources. Our strategies ensure cost savings while promoting environmental responsibility.
        </p>

        <h3 className="text-3xl font-bold text-gray-800 mt-12">Carbon Offset Programs</h3>
        <p className="text-lg text-gray-700 mb-8">
          We offer certified carbon offset programs that help businesses achieve net-zero emissions.
          By investing in sustainable projects, you can compensate for unavoidable emissions and contribute
          to global sustainability efforts.
        </p>
        
      </div>
    </section>
  );
}

export default Service;
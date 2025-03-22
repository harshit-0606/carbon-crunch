import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="max-w-4xl bg-white shadow-lg p-8 rounded-xl border border-gray-200">
        <h2 className="text-4xl font-extrabold text-center text-gray-900">
          About <span className="text-green-600">Carbon Crunch</span>
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Driving Sustainability Through Technology
        </p>
        <div className="mt-6 text-gray-700 text-lg leading-relaxed">
          <p>
            Carbon Crunch is a cutting-edge sustainability platform that helps
            businesses track, manage, and reduce their carbon footprint. Our
            mission is to drive **environmental responsibility** by providing
            organizations with **data-driven insights** and **actionable solutions**.
          </p>

          <p className="mt-4">
            Using **GHG (Greenhouse Gas) Accounting**, we empower companies to
            comply with global regulations, optimize operational efficiency,
            and work towards achieving net-zero emissions.
          </p>

          <p className="mt-4">
            Join us in our mission to create a **sustainable future** by
            leveraging **technology, AI, and analytics** for a greener planet.
          </p>
        </div>

        <div className="text-center mt-8">
          <button className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

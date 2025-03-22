import React from "react";

function CardItems({ title, description }) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-2xl p-6 border border-gray-200 transition-all hover:scale-105 hover:shadow-xl">
      <div className="text-green-600 text-4xl">🟩</div>
      <h3 className="text-xl font-bold text-gray-800 mt-3">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
    </div>
  );
}

export default CardItems;


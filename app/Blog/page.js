"use client";

import React from "react";

const blogs = [
  {
    id: 1,
    title: "The Importance of Carbon Tracking",
    author: "John Doe",
    date: "March 15, 2025",
    image: "/blog/blog1.png",
    content: "Discover how carbon tracking helps individuals and businesses monitor and reduce their carbon footprint effectively.",
  },
  {
    id: 2,
    title: "How to Control Your Carbon Emissions",
    author: "Jane Smith",
    date: "March 10, 2025",
    image: "/blog/blog2.png",
    content: "Practical strategies for reducing carbon emissions in daily life and corporate environments.",
  },
  {
    id: 3,
    title: "Carbon Estimation: A Key to Sustainability",
    author: "Alex Johnson",
    date: "March 5, 2025",
    image: "/blog/blog3.png",
    content: "Learn the methods of carbon estimation and how they contribute to building a sustainable future.",
  },
  {
    id: 4,
    title: "Advancements in Carbon Footprint Measurement",
    author: "Emily Brown",
    date: "February 28, 2025",
    image: "/blog/blog4.png",
    content: "A look at new technologies that enhance the accuracy of carbon footprint measurement and reporting.",
  },
  {
    id: 5,
    title: "The Role of AI in Carbon Reduction",
    author: "Michael Lee",
    date: "February 22, 2025",
    image: "/blog/blog5.png",
    content: "How artificial intelligence is revolutionizing the way we analyze and reduce carbon emissions.",
  },
  {
    id: 6,
    title: "Carbon Neutrality: Steps Towards a Greener Planet",
    author: "Sarah Wilson",
    date: "February 15, 2025",
    image: "/blog/blog6.png",
    content: "Explore the journey towards carbon neutrality and how individuals and businesses can contribute.",
  },
];

function BlogList() {
  return (
    <section className="pt-24 pb-12 bg-gray-100 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 text-sm">By {blog.author} | {blog.date}</p>
                <p className="text-gray-700 mt-2">{blog.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogList;

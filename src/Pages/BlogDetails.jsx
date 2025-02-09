import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import blogData from "../data/blogs";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  useEffect(() => {
    if (!blog) {
      document.title = "Blog Not Found | My Blog";
    } else {
      document.title = `${blog.title} | My Blog`;
    }
  }, [blog]);

  if (!blog) {
    return (
      <div className="text-center text-gray-200 bg-gray-900 min-h-screen flex flex-col items-center justify-center">
        <Navbar bgColor="bg-[#E3ECF7]" />
        <h1 className="text-3xl font-semibold text-red-500 mt-8">Blog Not Found</h1>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#B3CCE8] text-white min-h-screen font-sans">
      <Navbar bgColor={location.pathname.includes("/blogs/") ? "bg-[#E3ECF7]" : ""} />
      <div className="max-w-[75%] mx-auto p-8 mt-10 bg-[#E3ECF7] text-gray-900 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-md mb-6 shadow-md hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          {blog.title}
        </h1>
        <p className="text-lg text-gray-700 mb-6 italic">
          <span className="font-medium">{blog.author}</span> &middot; {blog.date}
        </p>
        <div
          className="text-xl text-gray-800 leading-relaxed text-justify indent-8 space-y-6"
          dangerouslySetInnerHTML={{
            __html: blog.content
              .replace(
                /<h2>(.*?)<\/h2>/g,
                '<h2 class="text-4xl font-bold text-gray-900 mt-10 mb-6 border-b-2 border-gray-300 pb-2">$1</h2>'
              )
              .replace(
                /<p>(.*?)<\/p>/g,
                '<p class="text-lg text-gray-700 leading-relaxed mb-4">$1</p>'
              )
          }}
        />
      </div>
    </div>
  );
};

export default BlogDetails;
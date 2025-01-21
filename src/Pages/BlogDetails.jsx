import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import blogData from "../data/blogs";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="text-center text-white bg-tertiary min-h-screen">
        <Navbar />
        <h1 className="text-3xl font-Yeseva text-primary mt-8">
          Blog Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-tertiary text-white min-h-screen font-Lato">
      {/* Navbar */}
      <Navbar />

      {/* Blog Content */}
      <div className="container mx-auto p-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-md mb-6"
        />
        <h1 className="text-4xl font-Yeseva text-primary mb-4">{blog.title}</h1>
        <p className="text-sm text-secondary mb-4">
          By <span className="font-medium">{blog.author}</span> | {blog.date}
        </p>
        <div
          className="text-lg text-gray-200"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
};

export default BlogDetails;
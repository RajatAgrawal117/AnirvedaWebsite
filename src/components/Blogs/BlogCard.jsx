import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, title, author, date, excerpt, image }) => {
  return (
    <div className="p-4 bg-tertiary border border-secondary-15 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-md mb-4"
      />
      <h2 className="text-2xl font-Bebas text-primary mb-2">{title}</h2>
      <p className="text-sm text-secondary mb-2">
        By <span className="font-medium">{author}</span> | {date}
      </p>
      <p className="text-secondary-15 line-clamp-3 mb-4">{excerpt}</p>
      <Link
        to={`/blogs/${id}`}
        className="text-primary font-bold underline hover:text-secondary transition"
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
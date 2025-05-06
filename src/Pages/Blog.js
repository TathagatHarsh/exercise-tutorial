import React from "react";

const Blog = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-3xl font-semibold text-blue-600">Blog</h1>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Blog Post 1</h2>
        <p className="mt-2 text-gray-600">
          This is the first blog post. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Blog Post 2</h2>
        <p className="mt-2 text-gray-600">
          This is the second blog post. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Blog;

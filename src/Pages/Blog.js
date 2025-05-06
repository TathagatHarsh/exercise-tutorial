import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Building Muscle",
      summary:
        "Learn the science-backed strategies for effective muscle building, including optimal rep ranges, nutrition tips, and recovery techniques.",
      author: "Fitness Expert",
      date: "May 2, 2025",
      category: "Strength Training",
      image:
        "https://intowellness.in/wp-content/uploads/2024/05/product-detail-banner.webp",
    },
    {
      id: 2,
      title: "Cardio vs. HIIT: Which is Better for Fat Loss?",
      summary:
        "Explore the differences between traditional cardio and high-intensity interval training to determine which approach is most effective for your fat loss goals.",
      author: "Cardio Specialist",
      date: "April 25, 2025",
      category: "Cardio",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/701/articles/2017/01/how-much-joining-gym-helps-health-2-jpg-1488906648.jpeg?resize=640:*",
    },
    {
      id: 3,
      title: "Nutrition Essentials for Fitness Success",
      summary:
        "Discover the key nutritional principles that will help fuel your workouts and optimize your recovery for better overall fitness results.",
      author: "Nutrition Coach",
      date: "April 18, 2025",
      category: "Nutrition",
      image:
        "https://www.guardian.in/cdn/shop/articles/Gym_Diet_For_Beginners.jpg?crop=center&height=1200&v=1739877184&width=1200",
    },
    {
      id: 4,
      title: "How to Prevent Common Workout Injuries",
      summary:
        "Learn practical strategies to avoid injuries during your fitness journey, including proper warm-up techniques, form guidance, and recovery protocols.",
      author: "Physical Therapist",
      date: "April 10, 2025",
      category: "Recovery",
      image:
        "https://www.eroftexas.com/common-gym-injuries-how-to-avoid-them/images/common-gym-injuries-how-to-avoid-them.jpg",
    },
  ];

  return (
    <div className="w-full px-4 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Fitness Blog
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Expert advice, training tips, and fitness inspiration to help you
            achieve your health and fitness goals.
          </p>
        </div>

        <div className="mb-16">
          <div className="overflow-hidden bg-white shadow-md rounded-xl md:flex">
            <div className="md:flex-shrink-0 md:w-1/2">
              <img
                className="object-cover w-full h-80"
                src="https://t4.ftcdn.net/jpg/00/99/82/15/360_F_99821575_nVEHTBXzUnTcLIKN6yOymAWAnFwEybGb.jpg"
                alt="Featured blog post"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="text-sm font-semibold tracking-wide text-blue-500 uppercase">
                Featured Article
              </div>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                5 Scientific Ways to Build Your Perfect Workout Routine
              </h2>
              <p className="mt-3 text-gray-600">
                Discover research-backed principles to design an effective
                workout routine that fits your goals, schedule, and preferences.
                Learn how to properly structure your training for maximum
                results with minimal time investment.
              </p>
              <div className="mt-6">
                <Link
                  to="/blog/featured"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none"
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="overflow-hidden transition-transform bg-white shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1"
            >
              <img
                className="object-cover w-full h-48"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="px-2 py-1 text-xs font-semibold text-blue-600 rounded-full bg-blue-50">
                    {post.category}
                  </span>
                  <span className="ml-2 text-xs text-gray-500">
                    {post.date}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {post.title}
                </h3>
                <p className="mb-4 text-gray-600 line-clamp-3">
                  {post.summary}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    By {post.author}
                  </span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="font-medium text-blue-500 hover:text-blue-600"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 mt-16 bg-blue-50 rounded-xl">
          <div className="items-center md:flex">
            <div className="mb-6 md:w-2/3 md:mb-0 md:pr-8">
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                Subscribe to Our Fitness Newsletter
              </h3>
              <p className="text-gray-600">
                Get the latest fitness tips, workout ideas, and nutrition advice
                delivered directly to your inbox.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button className="px-4 py-2 text-white transition-colors bg-blue-500 rounded-r-md hover:bg-blue-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

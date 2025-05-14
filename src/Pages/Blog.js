import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, ChevronRight, Calendar, User } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Strength Training",
    "Cardio",
    "Nutrition",
    "Recovery",
    "Wellness",
    "Motivation",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Building Muscle",
      summary:
        "Learn the science-backed strategies for effective muscle building, including optimal rep ranges, nutrition tips, and recovery techniques.",
      author: "Fitness Expert",
      date: "May 2, 2025",
      category: "Strength Training",
      readTime: "8 min read",
      image:
        "https://intowellness.in/wp-content/uploads/2024/05/product-detail-banner.webp",
      featured: true,
    },
    {
      id: 2,
      title: "Cardio vs. HIIT: Which is Better for Fat Loss?",
      summary:
        "Explore the differences between traditional cardio and high-intensity interval training to determine which approach is most effective for your fat loss goals.",
      author: "Cardio Specialist",
      date: "April 25, 2025",
      category: "Cardio",
      readTime: "6 min read",
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
      readTime: "10 min read",
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
      readTime: "7 min read",
      image:
        "https://www.eroftexas.com/common-gym-injuries-how-to-avoid-them/images/common-gym-injuries-how-to-avoid-them.jpg",
    },
    {
      id: 5,
      title: "Mindfulness and Exercise: The Perfect Combination",
      summary:
        "Discover how combining mindfulness practices with your workout routine can enhance both mental and physical well-being.",
      author: "Wellness Coach",
      date: "April 5, 2025",
      category: "Wellness",
      readTime: "5 min read",
      image:
        "https://www.healthshots.com/wp-content/uploads/2020/09/meditation-and-exercise.jpg",
    },
    {
      id: 6,
      title: "Staying Motivated: Tips from Professional Athletes",
      summary:
        "Learn how professional athletes stay motivated and apply their strategies to your own fitness journey.",
      author: "Pro Athlete",
      date: "April 1, 2025",
      category: "Motivation",
      readTime: "8 min read",
      image:
        "https://www.bodybuilding.com/images/2019/july/stay-motivated-header-960x540.jpg",
    },
  ];

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Fitness Knowledge Hub
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Discover expert insights, training tips, and the latest in fitness
            science to help you achieve your health goals.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="relative w-full md:w-96">
              <Search
                className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
                size={20}
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                    ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.02]">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/2">
                  <img
                    className="object-cover w-full h-96"
                    src={featuredPost.image}
                    alt={featuredPost.title}
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 text-sm text-gray-800 bg-gray-100 rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="mb-4 text-3xl font-bold text-gray-900">
                    {featuredPost.title}
                  </h2>
                  <p className="mb-6 text-gray-600">{featuredPost.summary}</p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <User size={16} className="mr-1" />
                      {featuredPost.author}
                    </div>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center px-6 py-3 text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
                  >
                    Read Full Article
                    <ChevronRight size={20} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <div
                key={post.id}
                className="overflow-hidden transition-all bg-white shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    className="object-cover w-full h-48"
                    src={post.image}
                    alt={post.title}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-sm text-gray-800 rounded-full bg-white/90 backdrop-blur-sm">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-sm font-medium text-blue-600 rounded-full bg-blue-50">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-gray-600 line-clamp-2">
                    {post.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      {post.date}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="flex items-center font-medium text-blue-600 hover:text-blue-700"
                    >
                      Read More
                      <ChevronRight size={20} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 shadow-xl bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl">
          <div className="items-center justify-between px-8 py-12 md:flex">
            <div className="mb-8 md:w-2/3 md:mb-0">
              <h3 className="mb-4 text-3xl font-bold text-white">
                Get Weekly Fitness Tips
              </h3>
              <p className="text-blue-100">
                Join our newsletter and receive expert advice, workout plans,
                and nutrition tips delivered straight to your inbox.
              </p>
            </div>
            <div className="md:w-1/3">
              <form className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="px-6 py-3 font-medium text-blue-600 transition-colors bg-white rounded-full hover:bg-blue-50"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

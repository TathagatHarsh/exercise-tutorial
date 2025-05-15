import React, { useState } from "react";
import {
  Search,
  Filter,
  Clock,
  Target,
  Dumbbell,
  Users,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Strength Fundamentals",
    description:
      "Build a strong foundation with this comprehensive strength training program.",
    duration: "8 weeks",
    level: "Beginner",
    category: "Strength",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "₹3,999",
  },
  {
    id: 2,
    title: "HIIT Fat Burner",
    description:
      "Intensive cardio and bodyweight exercises to maximize fat loss and improve endurance.",
    duration: "6 weeks",
    level: "Intermediate",
    category: "Cardio",
    image:
      "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "₹2,999",
  },
  {
    id: 3,
    title: "Yoga Flow",
    description:
      "Enhance flexibility and mindfulness with guided yoga sessions.",
    duration: "4 weeks",
    level: "All Levels",
    category: "Yoga",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "₹1,999",
  },
  {
    id: 4,
    title: "Advanced Muscle Builder",
    description:
      "Intensive program designed for muscle hypertrophy and strength gains.",
    duration: "12 weeks",
    level: "Advanced",
    category: "Strength",
    image:
      "https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "₹4,999",
  },
  {
    id: 5,
    title: "Core Power",
    description: "Focus on building core strength and improving posture.",
    duration: "4 weeks",
    level: "Intermediate",
    category: "Core",
    image:
      "https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "₹2,499",
  },
  {
    id: 6,
    title: "Functional Fitness",
    description: "Improve everyday movement patterns and overall fitness.",
    duration: "8 weeks",
    level: "All Levels",
    category: "Functional",
    image:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    price: "₹3,499",
  },
];

const categories = ["All", "Strength", "Cardio", "Yoga", "Core", "Functional"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const Programs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  const filteredPrograms = programs.filter((program) => {
    const matchesSearch =
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || program.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "All Levels" || program.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Body with Our
            <span className="text-blue-600"> Premium Programs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully designed workout programs to achieve your
            fitness goals
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category & Level Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              <div className="flex items-center space-x-2">
                <Filter size={20} className="text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={20} className="text-gray-400" />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium">
                    {program.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={16} className="mr-1" />
                    {program.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Target size={16} className="mr-1" />
                    {program.level}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Dumbbell size={16} className="mr-1" />
                    {program.category}
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group">
                  Get Started
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No programs found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Programs;

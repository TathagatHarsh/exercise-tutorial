import React from "react";
import {
  Salad,
  Apple,
  Coffee,
  ChefHat,
  Clock,
  Users,
  ArrowRight,
  Calculator,
  Calendar,
  MessageSquare,
} from "lucide-react";

const mealPlans = [
  {
    id: 1,
    title: "Weight Loss Meal Plan",
    description:
      "Scientifically designed meal plan to support healthy and sustainable weight loss.",
    calories: "1500-1800",
    duration: "4 weeks",
    includes: ["Personalized portions", "Shopping lists", "Recipe guides"],
    price: "₹2,499",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 2,
    title: "Muscle Gain Plan",
    description:
      "High-protein meal plan designed to support muscle growth and recovery.",
    calories: "2500-3000",
    duration: "4 weeks",
    includes: ["Macro calculations", "Supplement guide", "Meal timing"],
    price: "₹2,999",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 3,
    title: "Plant-Based Plan",
    description: "Nutrient-rich vegan meal plan for optimal health and energy.",
    calories: "2000-2200",
    duration: "4 weeks",
    includes: ["Vegan recipes", "Nutrient guide", "Alternative options"],
    price: "₹2,499",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
];

const features = [
  {
    icon: Calculator,
    title: "Calorie Calculator",
    description:
      "Get personalized calorie and macro recommendations based on your goals.",
  },
  {
    icon: Calendar,
    title: "Meal Planning",
    description:
      "Access weekly meal plans designed by certified nutritionists.",
  },
  {
    icon: ChefHat,
    title: "Recipe Database",
    description: "Browse through hundreds of healthy and delicious recipes.",
  },
  {
    icon: MessageSquare,
    title: "Expert Support",
    description: "Get guidance from our team of certified nutrition experts.",
  },
];

const mealTypes = [
  {
    icon: Coffee,
    title: "Breakfast",
    examples: [
      "Oatmeal with fruits",
      "Greek yogurt parfait",
      "Protein smoothie",
    ],
  },
  {
    icon: Salad,
    title: "Lunch",
    examples: ["Quinoa Buddha bowl", "Grilled chicken salad", "Veggie wrap"],
  },
  {
    icon: Apple,
    title: "Snacks",
    examples: ["Mixed nuts", "Protein bars", "Fruit and yogurt"],
  },
];

const Nutrition = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Path to
            <span className="text-blue-600"> Healthy Eating</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover personalized meal plans and expert nutrition guidance to
            support your fitness journey
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center group">
            Start Your Journey
            <ArrowRight
              size={20}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Features Grid */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Nutrition Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon size={40} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meal Plans */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            Personalized Meal Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mealPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium">
                      {plan.price}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={16} className="mr-2" />
                      {plan.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users size={16} className="mr-2" />
                      {plan.calories} calories/day
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {plan.includes.map((item, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
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
        </div>

        {/* Sample Meals Section */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            Sample Meal Ideas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mealTypes.map((meal, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <meal.icon size={24} className="text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">{meal.title}</h3>
                </div>
                <ul className="space-y-2">
                  {meal.examples.map((example, i) => (
                    <li key={i} className="text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Diet?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Get started with our personalized nutrition plans and expert
              guidance today.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center group">
              Schedule a Consultation
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;

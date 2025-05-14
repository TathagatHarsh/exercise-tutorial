import React from "react";
import { Users, Target, Award, Heart, Clock, Dumbbell } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Active Users", value: "10K+", icon: Users },
    { label: "Expert Trainers", value: "50+", icon: Award },
    { label: "Success Stories", value: "1000+", icon: Target },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Fitness",
      description:
        "We're driven by our passion to help people achieve their fitness goals and live healthier lives.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "Building a supportive community where everyone feels welcome and motivated to succeed.",
    },
    {
      icon: Target,
      title: "Result Oriented",
      description:
        "Our programs are designed to deliver measurable results through proven scientific methods.",
    },
    {
      icon: Clock,
      title: "Lifetime Learning",
      description:
        "We continuously update our knowledge to provide you with the latest in fitness science.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Head Trainer",
      image:
        "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description:
        "NASM certified trainer with 10+ years of experience in strength and conditioning.",
    },
    {
      name: "Mike Chen",
      role: "Nutrition Specialist",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description:
        "Registered dietitian with expertise in sports nutrition and meal planning.",
    },
    {
      name: "Emma Williams",
      role: "Yoga Instructor",
      image:
        "https://images.unsplash.com/photo-1593164842264-854604db2260?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description:
        "RYT-500 certified instructor specializing in power yoga and meditation.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforming Lives Through
              <span className="text-blue-600"> Fitness Excellence</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
              At FitGuide, we believe in making fitness accessible, enjoyable,
              and effective for everyone. Our platform combines expert guidance,
              cutting-edge technology, and a supportive community to help you
              achieve your fitness goals.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                Join Now
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <stat.icon size={40} className="text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at FitGuide, ensuring we
              deliver the best possible experience for our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <value.icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of certified professionals is dedicated to helping you
            achieve your fitness goals through personalized guidance and
            support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <div className="text-blue-600 font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join FitGuide today and get access to expert-designed workouts,
            nutrition guidance, and a supportive community to help you succeed.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

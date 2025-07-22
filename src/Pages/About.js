import React from "react";
import { Users, Target, Award, Heart, Clock } from "lucide-react";

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
        <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Transforming Lives Through
              <span className="text-blue-600"> Fitness Excellence</span>
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
              At FitGuide, we believe in making fitness accessible, enjoyable,
              and effective for everyone. Our platform combines expert guidance,
              cutting-edge technology, and a supportive community to help you
              achieve your fitness goals.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700">
                Join Now
              </button>
              <button className="px-8 py-3 text-blue-600 transition-colors border-2 border-blue-600 rounded-full hover:bg-blue-50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 text-center transition-shadow bg-white shadow-lg rounded-xl hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                <stat.icon size={40} className="text-blue-600" />
              </div>
              <div className="mb-2 text-3xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Our Values
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              These core values guide everything we do at FitGuide, ensuring we
              deliver the best possible experience for our community.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 transition-colors bg-gray-50 rounded-xl hover:bg-blue-50"
              >
                <div className="flex justify-center mb-4">
                  <value.icon size={32} className="text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-center text-gray-900">
                  {value.title}
                </h3>
                <p className="text-center text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Meet Our Expert Team
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our team of certified professionals is dedicated to helping you
            achieve your fitness goals through personalized guidance and
            support.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={index}
              className="overflow-hidden transition-shadow bg-white shadow-lg rounded-xl hover:shadow-xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-64"
              />
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <div className="mb-3 font-medium text-blue-600">
                  {member.role}
                </div>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            Join FitGuide today and get access to expert-designed workouts,
            nutrition guidance, and a supportive community to help you succeed.
          </p>
          <button className="px-8 py-3 font-medium text-blue-600 transition-colors bg-white rounded-full hover:bg-blue-50">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

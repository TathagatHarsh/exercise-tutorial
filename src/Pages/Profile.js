import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[400px] pt-24 px-4">
        <div className="text-center text-gray-500">
          Please log in to view your profile.
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-white px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center animate-fade-in">
        {/* Profile Picture Placeholder */}
        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-gray-400 select-none">
          {user.name
            ? user.name[0].toUpperCase()
            : user.username[0].toUpperCase()}
        </div>
        <h2 className="text-2xl font-bold mb-6">Profile</h2>
        <div className="mb-4">
          <span className="font-semibold text-gray-700 block">Username</span>
          <span className="text-gray-900">{user.username}</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold text-gray-700 block">Full Name</span>
          <span className="text-gray-900">{user.name}</span>
        </div>
        <div className="mb-6">
          <span className="font-semibold text-gray-700 block">Email</span>
          <span className="text-gray-900">{user.email}</span>
        </div>
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition mt-2"
        >
          Logout
        </button>
      </div>
      {/* Fade-in animation */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: scale(0.95) translateY(40px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fade-in { animation: fadeInUp 0.6s; }
      `}</style>
    </div>
  );
};

export default Profile;

import React from "react";
import { headers } from "next/headers";
import { Button, Card, Avatar } from "@heroui/react";

import { auth } from "../../lib/auth";

import {
  LucideEdit,
  LucideGlobe,
  LucideMapPinned,
  LucidePlane,
  LucideTrendingUp,
} from "lucide-react";

import { LuBadgeDollarSign } from "react-icons/lu";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const stats = [
    {
      label: "Total Bookings",
      value: "12",
      icon: <LucidePlane className="text-cyan-500" />,
      bgColor: "bg-cyan-50",
    },
    {
      label: "Countries Visited",
      value: "18",
      icon: <LucideGlobe className="text-green-500" />,
      bgColor: "bg-green-50",
    },
    {
      label: "Upcoming Trips",
      value: "2",
      icon: <LucideTrendingUp className="text-orange-500" />,
      bgColor: "bg-orange-50",
    },
    {
      label: "Total Spent",
      value: "$15,750",
      icon: <LuBadgeDollarSign className="text-purple-500" />,
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-serif text-gray-800 mb-2">
          My Profile
        </h1>

        <p className="text-gray-500 text-lg">
          Manage your account settings and travel preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Profile Card */}
        <div className="lg:col-span-4">
          <Card className="p-8 border border-gray-100 shadow-sm rounded-none bg-white text-center">
            
            <div className="relative inline-block mx-auto mb-6">
              <Avatar
                src={
                  user?.image ||
                  "https://images.unsplash.com/photo-1511367461989-f85a21fda167"
                }
                className="w-32 h-32 text-large rounded-full border-4 border-white shadow-sm"
              />

              <button className="absolute bottom-0 right-0 bg-cyan-500 p-2 rounded-full text-white border-2 border-white shadow-sm hover:bg-cyan-600 transition-colors">
                <LucideEdit size={16} />
              </button>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              {user?.name || "Traveler"}
            </h2>

            <div className="flex items-center justify-center gap-2 text-gray-400 mt-2 mb-8">
              <LucideMapPinned size={16} />

              <span className="text-sm">
                Dhaka, Bangladesh
              </span>
            </div>

            <div className="space-y-4 text-left border-t border-gray-50 pt-6">
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-400 font-medium">
                  Member since
                </span>

                <span className="text-gray-800 font-bold">
                  May 2026
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-400 font-medium">
                  Nationality
                </span>

                <span className="text-gray-800 font-bold">
                  Bangladesh
                </span>
              </div>
            </div>

            <Button
              className="w-full mt-8 bg-cyan-500 hover:bg-cyan-600 text-white font-bold h-12 rounded-none"
              startContent={<LucideEdit size={18} />}
            >
              Edit Profile
            </Button>
          </Card>
        </div>

        {/* Right Statistics */}
        <div className="lg:col-span-8">
          
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Travel Statistics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 border border-gray-100 shadow-sm rounded-none bg-white flex-row items-center justify-between hover:shadow-md transition-all"
              >
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-1">
                    {stat.label}
                  </p>

                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>

                <div className={`${stat.bgColor} p-4 rounded-full`}>
                  {stat.icon}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
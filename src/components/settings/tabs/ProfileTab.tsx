"use client";

import React, { useState } from "react";
import { Camera, Upload } from "lucide-react";
import Image from "next/image";
import SaveButton from "../saveButton";

const ProfileTab: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "Alex Chen",
    email: "alex.chen@company.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "https://alexchen.dev",
    timezone: "Pacific Time (PT)",
    bio: "Social Media Manager passionate about creating engaging content and building communities.",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setHasChanges(true);
    setIsSaved(false);
  };

  const handleSave = async () => {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // const response = await updateProfile(formData);

      setIsSaved(true);
      setHasChanges(false);

      // Reset the saved state after 3 seconds
      setTimeout(() => {
        setIsSaved(false);
      }, 3000);
    } catch (error) {
      console.error("Error saving profile:", error);
      // Handle error - show toast notification, etc.
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h3 className="text-2xl font-semibold mb-2 text-gray-600">
        Profile Information
      </h3>
      <p className="text-gray-600 mb-8 font-medium">
        Update your personal details and profile picture.
      </p>

      {/* Profile Picture */}
      <div className="mb-8 bg-blue-200/30 p-5 rounded-xl">
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Profile Picture
        </label>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image
              src="https://i.pravatar.cc/150?img=32"
              width={150}
              height={150}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-white"
            />
            <div className="absolute bottom-0 right-0 bg-blue-600 p-1.5 rounded-full cursor-pointer hover:bg-blue-700 transition-colors ">
              <Camera className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Upload New
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 bg-gray-100">
              Remove
            </button>
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            title="Full Name"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            title="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            title="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            title="Location"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Website
          </label>
          <input
            title="Website"
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="timezone-select"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Timezone
          </label>
          <select
            id="timezone-select"
            name="timezone"
            value={formData.timezone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
          >
            <option value="Pacific Time (PT)">Pacific Time (PT)</option>
            <option value="Eastern Time (ET)">Eastern Time (ET)</option>
            <option value="Central Time (CT)">Central Time (CT)</option>
            <option value="Mountain Time (MT)">Mountain Time (MT)</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Bio
        </label>
        <textarea
          title="Bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-600"
        />
      </div>

      <div className="mt-8 flex justify-end">
        {/* <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
          Save Changes
        </button> */}
        <SaveButton
          onClick={handleSave}
          isLoading={isLoading}
          isSaved={isSaved}
        />
      </div>
    </div>
  );
};

export default ProfileTab;

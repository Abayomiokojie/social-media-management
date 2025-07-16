"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

type CreatePostFormProps = {
  onCancel: () => void;
};

const platformOptions = [
  { name: "Facebook", icon: Facebook, color: "text-blue-600" },
  { name: "Instagram", icon: Instagram, color: "text-pink-500" },
  { name: "Twitter", icon: Twitter, color: "text-sky-500" },
  { name: "LinkedIn", icon: Linkedin, color: "text-blue-700" },
];

export default function CreatePostForm({ onCancel }: CreatePostFormProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const togglePlatform = (name: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };
  return (
    // FIXED: Added container with correct background, padding, and border.
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
      <div className="flex flex-col gap-6">
        <h3 className="text-lg font-bold text-gray-800">Create New Post</h3>

        {/* Content Text Area */}
        <div>
          <label
            htmlFor="content"
            className="text-sm font-medium text-gray-600 mb-1 block"
          >
            Content
          </label>
          <textarea
            id="content"
            rows={4}
            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="What's on your mind? ✍️"
          ></textarea>
        </div>

        {/* Platforms */}
        <div>
          <label className="text-base font-medium text-gray-600 mb-2 block">
            Platforms
          </label>

          <div className="flex gap-4 flex-wrap text-sm">
            {platformOptions.map(({ name, icon: Icon, color }) => {
              const isSelected = selectedPlatforms.includes(name);
              return (
                <div
                  key={name}
                  onClick={() => togglePlatform(name)}
                  className={`flex items-center gap-2 py-2 px-4 border rounded-lg cursor-pointer transition ${
                    isSelected
                      ? "bg-blue-100 border-blue-500"
                      : "bg-white border-gray-300"
                  }`}
                >
                  <Icon size={14} className={`${color}`} />
                  <span className="font-semibold">{name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Schedule Date */}
        <div>
          <label
            htmlFor="scheduleDate"
            className="text-sm font-medium text-gray-600 mb-1 block"
          >
            Schedule Date
          </label>
          <input
            type="datetime-local"
            id="scheduleDate"
            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onCancel}
            className="font-semibold py-3 px-4 rounded-xl text-gray-600 hover:bg-gray-200 cursor-pointer"
          >
            Cancel
          </button>
          <button className="bg-[#1E293B] text-white font-semibold py-3 px-4 rounded-xl flex items-center gap-2 hover:opacity-90 cursor-pointer">
            Schedule Post
          </button>
        </div>
      </div>
    </div>
  );
}

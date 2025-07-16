// src/components/AnalyticsDashboard.tsx
'use client'; // Required to use hooks like useModal

import { LineChart, Star } from "lucide-react";
import { mockAnalyticsStats, mockTopPosts } from "@/lib/mockData";
import { useModal } from "@/context/ModalContext";
import PostDetailsModal from "./PostDetailsModal";

const StatCard = ({ title, value, color }: { title: string, value: number, color: string }) => (
  <div className="bg-slate-50 p-4 rounded-lg flex-1">
    <p className="text-sm text-gray-500">{title}</p>
    <div className="flex items-center justify-between mt-2">
      <span className="text-3xl font-bold text-gray-800">{value}</span>
      <div className={`w-8 h-8 rounded-md ${color}`}></div>
    </div>
  </div>
);

export default function AnalyticsDashboard() {
  const { showModal } = useModal(); // Get the showModal function from our context

  return (
    <div className="bg-[#FFFFFF] p-6 rounded-xl shadow-sm h-full flex flex-col gap-8">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
        <LineChart className="text-[#2563EB]" size={28} />
        Analytics Dashboard
      </h2>

      {/* Stats Section */}
      <div className="flex gap-6">
        <StatCard title="Total Posts" value={mockAnalyticsStats.totalPosts} color="bg-blue-500" />
        <StatCard title="Total Engagement" value={mockAnalyticsStats.totalEngagement} color="bg-pink-500" />
        <StatCard title="Avg. Likes" value={mockAnalyticsStats.avgLikes} color="bg-green-500" />
      </div>

      {/* Top Performing Posts Section */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <Star className="text-amber-400" size={22} />
          Top Performing Posts
        </h3>
        <div className="border border-gray-200 rounded-lg">
          <ul className="divide-y divide-gray-200">
            {mockTopPosts.map(post => (
              <li
                key={post.id}
                className="flex justify-between items-center p-4 hover:bg-slate-50 cursor-pointer"
                onClick={() => showModal(<PostDetailsModal />)}
              >
                <div>
                  <p className="font-semibold text-gray-800">{post.title}</p>
                  <p className="text-sm text-gray-400">Sep 20, 09:00 AM</p>
                </div>
                <span className="text-gray-600 font-medium">{post.engagements} engagements</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
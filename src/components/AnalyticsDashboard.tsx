"use client";

import { LineChart, Star } from "lucide-react";
import { mockAnalyticsStats, mockTopPosts } from "@/lib/mockData";
import { useModal } from "@/context/ModalContext";
import PostDetailsModal from "./PostDetailsModal";

const StatCard = ({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: string;
}) => (
  <div className="grid  gap-2 items-center bg-slate-50 p-4 rounded-lg hover:shadow-lg hover:transition-shadow duration-300 hover:scale-105 w-full">
    <p className="text-xs font-semibold text-gray-500 lg:min-w-28">{title}</p>
    <div className="flex justify-around items-center mt-2 gap-2 ">
      <span className="text-3xl font-bold text-gray-800">{value}</span>
      <div
        className={`w-12 h-12 rounded-xl shadow-xl row-span-1 ${color}`}
      ></div>
    </div>
  </div>
);

export default function AnalyticsDashboard() {
  const { showModal } = useModal();

  return (
    <div className="bg-[#FFFFFF] p-6 rounded-xl shadow-sm h-full flex flex-col gap-8">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
        <LineChart className="text-[#2563EB]" size={28} />
        Analytics Dashboard
      </h2>

      {/* Stats Section */}
      <div className="flex gap-6">
        <StatCard
          title="Total Posts"
          value={mockAnalyticsStats.totalPosts}
          color="bg-blue-500"
        />
        <StatCard
          title="Total Engagement"
          value={mockAnalyticsStats.totalEngagement}
          color="bg-pink-500"
        />
        <StatCard
          title="Avg. Likes"
          value={mockAnalyticsStats.avgLikes}
          color="bg-green-500"
        />
      </div>

      {/* Top Performing Posts Section */}
      <div className="flex flex-col gap-4 pb-6">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <Star className="text-amber-400" size={22} />
          Top Performing Posts
        </h3>
        <div className=" rounded-lg">
          <ul className=" space-y-4">
            {mockTopPosts.map((post) => (
              <li
                key={post.id}
                className="flex sm:gap-2 items-end p-4 hover:bg-slate-50 cursor-pointer border border-gray-200 hover:translate-x-1 transition duration-300 delay-100 hover:shadow-xl rounded-xl"
                onClick={() => showModal(<PostDetailsModal />)}
              >
                <div className="h-10 w-[6px] rounded-2xl bg-gray-700 self-start mr-2 mt-1" />
                <div className="ml-0">
                  <p className="font-semibold text-gray-800">{post.title}</p>
                  <p className="text-sm text-gray-400">Sep 20, 09:00 AM</p>
                </div>
                <span className="text-gray-600 font-medium text-sm p-2 shadow-md rounded-lg bg-white justify-self-end ml-auto">
                  {post.engagements} engagements
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

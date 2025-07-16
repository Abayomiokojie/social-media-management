import { mockPostDetails } from "@/lib/mockData";
import {
  BarChartBig,
  Facebook,
  MessageCircle,
  Pencil,
  Share2,
  ThumbsUp,
  Twitter,
  X,
} from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Image from "next/image";

export default function PostDetailsModal() {
  const { hideModal } = useModal();
  const post = mockPostDetails;

  return (
    <div className="p-6 flex flex-col gap-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-3">
          <Pencil size={22} />
          Post Details
        </h3>
        <button
          onClick={hideModal}
          className="text-gray-400 hover:text-gray-800"
        >
          <X size={24} />
          <span className="sr-only">close</span>
        </button>
      </div>

      {/* Post Content */}
      <div>
        <p className="text-gray-700">{post.text}</p>
        <div className="flex gap-2 mt-3">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
            <Facebook size={14} /> Facebook
          </span>
          <span className="bg-sky-100 text-sky-800 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
            <Twitter size={14} /> Twitter
          </span>
        </div>
      </div>

      {/* Schedule Info */}
      <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg text-sm">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            Scheduled:{" "}
            <span className="font-bold text-gray-800">{post.scheduledAt}</span>
          </p>
          <p className="text-gray-600">
            Status:{" "}
            <span className="bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded-full">
              {post.status}
            </span>
          </p>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          Created by: {post.createdBy} on Sep 20, 09:00 AM
        </p>
      </div>

      {/* Image */}
      <Image
        src={post.imageUrl}
        alt="Post image"
        className="rounded-lg object-cover w-full h-64"
        width={500}
        height={300}
      />

      {/* Engagement Stats */}
      <div className="flex gap-6 text-gray-500">
        <div className="flex items-center gap-2">
          <ThumbsUp size={18} />{" "}
          <span className="font-medium">{post.likes}</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageCircle size={18} />{" "}
          <span className="font-medium">{post.comments}</span>
        </div>
        <div className="flex items-center gap-2">
          <Share2 size={18} />{" "}
          <span className="font-medium">{post.shares}</span>
        </div>
      </div>

      {/* Analytics Overview */}
      <div className="border-t border-gray-200 pt-5 flex flex-col gap-4">
        <h4 className="font-bold text-gray-800 flex items-center gap-2">
          <BarChartBig size={20} /> Analytics Overview
        </h4>
        <div className="grid grid-cols-3 gap-4">
          {/* FINAL FIX: Styled to match design with full background and matching text colors */}
          <div className="bg-blue-100 p-4 rounded-xl text-left">
            <p className="text-sm font-semibold text-blue-600">Impressions</p>
            <p className="font-bold text-2xl text-blue-900 mt-1">
              {post.analytics.impressions}
            </p>
          </div>
          {/* FINAL FIX: Styled to match design with full background and matching text colors */}
          <div className="bg-green-100 p-4 rounded-xl text-left">
            <p className="text-sm font-semibold text-green-600">Clicks</p>
            <p className="font-bold text-2xl text-green-900 mt-1">
              {post.analytics.clicks}
            </p>
          </div>
          {/* FINAL FIX: Styled to match design with full background and matching text colors */}
          <div className="bg-purple-100 p-4 rounded-xl text-left">
            <p className="text-sm font-semibold text-purple-600">
              Engagement Rate
            </p>
            <p className="font-bold text-2xl text-purple-900 mt-1">
              {post.analytics.engagementRate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

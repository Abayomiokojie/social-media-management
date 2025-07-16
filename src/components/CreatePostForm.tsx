// src/components/CreatePostForm.tsx
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

type CreatePostFormProps = {
  onCancel: () => void;
};

export default function CreatePostForm({ onCancel }: CreatePostFormProps) {
  return (
    // FIXED: Added container with correct background, padding, and border.
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
      <div className="flex flex-col gap-6">
        <h3 className="text-lg font-bold text-gray-800">Create New Post</h3>

        {/* Content Text Area */}
        <div>
          <label htmlFor="content" className="text-sm font-medium text-gray-600 mb-1 block">Content</label>
          <textarea
            id="content"
            rows={4}
            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="What's on your mind? ✍️"
          ></textarea>
        </div>

        {/* Platforms */}
        <div>
          <label className="text-sm font-medium text-gray-600 mb-2 block">Platforms</label>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 p-3 bg-white border border-gray-300 rounded-lg cursor-pointer">
              <Facebook size={20} className="text-blue-600" /> <span className="font-medium">Facebook</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-white border border-gray-300 rounded-lg cursor-pointer">
              <Instagram size={20} className="text-pink-500" /> <span className="font-medium">Instagram</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-white border border-gray-300 rounded-lg cursor-pointer">
              <Twitter size={20} className="text-sky-500" /> <span className="font-medium">Twitter</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-white border border-gray-300 rounded-lg cursor-pointer">
              <Linkedin size={20} className="text-blue-700" /> <span className="font-medium">LinkedIn</span>
            </div>
          </div>
        </div>

        {/* Schedule Date */}
        <div>
          <label htmlFor="scheduleDate" className="text-sm font-medium text-gray-600 mb-1 block">Schedule Date</label>
          <input
            type="date"
            id="scheduleDate"
            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onCancel}
            className="font-semibold py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button className="bg-[#1E293B] text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 hover:opacity-90">
            Schedule Post
          </button>
        </div>
      </div>
    </div>
  );
}
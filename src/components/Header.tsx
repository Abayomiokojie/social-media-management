// src/components/Header.tsx
import { Bell } from 'lucide-react';
import { mockUser } from '@/lib/mockData';

export default function Header() {
  return (
    <header className="bg-[#111827] text-white w-full border-b border-gray-700">
      {/* FIXED: Wrapped content in a max-width, centered div to correct spacing. */}
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
        <div className="flex items-center gap-4">
          <div className="bg-[#4F46E5] p-2 rounded-md">
            <svg width="24" height="24" viewBox="0 0 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="white"/>
              <path d="M12 12L22 7" stroke="#4F46E5" strokeWidth="2"/>
              <path d="M12 12V22" stroke="#4F46E5" strokeWidth="2"/>
              <path d="M12 12L2 7" stroke="#4F46E5" strokeWidth="2"/>
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold">SocialPro Management</h1>
            <p className="text-xs text-gray-400">Professional Social Media Suite</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Bell className="text-gray-400 cursor-pointer hover:text-white" />
          <div className="flex items-center gap-3">
            <img src={mockUser.avatarUrl} alt={mockUser.name} className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold">{mockUser.name}</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
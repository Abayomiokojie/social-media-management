"use client"

// src/components/ContentCalendar.tsx
import { useState } from 'react';
import { Plus, CalendarDays } from 'lucide-react';
import CreatePostForm from './CreatePostForm';

// CalendarGrid component remains unchanged
const CalendarGrid = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({ length: 35 }, (_, i) => i - 4);

  return (
    <div className="flex flex-col flex-1">
      <div className="grid grid-cols-7 text-center">
        {days.map(day => (
          <div key={day} className="py-2 text-gray-400 font-semibold text-xs uppercase">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 grid-rows-5 gap-2 flex-1">
        {dates.map(date => (
          <div key={date} className={`p-2 rounded-lg flex flex-col text-sm ${date > 0 ? 'bg-gray-50' : 'bg-transparent'}`}>
            {date > 0 && (
              <span className={`font-semibold ${date === 12 ? 'bg-[#1E293B] text-white rounded-md w-7 h-7 flex items-center justify-center' : 'text-gray-700'}`}>
                {date}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ContentCalendar() {
  const [isCreatingPost, setIsCreatingPost] = useState(false);

  return (
    <div className="bg-[#FFFFFF] p-6 rounded-xl shadow-sm h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
          <CalendarDays className="text-[#2563EB]" size={28} />
          Content Calendar
        </h2>
        <button
          onClick={() => setIsCreatingPost(!isCreatingPost)} // CHANGED: This now toggles the form
          className="bg-[#1E293B] text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 hover:opacity-90"
        >
          <Plus size={20} />
          Create Post
        </button>
      </div>

      {/* FIXED: Changed logic to show form *above* the calendar instead of replacing it */}
      {isCreatingPost && (
        <CreatePostForm onCancel={() => setIsCreatingPost(false)} />
      )}
      
      <CalendarGrid />
    </div>
  );
}
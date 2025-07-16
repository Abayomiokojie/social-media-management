"use client";

import { useState } from "react";
import { CalendarDays, Edit } from "lucide-react";
import CreatePostForm from "./CreatePostForm";
import { useMemo } from "react";

const CalendarGrid = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-indexed

  const firstDayOfMonth = new Date(year, month, 1);
  const startDay = firstDayOfMonth.getDay(); // Which day of the week the month starts (0 = Sunday)

  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get last day of current month

  const calendarDates = useMemo(() => {
    const totalCells = 35;
    const days = [];

    for (let i = 0; i < totalCells; i++) {
      const dayNumber = i - startDay + 1;
      days.push(dayNumber > 0 && dayNumber <= daysInMonth ? dayNumber : null);
    }

    return days;
  }, [startDay, daysInMonth]);

  const todayDate = today.getDate();

  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="flex flex-col flex-1 min-h-120">
      <div className="grid grid-cols-7 text-center">
        {dayLabels.map((day) => (
          <div
            key={day}
            className="py-2 text-gray-400 font-semibold text-xs uppercase"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 grid-rows-5 gap-2 flex-1">
        {calendarDates.map((date, i) => (
          <div
            key={i}
            className={` rounded-lg flex flex-col text-sm ${
              date
                ? "bg-gray-50 hover:shadow-sm hover:translate-y-0.5 transition-all duration-300"
                : "bg-transparent"
            }`}
          >
            {date && (
              <span
                className={`font-semibold ${
                  date === todayDate
                    ? "bg-[#1E293B] text-white rounded-md h-full flex p-2 shadow-lg"
                    : "p-2 text-gray-700"
                }`}
              >
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
    <div className="bg-[#FFFFFF] p-6 rounded-xl shadow-sm h-full flex flex-col flex-1 min-w-[400px]">
      <div className="flex justify-between items-center mb-6 gap-2">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
          <CalendarDays className="text-[#2563EB]" size={28} />
          Content Calendar
        </h2>
        <button
          onClick={() => setIsCreatingPost(!isCreatingPost)}
          className="bg-[#1E293B] text-white font-semibold py-3 px-5 rounded-xl flex items-center gap-2 hover:scale-105 transition duration-300 cursor-pointer"
        >
          <Edit size={20} />
          Create Post
        </button>
      </div>

      {isCreatingPost && (
        <CreatePostForm onCancel={() => setIsCreatingPost(false)} />
      )}

      <CalendarGrid />
    </div>
  );
}

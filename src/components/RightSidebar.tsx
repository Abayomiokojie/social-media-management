// src/components/RightSidebar.tsx
import { Bell } from "lucide-react"; // FIXED: Using Bell icon instead of AlertTriangle
import { mockPostOverview, mockRecentActivity } from "@/lib/mockData";

// Data now includes an icon and colors for easier mapping
const overviewItems = [
  {
    label: "Drafts",
    value: mockPostOverview.drafts,
    color: "bg-gray-200 text-gray-800",
  },
  {
    label: "Scheduled",
    value: mockPostOverview.scheduled,
    color: "bg-[#1E293B] text-white",
  },
  {
    label: "Published",
    value: mockPostOverview.published,
    color: "bg-green-100 text-green-700",
  },
  {
    label: "Awaiting Approval",
    value: mockPostOverview.awaitingApproval,
    color: "bg-amber-100 text-amber-700",
  },
];

export default function RightSidebar() {
  return (
    <aside className="lg:w-80 flex  sm:grid grid-cols-2 grid-rows-1 lg:flex flex-col gap-6  ">
      <div className="bg-gray-50 p-6 rounded-xl flex flex-col gap-4 shadow-md">
        <h3 className="text-base font-bold text-gray-800">Post Overview</h3>
        <ul className="space-y-3 text-sm">
          {overviewItems.map((item) => (
            <li
              key={item.label}
              className="flex justify-between items-center bg-gray-50 p-2 rounded-lg border border-gray-100 "
            >
              <span className="text-gray-600 font-semibold">{item.label}</span>
              <span
                className={`text-xs font-bold px-2 py-1 rounded-full ${item.color}`}
              >
                {item.value}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-brand-card-bg p-6 rounded-xl shadow-md flex flex-col gap-4 backdrop-blur-md bg-white/40 dark:bg-gray-50">
        <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
          {/* FIXED: Changed icon to a Bell and made it orange */}
          <Bell className="text-orange-500" size={20} />
          Recent Activity
        </h3>
        <ul className="space-y-4">
          {mockRecentActivity.map((activity) => (
            <li key={activity.id} className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full mt-1">
                <Bell className="text-orange-500" size={16} />
              </div>
              <div>
                <p className="text-gray-700 text-sm">{activity.postTitle}</p>
                <p className="text-gray-400 text-xs">{activity.timestamp}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { NotificationSetting } from "@/types/index";
import SaveButton from "../saveButton";

// interface NotificationSetting {
//   id: string;
//   label: string;
//   description: string;
//   enabled: boolean;
// }

const NotificationsTab: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationSetting[]>([
    {
      id: "email",
      label: "Email Notifications",
      description: "Receive notifications via email",
      enabled: true,
    },
    {
      id: "push",
      label: "Push Notifications",
      description: "Browser and mobile push notifications",
      enabled: false,
    },
    {
      id: "reminders",
      label: "Post Reminders",
      description: "Reminders about scheduled posts",
      enabled: true,
    },
    {
      id: "engagement",
      label: "Engagement Alerts",
      description: "Notifications about likes, shares, and comments",
      enabled: true,
    },
    {
      id: "mentions",
      label: "Mention Alerts",
      description: "When someone mentions you",
      enabled: true,
    },
    {
      id: "approvals",
      label: "Approval Requests",
      description: "When posts need your approval",
      enabled: false,
    },
    {
      id: "chat",
      label: "Chat Messages",
      description: "New messages in team chat",
      enabled: true,
    },
    {
      id: "reports",
      label: "Weekly Reports",
      description: "Weekly analytics and performance reports",
      enabled: false,
    },
    {
      id: "marketing",
      label: "Marketing Emails",
      description: "Product updates and marketing content",
      enabled: false,
    },
  ]);

  const toggleNotification = (id: string) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, enabled: !notif.enabled } : notif
      )
    );
  };

  //Save update

  const [originalSettings, setOriginalSettings] = useState<
    NotificationSetting[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    // Store original settings for comparison
    setOriginalSettings(JSON.parse(JSON.stringify(notifications)));
  }, []);

  useEffect(() => {
    // Check if there are any changes
    const changed =
      JSON.stringify(notifications) !== JSON.stringify(originalSettings);
    setHasChanges(changed);
    if (changed) setIsSaved(false);
  }, [notifications, originalSettings]);

  // Handle save action
  const handleSave = async () => {
    setIsLoading(true);

    try {
      // Simulate API call with the changed settings
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Update original settings to current settings
      setOriginalSettings(JSON.parse(JSON.stringify(notifications)));

      setIsSaved(true);
      setHasChanges(false);

      // Show success animation
      setTimeout(() => {
        setIsSaved(false);
      }, 3000);
    } catch (error) {
      console.error("Error saving notifications:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h3 className="text-2xl font-semibold mb-2">Notification Preferences</h3>
      <p className="text-gray-600 mb-8">
        Choose how you want to be notified about activity.
      </p>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <h5 className="font-medium text-gray-900">
                {notification.label}
              </h5>
              <p className="text-sm text-gray-600">
                {notification.description}
              </p>
            </div>
            <label
              htmlFor={notification.id}
              className="relative inline-flex items-center cursor-pointer"
            >
              <input
                title={notification.label}
                name="notification"
                id={notification.id}
                type="checkbox"
                checked={notification.enabled}
                onChange={() => toggleNotification(notification.id)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <SaveButton
          onClick={handleSave}
          isLoading={isLoading}
          isSaved={isSaved}
        />
      </div>
    </div>
  );
};

export default NotificationsTab;

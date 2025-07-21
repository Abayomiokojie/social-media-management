import React, { useEffect, useState } from "react";
import { X, User, Shield, Bell, Eye, LogOut } from "lucide-react";
import ProfileTab from "./tabs/ProfileTab";
import AccountTab from "./tabs/AccountTab";
import NotificationsTab from "./tabs/NotificationsTab";
import PrivacyTab from "./tabs/PrivacyTab";
import { SettingsProps } from "@/types/index";

const Settings = ({ isOpen, onClose }: SettingsProps) => {
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const tabs = [
    {
      id: "profile",
      label: "Profile",
      subtitle: "Personal information",
      icon: User,
    },
    {
      id: "account",
      label: "Account",
      subtitle: "Security & login",
      icon: Shield,
    },
    {
      id: "notifications",
      label: "Notifications",
      subtitle: "Alert preferences",
      icon: Bell,
    },
    {
      id: "privacy",
      label: "Privacy",
      subtitle: "Data & visibility",
      icon: Eye,
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileTab />;
      case "account":
        return <AccountTab />;
      case "notifications":
        return <NotificationsTab />;
      case "privacy":
        return <PrivacyTab />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop:blur-2xl flex items-center justify-center z-50 p-4">
      <div className="bg-white shadow-2xl w-full max-w-4xl rounded-2xl p-4 ">
        {/* <div className="flex h-full"> */}
        <div className="flex max-h-[90vh]  ">
          {/* Sidebar */}
          <div className="w-72 bg-gray-50 p-6 border-r border-gray-200 flex-shrink-0 overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-600">
                  Settings
                </h2>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="text-gray-500 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" strokeWidth={3} />
              </button>
            </div>

            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-start gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? "bg-gray-800 text-white shadow-xl"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <Icon className="w-5 h-5 mt-0.5" />
                    <div className="text-left">
                      <div className="font-semibold">{tab.label}</div>
                      <div
                        className={`text-xs ${
                          activeTab === tab.id
                            ? "text-gray-300 "
                            : "text-gray-500"
                        }`}
                      >
                        {tab.subtitle}
                      </div>
                    </div>
                  </button>
                );
              })}
            </nav>

            <div className="mt-auto pt-8">
              <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all">
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Switch User</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto  ">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

"use client";

import React, { useState } from "react";
import SaveButton from "../saveButton";

const AccountTab: React.FC = () => {
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  const [security, setSecurity] = useState({
    twoFactor: true,
    loginNotifications: true,
    sessionTimeout: "30",
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  //   const handleSave = () => {
  //     // Logic to save changes
  //     console.log("Changes saved:", { passwords, security });
  //   };

  // Handle save action
  const handleSave = async () => {
    setIsLoading(true);

    try {
      // Simulate API call with the changed settings
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Update original settings to current settings
      //   setOriginalSettings(JSON.parse(JSON.stringify(notifications)));

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
      <h3 className="text-2xl font-semibold mb-2">Account Security</h3>
      <p className="text-gray-600 mb-8 font-medium">
        Manage your password and security settings.
      </p>

      {/* Change Password Section */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <h4 className="text-base font-semibold mb-4 text-gray-600">
          Change Password
        </h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <input
              type="password"
              name="current"
              value={passwords.current}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <input
                type="password"
                name="new"
                value={passwords.new}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm"
                value={passwords.confirm}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Security Preferences */}
      <div>
        <h4 className="text-base text-gray-600 font-semibold mb-4">
          Security Preferences
        </h4>
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
            <div>
              <h5 className="font-medium">Two-Factor Authentication</h5>
              <p className="text-sm text-gray-600">
                Add an extra layer of security to your account
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={security.twoFactor}
                onChange={(e) =>
                  setSecurity({ ...security, twoFactor: e.target.checked })
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
            <div>
              <h5 className="font-medium">Login Notifications</h5>
              <p className="text-sm text-gray-600">
                Get notified when someone logs into your account
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={security.loginNotifications}
                onChange={(e) =>
                  setSecurity({
                    ...security,
                    loginNotifications: e.target.checked,
                  })
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-medium">Session Timeout</h5>
                <p className="text-sm text-gray-600">
                  Automatically log out after inactivity
                </p>
              </div>
              <select
                title="Session Timeout"
                name="sessionTimeout"
                value={security.sessionTimeout}
                onChange={(e) =>
                  setSecurity({ ...security, sessionTimeout: e.target.value })
                }
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              >
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="120">2 hours</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        {/* <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
          Save Changes
        </button> */}
        <SaveButton
          onClick={handleSave}
          isLoading={isLoading}
          isSaved={isSaved}
        />
      </div>
    </div>
  );
};

export default AccountTab;

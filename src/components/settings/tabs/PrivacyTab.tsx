import React, { useState } from "react";

const PrivacyTab: React.FC = () => {
  const [privacy, setPrivacy] = useState({
    profileVisibility: "team",
    showEmail: true,
    showPhone: false,
    allowDirectMessages: true,
    dataSharing: false,
    analyticsTracking: true,
  });

  return (
    <div className="p-8">
      <h3 className="text-2xl font-semibold mb-2">Privacy & Data</h3>
      <p className="text-gray-600 mb-8 font-medium">
        Control your privacy and data sharing preferences.
      </p>

      {/* Profile Visibility */}
      <div className="mb-8">
        <h4 className="text-base font-semibold mb-4 text-gray-600">
          Profile Visibility
        </h4>
        <div className="space-y-3">
          <label className="flex items-start p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="radio"
              name="visibility"
              value="public"
              checked={privacy.profileVisibility === "public"}
              onChange={(e) =>
                setPrivacy({ ...privacy, profileVisibility: e.target.value })
              }
              className="mt-1 mr-3"
            />
            <div>
              <div className="font-medium">Public</div>
              <div className="text-sm text-gray-600">
                Anyone can see your profile
              </div>
            </div>
          </label>
          <label className="flex items-start p-4 border-2 border-blue-500 bg-blue-50 rounded-lg cursor-pointer">
            <input
              type="radio"
              name="visibility"
              value="team"
              checked={privacy.profileVisibility === "team"}
              onChange={(e) =>
                setPrivacy({ ...privacy, profileVisibility: e.target.value })
              }
              className="mt-1 mr-3"
            />
            <div>
              <div className="font-medium">Team Only</div>
              <div className="text-sm text-gray-600">
                Only team members can see your profile
              </div>
            </div>
          </label>
          <label className="flex items-start p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="radio"
              name="visibility"
              value="private"
              checked={privacy.profileVisibility === "private"}
              onChange={(e) =>
                setPrivacy({ ...privacy, profileVisibility: e.target.value })
              }
              className="mt-1 mr-3"
            />
            <div>
              <div className="font-medium">Private</div>
              <div className="text-sm text-gray-600">
                Only you can see your profile
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* Contact Information Visibility */}
      <div className="mb-8">
        <h4 className="text-base font-semibold mb-4 text-gray-600">
          Contact Information Visibility
        </h4>
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
            <div>
              <h5 className="font-medium">Show Email Address</h5>
              <p className="text-sm text-gray-600">
                Allow others to see your email
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={privacy.showEmail}
                onChange={(e) =>
                  setPrivacy({ ...privacy, showEmail: e.target.checked })
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
            <div>
              <h5 className="font-medium">Show Phone Number</h5>
              <p className="text-sm text-gray-600">
                Allow others to see your phone number
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={privacy.showPhone}
                onChange={(e) =>
                  setPrivacy({ ...privacy, showPhone: e.target.checked })
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
            <div>
              <h5 className="font-medium">Allow Direct Messages</h5>
              <p className="text-sm text-gray-600">
                Let team members send you direct messages
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={privacy.allowDirectMessages}
                onChange={(e) =>
                  setPrivacy({
                    ...privacy,
                    allowDirectMessages: e.target.checked,
                  })
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Data & Analytics */}
      <div>
        <h4 className="text-base font-semibold mb-4 text-gray-600">
          Data & Analytics
        </h4>
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
            <div>
              <h5 className="font-medium">Data Sharing</h5>
              <p className="text-sm text-gray-600">
                Share anonymized data to improve the platform
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={privacy.dataSharing}
                onChange={(e) =>
                  setPrivacy({ ...privacy, dataSharing: e.target.checked })
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
            <div>
              <h5 className="font-medium">Analytics Tracking</h5>
              <p className="text-sm text-gray-600">
                Allow usage analytics for better experience
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={privacy.analyticsTracking}
                onChange={(e) =>
                  setPrivacy({
                    ...privacy,
                    analyticsTracking: e.target.checked,
                  })
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default PrivacyTab;

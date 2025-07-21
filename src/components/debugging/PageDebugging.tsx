
"use client";

export default function ThemeTest() {
  return (
    <div className="p-8">
      <button
        onClick={() => {
          document.documentElement.classList.toggle("dark");
          console.log("HTML classes:", document.documentElement.className);
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
      >
        Toggle Dark Class Manually
      </button>

      <div className="p-4 bg-white dark:bg-black text-black dark:text-white border-2 border-gray-300 dark:border-gray-700">
        <p>
          This should be white background in light mode and black in dark mode
        </p>
        <p>
          Current classes on html: <span id="classes"></span>
        </p>
      </div>

      <div className="bg-theme-primary text-theme-primary min-h-screen dark:bg-blue-600">
        <div className="bg-theme-card p-4">Content</div>
      </div>
    </div>
  );
}

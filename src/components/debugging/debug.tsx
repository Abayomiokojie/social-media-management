"use client";

import { useTheme } from "@/context/ThemeProvider";
import { useEffect, useState } from "react";

export function ThemeDebugger() {
  const {
    theme,
    // setTheme,
    forceTheme,
  } = useTheme();
  const [htmlClasses, setHtmlClasses] = useState("");
  const [computedBg, setComputedBg] = useState("");

  useEffect(() => {
    const updateDebugInfo = () => {
      setHtmlClasses(document.documentElement.className);
      const testEl = document.createElement("div");
      testEl.className = "bg-white dark:bg-black";
      document.body.appendChild(testEl);
      const styles = window.getComputedStyle(testEl);
      setComputedBg(styles.backgroundColor);
      document.body.removeChild(testEl);
    };

    updateDebugInfo();

    const observer = new MutationObserver(updateDebugInfo);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-gray-100 border-2 border-gray-300 rounded-lg shadow-lg z-50 text-xs font-mono">
      <div>Theme State: {theme}</div>
      <div>HTML Classes: {htmlClasses}</div>
      <div>Test BG Color: {computedBg}</div>
      <div className="mt-2 space-x-2">
        <button
          onClick={() => forceTheme("light")}
          className="px-2 py-1 bg-yellow-300 text-black rounded"
        >
          Force Light
        </button>
        <button
          onClick={() => forceTheme("dark")}
          className="px-2 py-1 bg-gray-800 text-white rounded"
        >
          Force Dark
        </button>
      </div>
    </div>
  );
}

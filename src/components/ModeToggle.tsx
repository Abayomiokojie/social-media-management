"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/context/ThemeProvider";

export function ModeToggle() {
  const { theme, toggleTheme } = useTheme();

  const iconSize = 20;

  return (
    <>
      <button
        onClick={toggleTheme}
        aria-label={`Switch theme (current: ${theme})`}
        className={`relative flex items-center justify-center w-10 h-10 rounded-full border transition
        ${
          theme === "light"
            ? "bg-gray-50 text-gray-800 border-gray-300 hover:bg-gray-200"
            : "text-slate-300 dark:border-gray-500 hover:bg-gray-700"
        }`}
      >
        {/* Icon rendering based on current theme */}
        {theme === "light" && <Sun size={iconSize} />}
        {theme === "dark" && <Moon size={iconSize} />}
      </button>
    </>
  );
}

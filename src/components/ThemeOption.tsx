"use client";
import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeOption = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 p-2 bg-gray-200 border-1 border-solid border-foreground rounded-full transition-all duration-500 cursor-pointer"
    >
      {theme === "light" ? (
        <Sun className="w-6 h-6 text-foreground" />
      ) : (
        <Moon className="w-6 h-6 text-white" />
      )}
    </button>
  );
};

export default ThemeOption;

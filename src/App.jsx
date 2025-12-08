import "./App.css";
import React, { useState, useEffect } from "react";
import Dashboard from "./component/Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white p-4 transition">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Your Todo UI here */}

      <Dashboard />
    </div>
  );
}

export default App;

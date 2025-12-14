import React, { useState, useEffect } from "react";
import Dashboard from "./component/Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark"); // add dark class to body
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white bg-gray-900 dark:text-white p-4 transition-colors duration-300">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors duration-300 bg-light-black">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <Dashboard /> {/* All components inside inherit dark mode via classes */}
    </div>
  );
}

export default App;

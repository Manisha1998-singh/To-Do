import React from "react";

function DashboardItem({ title, description }) {
  return (
    <div className="p-4 mb-4 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors duration-300 shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}

export default DashboardItem;

import React, { useEffect, useState } from "react";

export default function Edit({ editingTodo, upDateTodo, error }) {
  const [task, setTask] = useState("");

  useEffect(() => {
    if (editingTodo) {
      const id = setTimeout(() => setTask(editingTodo.task), 0);
      return () => clearTimeout(id);
    }
  }, [editingTodo]);

  if (!editingTodo) return null; // don't render if nothing to edit

  return (
    <div className="flex mb-4 mt-4 w-full">
      <textarea
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className={`w-full px-4 py-2 mr-2 rounded-lg focus:outline-none 
    ${
      error
        ? "border border-red-500"
        : "border border-gray-400 focus:border-blue-500"
    }
  `}
      />
      <button
        onClick={() => upDateTodo(editingTodo.id, task)}
        className="bg-blue-500 hover:bg-blue-700 
                     text-white font-bold py-2 px-4 rounded">
        Save
      </button>
    </div>
  );
}
